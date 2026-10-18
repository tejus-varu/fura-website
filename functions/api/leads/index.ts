// Cloudflare Pages Function: /api/leads
// Public POST: Validates, dedupes, saves lead to D1, triggers email & WhatsApp alerts
// Admin GET: Lists leads with filtering (requires admin auth)

import { validateAdminAuth } from "../_auth";

interface Env {
  DB?: any;
  ADMIN_API_KEY?: string;
  RESEND_API_KEY?: string;
  NOTIFICATION_EMAIL?: string;
  WHATSAPP_API_TOKEN?: string;
  WHATSAPP_PHONE_NUMBER_ID?: string;
  WHATSAPP_ADMIN_RECIPIENT?: string;
}

const NOTIFICATION_RECIPIENT = "admin@myfuraa.com";

export const onRequestPost: PagesFunction<Env> = async (context) => {
  const { request, env } = context;

  // 1. Parse JSON Payload
  let payload: any = {};
  try {
    payload = await request.json();
  } catch {
    return new Response(JSON.stringify({ error: "Invalid JSON format" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  const {
    inquiryType = "school",
    orgName,
    contactName,
    designation = "",
    phone,
    email,
    city,
    participantCount = "",
    classRange = "",
    selectedPrograms = [],
    transportRequired = "undecided",
    preferredDate = "",
    requirements = "",
    sourcePage = "/contact",
    consentAgreed,
  } = payload;

  // 2. Strict Field Validation
  if (!orgName || !contactName || !phone || !email || !city) {
    return new Response(
      JSON.stringify({
        error: "Missing required fields. Please provide organization name, contact name, phone, email, and city.",
      }),
      {
        status: 400,
        headers: { "Content-Type": "application/json" },
      }
    );
  }

  // Validate Email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return new Response(
      JSON.stringify({ error: "Please provide a valid email address." }),
      {
        status: 400,
        headers: { "Content-Type": "application/json" },
      }
    );
  }

  // Validate Phone (at least 10 digits)
  const cleanedPhone = phone.replace(/[^\d+]/g, "");
  if (cleanedPhone.length < 10) {
    return new Response(
      JSON.stringify({ error: "Please provide a valid 10-digit mobile number." }),
      {
        status: 400,
        headers: { "Content-Type": "application/json" },
      }
    );
  }

  // Validate Consent
  if (!consentAgreed) {
    return new Response(
      JSON.stringify({ error: "Please acknowledge the privacy & contact consent." }),
      {
        status: 400,
        headers: { "Content-Type": "application/json" },
      }
    );
  }

  // 3. Database Check & Idempotency / Duplicate Prevention (5 minutes)
  const leadId = `FURAA-${Date.now().toString().slice(-6)}-${Math.random().toString(36).substring(2, 5).toUpperCase()}`;

  let emailStatus: "sent" | "failed" | "unconfigured" = "unconfigured";
  let whatsappStatus: "sent" | "failed" | "unconfigured" | "user_initiated" = "unconfigured";

  if (env.DB) {
    try {
      // Check for duplicate in last 5 minutes
      const recentDuplicate = await env.DB.prepare(
        `SELECT id FROM leads 
         WHERE (email = ? OR phone = ?) 
         AND created_at >= datetime('now', '-5 minutes') 
         LIMIT 1`
      )
        .bind(email.trim().toLowerCase(), cleanedPhone)
        .first();

      if (recentDuplicate) {
        return new Response(
          JSON.stringify({
            success: true,
            id: recentDuplicate.id,
            duplicateIgnored: true,
            message: "Your inquiry was recently received. Our admissions team is already reviewing your request.",
          }),
          {
            status: 200,
            headers: { "Content-Type": "application/json" },
          }
        );
      }
    } catch {
      // Continue if duplicate check fails
    }
  }

  // 4. Trigger Email Notification Workflow (if provider key is configured)
  const targetEmail = env.NOTIFICATION_EMAIL || NOTIFICATION_RECIPIENT;
  if (env.RESEND_API_KEY) {
    try {
      const emailHtml = `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #e5e7eb; border-radius: 12px; background: #ffffff;">
          <div style="border-bottom: 2px solid #047857; padding-bottom: 12px; margin-bottom: 20px;">
            <h2 style="color: #064e3b; margin: 0 0 6px 0;">New Book a Demo Inquiry</h2>
            <p style="color: #6b7280; font-size: 13px; margin: 0;">Ref ID: <strong>${leadId}</strong> | Inquiry Type: <strong>${inquiryType.toUpperCase()}</strong></p>
          </div>

          <table style="width: 100%; border-collapse: collapse; font-size: 14px; color: #1f2937;">
            <tr><td style="padding: 8px 0; color: #6b7280; width: 35%;">Organization:</td><td style="padding: 8px 0; font-weight: bold;">${orgName}</td></tr>
            <tr><td style="padding: 8px 0; color: #6b7280;">Contact Person:</td><td style="padding: 8px 0; font-weight: bold;">${contactName} (${designation || "Not specified"})</td></tr>
            <tr><td style="padding: 8px 0; color: #6b7280;">Phone / Mobile:</td><td style="padding: 8px 0;"><a href="tel:${cleanedPhone}">${cleanedPhone}</a></td></tr>
            <tr><td style="padding: 8px 0; color: #6b7280;">Email Address:</td><td style="padding: 8px 0;"><a href="mailto:${email}">${email}</a></td></tr>
            <tr><td style="padding: 8px 0; color: #6b7280;">City / Location:</td><td style="padding: 8px 0;">${city}</td></tr>
            <tr><td style="padding: 8px 0; color: #6b7280;">Estimated Students:</td><td style="padding: 8px 0;">${participantCount || "Not specified"}</td></tr>
            <tr><td style="padding: 8px 0; color: #6b7280;">Class Band:</td><td style="padding: 8px 0;">${classRange || "Not specified"}</td></tr>
            <tr><td style="padding: 8px 0; color: #6b7280;">Transport Needed:</td><td style="padding: 8px 0;">${transportRequired.toUpperCase()}</td></tr>
            <tr><td style="padding: 8px 0; color: #6b7280;">Preferred Date:</td><td style="padding: 8px 0;">${preferredDate || "Flexible"}</td></tr>
            <tr><td style="padding: 8px 0; color: #6b7280;">Selected Programs:</td><td style="padding: 8px 0;">${selectedPrograms.join(", ") || "General"}</td></tr>
          </table>

          ${requirements ? `
          <div style="margin-top: 20px; padding: 14px; background: #f9fafb; border-radius: 8px; border-left: 4px solid #10b981;">
            <p style="margin: 0 0 4px 0; font-size: 12px; font-weight: bold; color: #374151;">Requirements / Notes:</p>
            <p style="margin: 0; font-size: 13px; color: #4b5563; line-height: 1.5;">${requirements}</p>
          </div>
          ` : ""}

          <div style="margin-top: 24px; padding-top: 16px; border-top: 1px solid #e5e7eb; font-size: 11px; color: #9ca3af; text-align: center;">
            Sent automatically by FURAA Admissions System · <a href="https://myfuraa.com/admin" style="color: #047857;">Access Admin Console</a>
          </div>
        </div>
      `;

      const emailRes = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${env.RESEND_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "FURAA Admissions <notifications@myfuraa.com>",
          to: [targetEmail],
          subject: `[New Inquiry] ${orgName} — ${leadId} (${inquiryType})`,
          html: emailHtml,
        }),
      });

      emailStatus = emailRes.ok ? "sent" : "failed";
    } catch {
      emailStatus = "failed";
    }
  }

  // 5. Trigger Meta WhatsApp Business Platform API (Mode 2 Automated API)
  if (env.WHATSAPP_API_TOKEN && env.WHATSAPP_PHONE_NUMBER_ID && env.WHATSAPP_ADMIN_RECIPIENT) {
    try {
      const waUrl = `https://graph.facebook.com/v20.0/${env.WHATSAPP_PHONE_NUMBER_ID}/messages`;
      const waText = `🌾 *New FURAA Inquiry* (${leadId})\n• Org: ${orgName}\n• Contact: ${contactName}\n• Phone: ${cleanedPhone}\n• Type: ${inquiryType}\n• Date: ${preferredDate || "Flexible"}`;

      const waRes = await fetch(waUrl, {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${env.WHATSAPP_API_TOKEN}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messaging_product: "whatsapp",
          to: env.WHATSAPP_ADMIN_RECIPIENT,
          type: "text",
          text: { body: waText },
        }),
      });

      whatsappStatus = waRes.ok ? "sent" : "failed";
    } catch {
      whatsappStatus = "failed";
    }
  }

  // 6. Save Lead to Cloudflare D1
  if (env.DB) {
    try {
      await env.DB.prepare(
        `INSERT INTO leads (
          id, inquiry_type, org_name, contact_name, designation,
          phone, email, city, participant_count, class_range,
          selected_programs, transport_required, preferred_date,
          requirements, source_page, processing_status,
          email_status, whatsapp_status, created_at, updated_at
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 'new', ?, ?, datetime('now'), datetime('now'))`
      )
        .bind(
          leadId,
          inquiryType,
          orgName.trim(),
          contactName.trim(),
          designation?.trim() || null,
          cleanedPhone,
          email.trim().toLowerCase(),
          city.trim(),
          participantCount || null,
          classRange || null,
          JSON.stringify(selectedPrograms),
          transportRequired || "undecided",
          preferredDate || null,
          requirements?.trim() || null,
          sourcePage || "/contact",
          emailStatus,
          whatsappStatus
        )
        .run();
    } catch (err: any) {
      return new Response(
        JSON.stringify({
          error: "Failed to persist inquiry in D1 database",
          details: err?.message,
        }),
        {
          status: 500,
          headers: { "Content-Type": "application/json" },
        }
      );
    }
  }

  // 7. Generate Mode 1 User-Initiated WhatsApp Link Fallback
  const programsSummary = selectedPrograms.length > 0 ? selectedPrograms.slice(0, 3).join(", ") : "General Program";
  const whatsappMsg = `Hello FURAA Admissions! 🌾
I have submitted a demonstration inquiry on your website:
• Ref ID: ${leadId}
• Organization: ${orgName}
• Contact: ${contactName}
• Type: ${inquiryType.toUpperCase()} (${programsSummary})
${preferredDate ? `• Preferred Date: ${preferredDate}` : ""}

Please share your availability and curriculum prospectus. Thank you!`;

  const whatsappDeepLink = `https://wa.me/919449490940?text=${encodeURIComponent(whatsappMsg)}`;

  return new Response(
    JSON.stringify({
      success: true,
      id: leadId,
      emailStatus,
      whatsappStatus,
      whatsappDeepLink,
      message: "Demonstration inquiry registered successfully. Our admissions team will connect with you.",
    }),
    {
      status: 201,
      headers: { "Content-Type": "application/json" },
    }
  );
};

