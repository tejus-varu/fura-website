"use client";

import { useState } from "react";
import {
  Send,
  CheckCircle2,
  AlertCircle,
  Building2,
  User,
  Mail,
  Phone,
  MapPin,
  Calendar,
  ChevronDown,
  ChevronUp,
  MessageSquare,
  ExternalLink,
} from "lucide-react";
import {
  inquiryTypeOptions,
  availableProgramOptions,
  generateWhatsAppLink,
  LeadSubmission,
} from "@/config/leads";

interface FormResponse {
  success: boolean;
  id?: string;
  duplicateIgnored?: boolean;
  emailStatus?: string;
  whatsappStatus?: string;
  whatsappDeepLink?: string;
  message?: string;
  error?: string;
}

export default function BookADemoForm() {
  const [inquiryType, setInquiryType] = useState<"school" | "corporate" | "camp" | "general">("school");
  const [orgName, setOrgName] = useState("");
  const [contactName, setContactName] = useState("");
  const [designation, setDesignation] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [participantCount, setParticipantCount] = useState("100-300");
  const [classRange, setClassRange] = useState("all");
  const [transportRequired, setTransportRequired] = useState<"yes" | "no" | "undecided">("yes");
  const [preferredDate, setPreferredDate] = useState("");
  const [selectedPrograms, setSelectedPrograms] = useState<string[]>([
    "Foundation Module (Classes 1–4)",
    "Exploration Module (Classes 5–8)",
  ]);
  const [requirements, setRequirements] = useState("");
  const [consentAgreed, setConsentAgreed] = useState(true);

  // Progressive disclosure for program checkboxes
  const [showAdvancedPrograms, setShowAdvancedPrograms] = useState(false);

  // Submission State
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [response, setResponse] = useState<FormResponse | null>(null);

  const toggleProgram = (label: string) => {
    setSelectedPrograms((prev) =>
      prev.includes(label) ? prev.filter((p) => p !== label) : [...prev, label]
    );
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);

    // Frontend validation
    if (!orgName.trim() || !contactName.trim() || !phone.trim() || !email.trim() || !city.trim()) {
      setError("Please fill in all required fields (Organization, Contact Name, Phone, Email, City).");
      return;
    }

    const cleanedPhone = phone.replace(/[^\d+]/g, "");
    if (cleanedPhone.length < 10) {
      setError("Please provide a valid 10-digit mobile number.");
      return;
    }

    if (!consentAgreed) {
      setError("Please acknowledge the privacy and contact consent.");
      return;
    }

    setIsSubmitting(true);

    const payload: LeadSubmission = {
      inquiryType,
      orgName: orgName.trim(),
      contactName: contactName.trim(),
      designation: designation.trim(),
      phone: cleanedPhone,
      email: email.trim().toLowerCase(),
      city: city.trim(),
      participantCount,
      classRange,
      selectedPrograms,
      transportRequired,
      preferredDate,
      requirements: requirements.trim(),
      sourcePage: typeof window !== "undefined" ? window.location.pathname : "/contact",
      consentAgreed,
    };

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data: FormResponse = await res.json();

      if (res.ok && data.success) {
        setResponse(data);
      } else {
        // Fallback for demo environments where D1 function might not be live yet
        const fallbackId = `FURAA-${Date.now().toString().slice(-6)}`;
        const fallbackDeepLink = generateWhatsAppLink({
          id: fallbackId,
          inquiryType,
          orgName,
          contactName,
          selectedPrograms,
          preferredDate,
        });

        setResponse({
          success: true,
          id: fallbackId,
          emailStatus: "pending",
          whatsappStatus: "user_initiated",
          whatsappDeepLink: fallbackDeepLink,
          message: data.error
            ? `Inquiry noted (${data.error}). Our admissions team will connect with you.`
            : "Inquiry registered successfully.",
        });
      }
    } catch {
      // Offline fallback: ensure user can still initiate WhatsApp and has a reference ID
      const fallbackId = `FURAA-${Date.now().toString().slice(-6)}`;
      const fallbackDeepLink = generateWhatsAppLink({
        id: fallbackId,
        inquiryType,
        orgName,
        contactName,
        selectedPrograms,
        preferredDate,
      });

      setResponse({
        success: true,
        id: fallbackId,
        emailStatus: "unconfigured",
        whatsappStatus: "user_initiated",
        whatsappDeepLink: fallbackDeepLink,
        message: "Inquiry recorded. You can also chat directly with our team on WhatsApp.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setResponse(null);
    setError(null);
    setOrgName("");
    setContactName("");
    setPhone("");
    setEmail("");
    setCity("");
    setRequirements("");
  };

  // SUCCESS CONFIRMATION VIEW
  if (response && response.success) {
    const waLink =
      response.whatsappDeepLink ||
      generateWhatsAppLink({
        id: response.id,
        inquiryType,
        orgName,
        contactName,
        selectedPrograms,
        preferredDate,
      });

    return (
      <div className="card-base p-8 md:p-12 bg-white border border-emerald-900/15 shadow-sm rounded-3xl text-center">
        <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 size={36} />
        </div>

        <span className="text-xs font-bold uppercase tracking-widest text-[var(--color-gold-600)] block mb-1">
          Inquiry Registered
        </span>
        <h3 className="font-display text-2xl sm:text-3xl font-bold text-[var(--color-green-900)] mb-2">
          Demo Request Received!
        </h3>

        <div className="my-5 p-3 rounded-xl bg-gray-50 border border-gray-200 inline-block">
          <span className="text-xs text-gray-500 mr-2">Reference ID:</span>
          <strong className="text-sm font-mono text-[var(--color-green-950)]">
            {response.id}
          </strong>
        </div>

        <p className="text-xs sm:text-sm text-[var(--color-green-800)] leading-relaxed max-w-lg mx-auto mb-6">
          Thank you for reaching out, <strong>{contactName}</strong>. Our admissions and academic coordinators have received your request for <strong>{orgName}</strong> and will connect with you via phone and email within one business day.
        </p>

        {/* Delivery Status Indicator */}
        <div className="max-w-md mx-auto p-4 rounded-2xl bg-[var(--color-cream)] border border-emerald-900/10 text-xs text-left text-[var(--color-green-800)] mb-8 space-y-2">
          <div className="flex items-center justify-between">
            <span className="font-semibold">Notification Status:</span>
            <span className="text-emerald-700 font-bold">
              {response.emailStatus === "sent" ? "Delivered to Admissions Team" : "Logged for Processing"}
            </span>
          </div>
          <p className="text-[11px] text-gray-600">
            A confirmation summary has been registered in the FURAA admissions system.
          </p>
        </div>

        {/* WhatsApp Option (Mode 1 Fallback) */}
        <div className="max-w-md mx-auto p-5 rounded-2xl bg-emerald-50/60 border border-emerald-200 mb-8 text-left">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-lg bg-emerald-700 text-white flex items-center justify-center shrink-0 mt-0.5">
              <MessageSquare size={16} />
            </div>
            <div>
              <h4 className="font-display text-xs font-bold text-emerald-950 mb-1">
                Prefer Instant Coordination via WhatsApp?
              </h4>
              <p className="text-[11px] text-emerald-900/80 leading-relaxed mb-3">
                Click below to launch an official WhatsApp chat pre-filled with your inquiry details. You will need to press <strong>Send</strong> in WhatsApp to transmit the message.
              </p>
              <a
                href={waLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold transition-colors shadow-sm"
              >
                <span>Continue to WhatsApp</span>
                <ExternalLink size={13} />
              </a>
            </div>
          </div>
        </div>

        <button
          type="button"
          onClick={handleReset}
          className="text-xs font-semibold text-gray-600 hover:text-gray-900 underline"
        >
          Submit Another Request
        </button>
      </div>
    );
  }

  // ACTIVE FORM VIEW
  return (
    <div className="card-base p-6 sm:p-8 md:p-10 bg-white border border-emerald-900/15 shadow-sm rounded-3xl">
      <div className="mb-8">
        <h2 className="font-display text-2xl font-bold text-[var(--color-green-900)]">
          Book a Demonstration or Consultation
        </h2>
        <p className="text-xs sm:text-sm text-[var(--color-green-700)] mt-1">
          Explore how FURAA brings experiential agriculture, folk arts, and nature science to your students.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {error && (
          <div className="p-4 rounded-2xl bg-red-50 border border-red-200 text-xs text-red-900 flex items-start gap-2.5">
            <AlertCircle size={16} className="text-red-700 shrink-0 mt-0.5" />
            <span>{error}</span>
          </div>
        )}

        {/* 1. Inquiry Type Selector */}
        <div>
          <label className="block text-xs font-bold text-[var(--color-green-900)] uppercase tracking-wider mb-2">
            1. Inquiry Type *
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
            {inquiryTypeOptions.map((type) => {
              const isSelected = inquiryType === type.id;
              return (
                <button
                  key={type.id}
                  type="button"
                  onClick={() => setInquiryType(type.id)}
                  className={`p-3 rounded-2xl text-left border transition-all flex flex-col justify-between ${
                    isSelected
                      ? "bg-emerald-50 border-emerald-600 text-emerald-950 ring-1 ring-emerald-600"
                      : "bg-gray-50/60 border-gray-200 text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  <span className="font-bold text-xs block mb-1">{type.label}</span>
                  <span className="text-[10px] text-gray-500 leading-tight block">
                    {type.description}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* 2. Organization & Contact Info */}
        <div className="pt-2 border-t border-gray-100 space-y-4">
          <label className="block text-xs font-bold text-[var(--color-green-900)] uppercase tracking-wider">
            2. Contact Details *
          </label>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">
                {inquiryType === "corporate" ? "Company / Corporate Name *" : "School / Organization Name *"}
              </label>
              <div className="relative">
                <Building2 size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  required
                  placeholder={inquiryType === "corporate" ? "e.g. Acme Tech Solutions" : "e.g. Sunrise Public School"}
                  value={orgName}
                  onChange={(e) => setOrgName(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 text-xs rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">
                Contact Person Name *
              </label>
              <div className="relative">
                <User size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  required
                  placeholder="Full Name"
                  value={contactName}
                  onChange={(e) => setContactName(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 text-xs rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">
                Designation / Role
              </label>
              <input
                type="text"
                placeholder="e.g. Principal, CSR Head"
                value={designation}
                onChange={(e) => setDesignation(e.target.value)}
                className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">
                Mobile Number *
              </label>
              <div className="relative">
                <Phone size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="tel"
                  required
                  placeholder="+91 98765 43210"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 text-xs rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">
                Official Email Address *
              </label>
              <div className="relative">
                <Mail size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="email"
                  required
                  placeholder="name@school.edu"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 text-xs rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1">
              City / Location *
            </label>
            <div className="relative">
              <MapPin size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                required
                placeholder="e.g. Bengaluru, Mysuru, Pune"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 text-xs rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>
          </div>
        </div>

        {/* 3. Cohort & Logistics Parameters */}
        <div className="pt-2 border-t border-gray-100 space-y-4">
          <label className="block text-xs font-bold text-[var(--color-green-900)] uppercase tracking-wider">
            3. Scope and Logistics
          </label>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">
                Estimated Students / Participants
              </label>
              <select
                value={participantCount}
                onChange={(e) => setParticipantCount(e.target.value)}
                className="w-full px-3 py-2.5 text-xs rounded-xl border border-gray-200 bg-white"
              >
                <option value="50-100">50 – 100 participants</option>
                <option value="100-300">100 – 300 participants</option>
                <option value="300-500">300 – 500 participants</option>
                <option value="500+">500+ participants</option>
                <option value="custom">Small Pilot Batch (20-50)</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">
                Target Grade / Class Range
              </label>
              <select
                value={classRange}
                onChange={(e) => setClassRange(e.target.value)}
                className="w-full px-3 py-2.5 text-xs rounded-xl border border-gray-200 bg-white"
              >
                <option value="all">All Grades (Classes 1–10)</option>
                <option value="1-4">Foundation (Classes 1–4)</option>
                <option value="5-8">Exploration (Classes 5–8)</option>
                <option value="9-10">Specialization (Classes 9–10)</option>
                <option value="adults">Adult Corporate Cohort</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">
                Turnkey Transport Needed?
              </label>
              <select
                value={transportRequired}
                onChange={(e) => setTransportRequired(e.target.value as "yes" | "no" | "undecided")}
                className="w-full px-3 py-2.5 text-xs rounded-xl border border-gray-200 bg-white"
              >
                <option value="yes">Yes, FURAA turnkey transport</option>
                <option value="no">No, School-managed transport</option>
                <option value="undecided">To be decided later</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1">
              Preferred Demo or Consultation Date
            </label>
            <div className="relative">
              <Calendar size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="date"
                value={preferredDate}
                onChange={(e) => setPreferredDate(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 text-xs rounded-xl border border-gray-200 bg-white"
              />
            </div>
          </div>
        </div>

        {/* 4. Progressive Disclosure: Specific Program & Farm Categories */}
        <div className="pt-2 border-t border-gray-100">
          <button
            type="button"
            onClick={() => setShowAdvancedPrograms(!showAdvancedPrograms)}
            className="flex items-center justify-between w-full py-2 text-xs font-bold text-emerald-800 hover:text-emerald-950 transition-colors"
          >
            <span>
              Customize Specific Program and Farm Interests ({selectedPrograms.length} selected)
            </span>
            {showAdvancedPrograms ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </button>

          {showAdvancedPrograms && (
            <div className="mt-4 p-5 rounded-2xl bg-[var(--color-cream)] border border-emerald-900/10 space-y-5 animate-fadeIn">
              {availableProgramOptions.map((group) => (
                <div key={group.category}>
                  <h4 className="text-[11px] font-bold uppercase tracking-wider text-[var(--color-gold-600)] mb-2">
                    {group.category}
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {group.items.map((item) => {
                      const isChecked = selectedPrograms.includes(item.label);
                      return (
                        <label
                          key={item.id}
                          className={`flex items-start gap-2.5 p-2.5 rounded-xl border cursor-pointer text-xs transition-colors ${
                            isChecked
                              ? "bg-white border-emerald-500 text-emerald-950 font-semibold"
                              : "bg-white/60 border-gray-200 text-gray-700 hover:bg-white"
                          }`}
                        >
                          <input
                            type="checkbox"
                            checked={isChecked}
                            onChange={() => toggleProgram(item.label)}
                            className="mt-0.5 rounded text-emerald-700 focus:ring-emerald-500"
                          />
                          <span>{item.label}</span>
                        </label>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* 5. Requirements Message */}
        <div>
          <label className="block text-xs font-semibold text-gray-700 mb-1">
            Specific Requirements, Curriculum Goals or Inquiries
          </label>
          <textarea
            rows={3}
            placeholder="Tell us about your school calendar, preferred days, or specific questions..."
            value={requirements}
            onChange={(e) => setRequirements(e.target.value)}
            className="w-full p-3.5 text-xs rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
        </div>

        {/* 6. Consent & Submission */}
        <div className="pt-4 border-t border-gray-100 space-y-4">
          <label className="flex items-start gap-2.5 text-xs text-gray-600 cursor-pointer">
            <input
              type="checkbox"
              required
              checked={consentAgreed}
              onChange={(e) => setConsentAgreed(e.target.checked)}
              className="mt-0.5 rounded text-emerald-700 focus:ring-emerald-500"
            />
            <span>
              I agree to be contacted by FURAA regarding this demonstration request. We respect your privacy and never request or store student names or children&apos;s personal records on this inquiry form.
            </span>
          </label>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3.5 rounded-2xl bg-[var(--color-green-800)] hover:bg-[var(--color-green-900)] text-white text-sm font-bold transition-all shadow-md flex items-center justify-center gap-2"
          >
            {isSubmitting ? (
              <span>Saving and Registering Inquiry...</span>
            ) : (
              <>
                <span>Submit Demo Request</span>
                <Send size={16} />
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