export const onRequestGet: PagesFunction<Env> = async (context) => {
  const { request, env } = context;

  // Protect lead data with admin key
  const auth = validateAdminAuth(request, env);
  if (!auth.authorized) {
    return new Response(JSON.stringify({ error: auth.error }), {
      status: 401,
      headers: { "Content-Type": "application/json" },
    });
  }

  if (!env.DB) {
    return new Response(
      JSON.stringify({ error: "D1 database binding 'DB' is not configured." }),
      {
        status: 503,
        headers: { "Content-Type": "application/json" },
      }
    );
  }

  try {
    const url = new URL(request.url);
    const status = url.searchParams.get("status");
    const inquiryType = url.searchParams.get("inquiryType");
    const search = url.searchParams.get("search");

    let query = "SELECT * FROM leads";
    const params: any[] = [];
    const conditions: string[] = [];

    if (status && status !== "all") {
      conditions.push("processing_status = ?");
      params.push(status);
    }

    if (inquiryType && inquiryType !== "all") {
      conditions.push("inquiry_type = ?");
      params.push(inquiryType);
    }

    if (search && search.trim() !== "") {
      conditions.push("(org_name LIKE ? OR contact_name LIKE ? OR email LIKE ? OR phone LIKE ?)");
      const term = `%${search.trim()}%`;
      params.push(term, term, term, term);
    }

    if (conditions.length > 0) {
      query += " WHERE " + conditions.join(" AND ");
    }

    query += " ORDER BY created_at DESC LIMIT 100";

    const { results } = await env.DB.prepare(query).bind(...params).all();

    const leads = (results || []).map((row: any) => {
      let selectedPrograms = [];
      try {
        selectedPrograms = JSON.parse(row.selected_programs);
      } catch {
        selectedPrograms = [];
      }
      return {
        ...row,
        selected_programs: selectedPrograms,
      };
    });

    return new Response(
      JSON.stringify({
        success: true,
        count: leads.length,
        leads,
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (err: any) {
    return new Response(
      JSON.stringify({ error: "Failed to query leads", details: err?.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
};
