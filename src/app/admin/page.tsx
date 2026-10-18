"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  Shield,
  Key,
  Database,
  HardDrive,
  FileText,
  Image as ImageIcon,
  Plus,
  Trash2,
  CheckCircle2,
  AlertTriangle,
  RefreshCw,
  LogOut,
  ExternalLink,
  Lock,
  Inbox,
  Download,
  PhoneCall,
  Search,
  Eye,
  X,
  MapPin,
  Send,
} from "lucide-react";
import { blogCategoryList } from "@/config/blogs";
import { galleryCategoryList } from "@/config/gallery";

interface ServiceStatus {
  status: "ready" | "setup_required";
  timestamp: string;
  services: {
    database_d1: { bound: boolean; healthy: boolean; error?: string };
    storage_r2: { bound: boolean };
    admin_auth: { configured: boolean };
    deploy_hook: { configured: boolean };
  };
  message: string;
}

interface AdminBlogItem {
  id: string;
  slug: string;
  title: string;
  category: string;
  author_name: string;
  publication_date: string;
  status: string;
}

interface AdminGalleryItem {
  id: string;
  title: string;
  category: string;
  location?: string;
  cover_image: string;
  status: string;
}

interface AdminLeadItem {
  id: string;
  inquiry_type: "school" | "corporate" | "camp" | "general";
  org_name: string;
  contact_name: string;
  designation?: string;
  phone: string;
  email: string;
  city: string;
  participant_count?: string;
  class_range?: string;
  selected_programs?: string;
  transport_required?: string;
  preferred_date?: string;
  requirements?: string;
  source_page?: string;
  processing_status: "new" | "contacted" | "scheduled" | "completed" | "archived";
  email_status?: string;
  whatsapp_status?: string;
  notes?: string;
  created_at: string;
  updated_at?: string;
}

export default function AdminPage() {
  const [adminKey, setAdminKey] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authError, setAuthError] = useState<string | null>(null);
  const [checkingAuth, setCheckingAuth] = useState(false);

  const [activeTab, setActiveTab] = useState<"leads" | "blogs" | "gallery" | "status">("leads");
  const [serviceStatus, setServiceStatus] = useState<ServiceStatus | null>(null);
  const [checkingStatus, setCheckingStatus] = useState(false);

  // Leads Management State
  const [leadsList, setLeadsList] = useState<AdminLeadItem[]>([]);
  const [loadingLeads, setLoadingLeads] = useState(false);
  const [leadsFilterStatus, setLeadsFilterStatus] = useState<string>("all");
  const [leadsFilterType, setLeadsFilterType] = useState<string>("all");
  const [leadsSearchTerm, setLeadsSearchTerm] = useState<string>("");
  const [selectedLead, setSelectedLead] = useState<AdminLeadItem | null>(null);
  const [leadEditStatus, setLeadEditStatus] = useState<string>("new");
  const [leadEditNotes, setLeadEditNotes] = useState<string>("");
  const [updatingLead, setUpdatingLead] = useState(false);
  const [updateLeadMessage, setUpdateLeadMessage] = useState<string | null>(null);


  // Blogs Management State
  const [blogsList, setBlogsList] = useState<AdminBlogItem[]>([]);
  const [loadingBlogs, setLoadingBlogs] = useState(false);
  const [showBlogModal, setShowBlogModal] = useState(false);
  const [blogFormData, setBlogFormData] = useState({
    title: "",
    subtitle: "",
    category: "Agriculture Education",
    author_name: "FURAA Educator",
    author_role: "Academic Council",
    publication_date: new Date().toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }),
    read_time: "5 min read",
    cover_image: "/images/hero/NAD06309.JPG",
    cover_image_caption: "",
    excerpt: "",
    content_heading: "1. Hands-on Agricultural Inquiry",
    content_paragraph: "Students engage in supervised organic farming practice...",
    status: "published",
  });
  const [blogSubmitError, setBlogSubmitError] = useState<string | null>(null);
  const [blogSubmitSuccess, setBlogSubmitSuccess] = useState<string | null>(null);
  const [submittingBlog, setSubmittingBlog] = useState(false);

  // Gallery Management State
  const [galleryEventsList, setGalleryEventsList] = useState<AdminGalleryItem[]>([]);
  const [loadingGallery, setLoadingGallery] = useState(false);
  const [showGalleryModal, setShowGalleryModal] = useState(false);
  const [galleryFormData, setGalleryFormData] = useState({
    title: "",
    category: "Farming Activities",
    location: "Neralu Farms, Bengaluru Region",
    description: "",
    cover_image: "/images/modules/NAD06650.JPG",
    status: "published",
  });
  const [gallerySubmitError, setGallerySubmitError] = useState<string | null>(null);
  const [gallerySubmitSuccess, setGallerySubmitSuccess] = useState<string | null>(null);
  const [submittingGallery, setSubmittingGallery] = useState(false);

  // Check service status on load
  const fetchServiceStatus = async () => {
    try {
      setCheckingStatus(true);
      const res = await fetch("/api/admin/status");
      if (res.ok) {
        const data = await res.json();
        setServiceStatus(data);
      }
    } catch {
      // Offline / build mode
    } finally {
      setCheckingStatus(false);
    }
  };

  useEffect(() => {
    let isMounted = true;
    async function initStatus() {
      try {
        const res = await fetch("/api/admin/status");
        if (res.ok && isMounted) {
          const data = await res.json();
          setServiceStatus(data);
        }
      } catch {}
    }
    initStatus();
    return () => {
      isMounted = false;
    };
  }, []);

  // Check auth
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setAuthError(null);
    setCheckingAuth(true);

    try {
      const res = await fetch("/api/admin/auth", {
        method: "POST",
        headers: {
          "X-Admin-Key": adminKey.trim(),
        },
      });

      const data = await res.json();
      if (res.ok && data.authenticated) {
        setIsAuthenticated(true);
        loadLeads();
        loadBlogs();
        loadGallery();
      } else {
        setAuthError(data.error || "Authentication failed. Check your admin key.");
      }
    } catch {
      setAuthError("Failed to reach administrative authorization endpoint.");
    } finally {
      setCheckingAuth(false);
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setAdminKey("");
  };

  // Load leads from API
  const loadLeads = async () => {
    setLoadingLeads(true);
    try {
      const res = await fetch("/api/leads", {
        headers: { "X-Admin-Key": adminKey.trim() },
      });
      if (res.ok) {
        const data = await res.json();
        setLeadsList(data.leads || []);
      }
    } catch {
    } finally {
      setLoadingLeads(false);
    }
  };

  const handleOpenLeadDetail = (lead: AdminLeadItem) => {
    setSelectedLead(lead);
    setLeadEditStatus(lead.processing_status);
    setLeadEditNotes(lead.notes || "");
    setUpdateLeadMessage(null);
  };

  const handleUpdateLead = async (id: string) => {
    setUpdatingLead(true);
    setUpdateLeadMessage(null);
    try {
      const res = await fetch(`/api/leads/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "X-Admin-Key": adminKey.trim(),
        },
        body: JSON.stringify({
          processing_status: leadEditStatus,
          notes: leadEditNotes,
        }),
      });
      const data = await res.json();
      if (res.ok && data.success) {
        setUpdateLeadMessage("Lead updated successfully!");
        setLeadsList((prev) =>
          prev.map((l) =>
            l.id === id
              ? {
                  ...l,
                  processing_status: leadEditStatus as AdminLeadItem["processing_status"],
                  notes: leadEditNotes,
                  updated_at: new Date().toISOString(),
                }
              : l
          )
        );
        if (selectedLead && selectedLead.id === id) {
          setSelectedLead((prev) =>
            prev
              ? {
                  ...prev,
                  processing_status: leadEditStatus as AdminLeadItem["processing_status"],
                  notes: leadEditNotes,
                }
              : null
          );
        }
      } else {
        setUpdateLeadMessage(data.error || "Failed to update lead.");
      }
    } catch {
      setUpdateLeadMessage("Network error updating lead.");
    } finally {
      setUpdatingLead(false);
    }
  };

  const handleDeleteLead = async (id: string) => {
    if (!confirm("Are you sure you want to permanently delete this lead?")) return;
    try {
      const res = await fetch(`/api/leads/${id}`, {
        method: "DELETE",
        headers: { "X-Admin-Key": adminKey.trim() },
      });
      if (res.ok) {
        setLeadsList((prev) => prev.filter((l) => l.id !== id));
        if (selectedLead?.id === id) setSelectedLead(null);
      } else {
        alert("Failed to delete lead from D1.");
      }
    } catch {
      alert("Network error.");
    }
  };

  const handleExportCSV = () => {
    if (leadsList.length === 0) {
      alert("No leads to export.");
      return;
    }
    const filtered = leadsList.filter((l) => {
      const matchesStatus = leadsFilterStatus === "all" || l.processing_status === leadsFilterStatus;
      const matchesType = leadsFilterType === "all" || l.inquiry_type === leadsFilterType;
      const matchesSearch =
        leadsSearchTerm === "" ||
        l.org_name?.toLowerCase().includes(leadsSearchTerm.toLowerCase()) ||
        l.contact_name?.toLowerCase().includes(leadsSearchTerm.toLowerCase()) ||
        l.phone?.includes(leadsSearchTerm) ||
        l.email?.toLowerCase().includes(leadsSearchTerm.toLowerCase());
      return matchesStatus && matchesType && matchesSearch;
    });

    const headers = [
      "ID",
      "Date",
      "Inquiry Type",
      "Organization",
      "Contact Person",
      "Designation",
      "Phone",
      "Email",
      "City",
      "Participants",
      "Class Range",
      "Transport",
      "Preferred Date",
      "Status",
      "Email Status",
      "WhatsApp Status",
      "Notes",
    ];

    const escapeCSV = (val: unknown) => `"${String(val ?? "").replace(/"/g, '""')}"`;

    const rows = filtered.map((l) => [
      escapeCSV(l.id),
      escapeCSV(l.created_at),
      escapeCSV(l.inquiry_type),
      escapeCSV(l.org_name),
      escapeCSV(l.contact_name),
      escapeCSV(l.designation),
      escapeCSV(l.phone),
      escapeCSV(l.email),
      escapeCSV(l.city),
      escapeCSV(l.participant_count),
      escapeCSV(l.class_range),
      escapeCSV(l.transport_required),
      escapeCSV(l.preferred_date),
      escapeCSV(l.processing_status),
      escapeCSV(l.email_status),
      escapeCSV(l.whatsapp_status),
      escapeCSV(l.notes),
    ]);

    const csvContent = [headers.join(","), ...rows.map((r) => r.join(","))].join("\n");
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", `furaa-leads-${new Date().toISOString().split("T")[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  // Load blogs from API
  const loadBlogs = async () => {
    setLoadingBlogs(true);
    try {
      const res = await fetch("/api/blogs?includeDrafts=true", {
        headers: { "X-Admin-Key": adminKey.trim() },
      });
      if (res.ok) {
        const data = await res.json();
        setBlogsList(data.blogs || []);
      }
    } catch {
    } finally {
      setLoadingBlogs(false);
    }
  };

  // Load gallery from API
  const loadGallery = async () => {
    setLoadingGallery(true);
    try {
      const res = await fetch("/api/gallery?includeDrafts=true", {
        headers: { "X-Admin-Key": adminKey.trim() },
      });
      if (res.ok) {
        const data = await res.json();
        setGalleryEventsList(data.events || []);
      }
    } catch {
    } finally {
      setLoadingGallery(false);
    }
  };

  // Handle Blog Creation
  const handleCreateBlog = async (e: React.FormEvent) => {
    e.preventDefault();
    setBlogSubmitError(null);
    setBlogSubmitSuccess(null);
    setSubmittingBlog(true);

    const payload = {
      title: blogFormData.title,
      subtitle: blogFormData.subtitle,
      category: blogFormData.category,
      author_name: blogFormData.author_name,
      author_role: blogFormData.author_role,
      publication_date: blogFormData.publication_date,
      read_time: blogFormData.read_time,
      cover_image: blogFormData.cover_image,
      cover_image_caption: blogFormData.cover_image_caption,
      excerpt: blogFormData.excerpt,
      content: [
        {
          heading: blogFormData.content_heading,
          paragraphs: [blogFormData.content_paragraph],
        },
      ],
      status: blogFormData.status,
    };

    try {
      const res = await fetch("/api/blogs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Admin-Key": adminKey.trim(),
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setBlogSubmitSuccess(data.message || "Blog post created successfully!");
        setShowBlogModal(false);
        loadBlogs();
      } else {
        setBlogSubmitError(data.error || "Failed to publish blog post to D1.");
      }
    } catch {
      setBlogSubmitError("Network error while connecting to Cloudflare D1.");
    } finally {
      setSubmittingBlog(false);
    }
  };

  // Handle Gallery Event Creation
  const handleCreateGallery = async (e: React.FormEvent) => {
    e.preventDefault();
    setGallerySubmitError(null);
    setGallerySubmitSuccess(null);
    setSubmittingGallery(true);

    try {
      const res = await fetch("/api/gallery", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Admin-Key": adminKey.trim(),
        },
        body: JSON.stringify(galleryFormData),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setGallerySubmitSuccess(data.message || "Gallery event created successfully!");
        setShowGalleryModal(false);
        loadGallery();
      } else {
        setGallerySubmitError(data.error || "Failed to create gallery event in D1.");
      }
    } catch {
      setGallerySubmitError("Network error while connecting to Cloudflare D1.");
    } finally {
      setSubmittingGallery(false);
    }
  };

  // Delete blog
  const handleDeleteBlog = async (slug: string) => {
    if (!confirm(`Are you sure you want to delete blog "${slug}"?`)) return;
    try {
      const res = await fetch(`/api/blogs/${slug}`, {
        method: "DELETE",
        headers: { "X-Admin-Key": adminKey.trim() },
      });
      if (res.ok) {
        loadBlogs();
      } else {
        alert("Failed to delete blog post from D1.");
      }
    } catch {
      alert("Network error.");
    }
  };

  // Delete gallery event
  const handleDeleteGallery = async (id: string) => {
    if (!confirm("Are you sure you want to delete this gallery event?")) return;
    try {
      const res = await fetch(`/api/gallery/${id}`, {
        method: "DELETE",
        headers: { "X-Admin-Key": adminKey.trim() },
      });
      if (res.ok) {
        loadGallery();
      } else {
        alert("Failed to delete gallery event from D1.");
      }
    } catch {
      alert("Network error.");
    }
  };

  return (
    <div className="bg-[var(--color-cream)] min-h-screen py-10 px-4 sm:px-6 lg:px-8">
      <div className="container-xl max-w-6xl mx-auto">
        {/* Header Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-emerald-900/10 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold mb-2">
              <Shield size={14} />
              <span>FURAA Secure Content Administration</span>
            </div>
            <h1 className="font-display text-2xl sm:text-3xl font-bold text-[var(--color-green-900)]">
              Content Management Dashboard
            </h1>
            <p className="text-xs sm:text-sm text-[var(--color-green-700)] mt-0.5">
              Authorized management console for educational blogs, seasonal galleries, and Cloudflare storage bindings.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="text-xs font-semibold px-3 py-1.5 rounded-lg border border-gray-200 bg-white text-gray-700 hover:bg-gray-50 transition-colors"
            >
              Back to Site
            </Link>
            {isAuthenticated && (
              <button
                type="button"
                onClick={handleLogout}
                className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg bg-red-50 text-red-700 hover:bg-red-100 transition-colors"
              >
                <LogOut size={13} />
                <span>Sign Out</span>
              </button>
            )}
          </div>
        </div>

        {/* Cloudflare Services Readiness Banner */}
        <div className="mb-8 p-5 rounded-2xl bg-white border border-emerald-900/10 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-start gap-3">
            <div
              className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 mt-0.5 ${
                serviceStatus?.status === "ready"
                  ? "bg-emerald-100 text-emerald-800"
                  : "bg-amber-100 text-amber-800"
              }`}
            >
              {serviceStatus?.status === "ready" ? <CheckCircle2 size={18} /> : <AlertTriangle size={18} />}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h4 className="font-display text-sm font-bold text-[var(--color-green-900)]">
                  Cloudflare Edge Infrastructure Status
                </h4>
                <span
                  className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                    serviceStatus?.status === "ready"
                      ? "bg-emerald-100 text-emerald-800"
                      : "bg-amber-100 text-amber-800"
                  }`}
                >
                  {serviceStatus?.status === "ready" ? "Operational" : "Setup Required"}
                </span>
              </div>
              <p className="text-xs text-[var(--color-green-700)] mt-1">
                {serviceStatus?.message ||
                  "Verifying Cloudflare D1 (furaa-db), R2 (furaa-media), and ADMIN_API_KEY environment variables..."}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              type="button"
              onClick={fetchServiceStatus}
              disabled={checkingStatus}
              className="text-xs font-semibold px-3 py-1.5 rounded-lg border border-gray-200 bg-white text-gray-700 hover:bg-gray-50 flex items-center gap-1.5"
            >
              <RefreshCw size={12} className={checkingStatus ? "animate-spin" : ""} />
              <span>Refresh Status</span>
            </button>
            <a
              href="/CLOUDFLARE_BACKEND_SETUP.md"
              target="_blank"
              rel="noreferrer"
              className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-emerald-50 text-emerald-800 hover:bg-emerald-100 flex items-center gap-1"
            >
              <span>Setup Guide</span>
              <ExternalLink size={12} />
            </a>
          </div>
        </div>

        {/* AUTHENTICATION PROMPT IF NOT LOGGED IN */}
        {!isAuthenticated ? (
          <div className="max-w-md mx-auto my-12 bg-white p-8 rounded-3xl border border-emerald-900/10 shadow-md">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-800 flex items-center justify-center mb-4 mx-auto">
              <Lock size={24} />
            </div>
            <h2 className="font-display text-xl font-bold text-center text-[var(--color-green-900)] mb-1">
              Staff Authorization Required
            </h2>
            <p className="text-xs text-center text-[var(--color-green-700)] mb-6">
              Enter the authorized FURAA Security Key or log in via Cloudflare Access to manage educational content.
            </p>

            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-[var(--color-green-900)] mb-1">
                  Administrative Security Key (ADMIN_API_KEY)
                </label>
                <div className="relative">
                  <Key size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    type="password"
                    required
                    placeholder="Enter configured secret key..."
                    value={adminKey}
                    onChange={(e) => setAdminKey(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 text-xs rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-gray-50/50"
                  />
                </div>
              </div>

              {authError && (
                <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-xs text-red-800">
                  {authError}
                </div>
              )}

              <button
                type="submit"
                disabled={checkingAuth}
                className="w-full py-2.5 rounded-xl bg-[var(--color-green-800)] hover:bg-[var(--color-green-900)] text-white text-xs font-bold transition-colors flex items-center justify-center gap-2 shadow-sm"
              >
                {checkingAuth ? "Authenticating..." : "Unlock Management Console"}
              </button>
            </form>

            <div className="mt-6 pt-4 border-t border-gray-100 text-center">
              <p className="text-[11px] text-gray-500 leading-relaxed">
                Public write access is disabled. Secrets are never exposed in client bundles.
              </p>
            </div>
          </div>
        ) : (
          /* AUTHENTICATED MANAGEMENT WORKSPACE */
          <div>
            {/* Tabs */}
            <div className="flex border-b border-gray-200 mb-6 overflow-x-auto">
              <button
                type="button"
                onClick={() => setActiveTab("leads")}
                className={`py-3 px-5 text-xs font-bold border-b-2 flex items-center gap-2 transition-colors whitespace-nowrap ${
                  activeTab === "leads"
                    ? "border-emerald-600 text-emerald-800"
                    : "border-transparent text-gray-500 hover:text-gray-800"
                }`}
              >
                <Inbox size={15} />
                <span>Leads & Inquiries</span>
                {leadsList.filter((l) => l.processing_status === "new").length > 0 && (
                  <span className="px-1.5 py-0.5 rounded-full text-[10px] bg-emerald-600 text-white font-bold">
                    {leadsList.filter((l) => l.processing_status === "new").length}
                  </span>
                )}
              </button>

              <button
                type="button"
                onClick={() => setActiveTab("blogs")}
                className={`py-3 px-5 text-xs font-bold border-b-2 flex items-center gap-2 transition-colors whitespace-nowrap ${
                  activeTab === "blogs"
                    ? "border-emerald-600 text-emerald-800"
                    : "border-transparent text-gray-500 hover:text-gray-800"
                }`}
              >
                <FileText size={15} />
                <span>Educational Blogs</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveTab("gallery")}
                className={`py-3 px-5 text-xs font-bold border-b-2 flex items-center gap-2 transition-colors whitespace-nowrap ${
                  activeTab === "gallery"
                    ? "border-emerald-600 text-emerald-800"
                    : "border-transparent text-gray-500 hover:text-gray-800"
                }`}
              >
                <ImageIcon size={15} />
                <span>Gallery Events</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveTab("status")}
                className={`py-3 px-5 text-xs font-bold border-b-2 flex items-center gap-2 transition-colors whitespace-nowrap ${
                  activeTab === "status"
                    ? "border-emerald-600 text-emerald-800"
                    : "border-transparent text-gray-500 hover:text-gray-800"
                }`}
              >
                <Database size={15} />
                <span>Cloudflare Bindings</span>
              </button>
            </div>

            {/* TAB 0: LEADS & INQUIRIES MANAGER */}
            {activeTab === "leads" && (
              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <h2 className="font-display text-xl font-bold text-[var(--color-green-900)]">
                      Book a Demo & Consultation Leads
                    </h2>
                    <p className="text-xs text-[var(--color-green-700)]">
                      Review school partnership requests, schedule consultations, manage follow-up notes, and export dossiers.
                    </p>
                  </div>

                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      onClick={loadLeads}
                      disabled={loadingLeads}
                      className="px-3 py-2 text-xs font-semibold rounded-xl border border-gray-200 bg-white hover:bg-gray-50 text-gray-700 flex items-center gap-1.5 shadow-sm"
                    >
                      <RefreshCw size={13} className={loadingLeads ? "animate-spin" : ""} />
                      <span>Refresh</span>
                    </button>
                    <button
                      type="button"
                      onClick={handleExportCSV}
                      disabled={leadsList.length === 0}
                      className="px-4 py-2 text-xs font-bold rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white flex items-center gap-1.5 shadow-sm transition-colors disabled:opacity-50"
                    >
                      <Download size={13} />
                      <span>Export CSV</span>
                    </button>
                  </div>
                </div>

                {/* Filters Bar */}
                <div className="p-4 rounded-2xl bg-white border border-gray-200 shadow-sm flex flex-col md:flex-row gap-3 md:items-center justify-between">
                  <div className="flex-1 relative">
                    <Search size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search by school, contact, phone, or email..."
                      value={leadsSearchTerm}
                      onChange={(e) => setLeadsSearchTerm(e.target.value)}
                      className="w-full pl-9 pr-4 py-2 text-xs rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-gray-50/50"
                    />
                  </div>

                  <div className="flex items-center gap-2 flex-wrap">
                    <select
                      value={leadsFilterStatus}
                      onChange={(e) => setLeadsFilterStatus(e.target.value)}
                      className="px-3 py-2 text-xs rounded-xl border border-gray-200 bg-white text-gray-700 font-medium"
                    >
                      <option value="all">All Statuses ({leadsList.length})</option>
                      <option value="new">New ({leadsList.filter((l) => l.processing_status === "new").length})</option>
                      <option value="contacted">Contacted ({leadsList.filter((l) => l.processing_status === "contacted").length})</option>
                      <option value="scheduled">Scheduled ({leadsList.filter((l) => l.processing_status === "scheduled").length})</option>
                      <option value="completed">Completed ({leadsList.filter((l) => l.processing_status === "completed").length})</option>
                      <option value="archived">Archived ({leadsList.filter((l) => l.processing_status === "archived").length})</option>
                    </select>

                    <select
                      value={leadsFilterType}
                      onChange={(e) => setLeadsFilterType(e.target.value)}
                      className="px-3 py-2 text-xs rounded-xl border border-gray-200 bg-white text-gray-700 font-medium"
                    >
                      <option value="all">All Inquiry Types</option>
                      <option value="school">School</option>
                      <option value="corporate">Corporate</option>
                      <option value="camp">Special Camp</option>
                      <option value="general">General</option>
                    </select>
                  </div>
                </div>

                {/* Leads Table */}
                <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="bg-gray-50/80 border-b border-gray-200 text-[11px] font-bold text-gray-600 uppercase tracking-wider">
                          <th className="py-3 px-4">Ref ID / Date</th>
                          <th className="py-3 px-4">Organization & City</th>
                          <th className="py-3 px-4">Contact Person</th>
                          <th className="py-3 px-4">Type</th>
                          <th className="py-3 px-4">Status</th>
                          <th className="py-3 px-4">Delivery</th>
                          <th className="py-3 px-4 text-right">Actions</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-100 text-xs">
                        {loadingLeads ? (
                          <tr>
                            <td colSpan={7} className="py-12 text-center text-gray-500">
                              <RefreshCw size={20} className="animate-spin mx-auto mb-2 text-emerald-600" />
                              <span>Loading leads from D1 database...</span>
                            </td>
                          </tr>
                        ) : leadsList.filter((l) => {
                            const matchesStatus = leadsFilterStatus === "all" || l.processing_status === leadsFilterStatus;
                            const matchesType = leadsFilterType === "all" || l.inquiry_type === leadsFilterType;
                            const matchesSearch =
                              leadsSearchTerm === "" ||
                              l.org_name?.toLowerCase().includes(leadsSearchTerm.toLowerCase()) ||
                              l.contact_name?.toLowerCase().includes(leadsSearchTerm.toLowerCase()) ||
                              l.phone?.includes(leadsSearchTerm) ||
                              l.email?.toLowerCase().includes(leadsSearchTerm.toLowerCase()) ||
                              l.id?.toLowerCase().includes(leadsSearchTerm.toLowerCase());
                            return matchesStatus && matchesType && matchesSearch;
                          }).length === 0 ? (
                          <tr>
                            <td colSpan={7} className="py-12 text-center text-gray-500">
                              <Inbox size={28} className="mx-auto mb-2 text-gray-300" />
                              <p className="font-semibold text-gray-700">No matching leads found</p>
                              <p className="text-[11px] text-gray-400 mt-1">
                                Inquiries submitted through the Book a Demo form will be recorded here in Cloudflare D1.
                              </p>
                            </td>
                          </tr>
                        ) : (
                          leadsList
                            .filter((l) => {
                              const matchesStatus = leadsFilterStatus === "all" || l.processing_status === leadsFilterStatus;
                              const matchesType = leadsFilterType === "all" || l.inquiry_type === leadsFilterType;
                              const matchesSearch =
                                leadsSearchTerm === "" ||
                                l.org_name?.toLowerCase().includes(leadsSearchTerm.toLowerCase()) ||
                                l.contact_name?.toLowerCase().includes(leadsSearchTerm.toLowerCase()) ||
                                l.phone?.includes(leadsSearchTerm) ||
                                l.email?.toLowerCase().includes(leadsSearchTerm.toLowerCase()) ||
                                l.id?.toLowerCase().includes(leadsSearchTerm.toLowerCase());
                              return matchesStatus && matchesType && matchesSearch;
                            })
                            .map((lead) => (
                              <tr key={lead.id} className="hover:bg-gray-50/50 transition-colors">
                                <td className="py-3 px-4 font-mono text-[11px] text-gray-600">
                                  <div className="font-bold text-emerald-950">
                                    #{lead.id.length > 8 ? `${lead.id.substring(0, 8)}...` : lead.id}
                                  </div>
                                  <div className="text-[10px] text-gray-400 mt-0.5">
                                    {lead.created_at ? new Date(lead.created_at).toLocaleDateString() : "Recent"}
                                  </div>
                                </td>
                                <td className="py-3 px-4">
                                  <div className="font-semibold text-gray-900">{lead.org_name}</div>
                                  <div className="text-[11px] text-gray-500 flex items-center gap-1 mt-0.5">
                                    <MapPin size={11} className="text-gray-400" />
                                    <span>{lead.city || "Not specified"}</span>
                                  </div>
                                </td>
                                <td className="py-3 px-4">
                                  <div className="font-medium text-gray-900">{lead.contact_name}</div>
                                  <div className="text-[11px] text-gray-500">
                                    {lead.phone} • {lead.email}
                                  </div>
                                </td>
                                <td className="py-3 px-4">
                                  <span className="capitalize px-2 py-0.5 rounded-full text-[10px] font-semibold bg-stone-100 text-stone-700">
                                    {lead.inquiry_type}
                                  </span>
                                </td>
                                <td className="py-3 px-4">
                                  <span
                                    className={`px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                                      lead.processing_status === "new"
                                        ? "bg-blue-100 text-blue-800"
                                        : lead.processing_status === "contacted"
                                        ? "bg-amber-100 text-amber-800"
                                        : lead.processing_status === "scheduled"
                                        ? "bg-purple-100 text-purple-800"
                                        : lead.processing_status === "completed"
                                        ? "bg-emerald-100 text-emerald-800"
                                        : "bg-gray-100 text-gray-700"
                                    }`}
                                  >
                                    {lead.processing_status}
                                  </span>
                                </td>
                                <td className="py-3 px-4 text-[10px] text-gray-500">
                                  <div>
                                    Email:{" "}
                                    <span
                                      className={
                                        lead.email_status === "sent"
                                          ? "text-emerald-700 font-bold"
                                          : "text-stone-500"
                                      }
                                    >
                                      {lead.email_status || "logged"}
                                    </span>
                                  </div>
                                  <div>
                                    WhatsApp:{" "}
                                    <span
                                      className={
                                        lead.whatsapp_status === "sent"
                                          ? "text-emerald-700 font-bold"
                                          : "text-stone-500"
                                      }
                                    >
                                      {lead.whatsapp_status || "user_click"}
                                    </span>
                                  </div>
                                </td>
                                <td className="py-3 px-4 text-right">
                                  <div className="inline-flex items-center gap-1.5">
                                    <button
                                      type="button"
                                      onClick={() => handleOpenLeadDetail(lead)}
                                      className="p-1.5 rounded-lg border border-gray-200 hover:bg-gray-100 text-gray-700 transition-colors"
                                      title="View & Edit Lead"
                                    >
                                      <Eye size={13} />
                                    </button>
                                    <button
                                      type="button"
                                      onClick={() => handleDeleteLead(lead.id)}
                                      className="p-1.5 rounded-lg hover:bg-red-50 text-red-600 transition-colors"
                                      title="Delete Lead"
                                    >
                                      <Trash2 size={13} />
                                    </button>
                                  </div>
                                </td>
                              </tr>
                            ))
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 1: BLOGS MANAGER */}
            {activeTab === "blogs" && (
              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <h2 className="font-display text-xl font-bold text-[var(--color-green-900)]">
                      Blog Articles Management
                    </h2>
                    <p className="text-xs text-[var(--color-green-700)]">
                      Create, edit, preview, and publish pedagogical articles directly into Cloudflare D1.
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setShowBlogModal(true)}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-emerald-700 text-white text-xs font-bold hover:bg-emerald-800 transition-colors w-fit"
                  >
                    <Plus size={15} />
                    <span>Create New Article</span>
                  </button>
                </div>

                {blogSubmitSuccess && (
                  <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-900 flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-emerald-700" />
                    <span>{blogSubmitSuccess}</span>
                  </div>
                )}

                {/* Blogs Table */}
                <div className="card-base bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
                  {loadingBlogs ? (
                    <div className="p-12 text-center text-xs text-gray-500">
                      Loading articles from Cloudflare D1...
                    </div>
                  ) : blogsList.length === 0 ? (
                    <div className="p-12 text-center">
                      <FileText size={32} className="mx-auto text-gray-300 mb-2" />
                      <p className="text-xs font-bold text-gray-700">No dynamic articles in D1 database yet.</p>
                      <p className="text-[11px] text-gray-500 mt-1 max-w-sm mx-auto">
                        Your built-in seed articles are active on the site. Click &quot;Create New Article&quot; to add dynamic posts into Cloudflare D1.
                      </p>
                    </div>
                  ) : (
                    <div className="overflow-x-auto">
                      <table className="w-full text-left text-xs">
                        <thead className="bg-gray-50 border-b border-gray-200 text-gray-600 uppercase text-[10px] font-bold">
                          <tr>
                            <th className="py-3 px-4">Title & Slug</th>
                            <th className="py-3 px-4">Category</th>
                            <th className="py-3 px-4">Author</th>
                            <th className="py-3 px-4">Date</th>
                            <th className="py-3 px-4">Status</th>
                            <th className="py-3 px-4 text-right">Actions</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                          {blogsList.map((blog) => (
                            <tr key={blog.id} className="hover:bg-gray-50/50">
                              <td className="py-3 px-4 font-semibold text-[var(--color-green-950)]">
                                <div>{blog.title}</div>
                                <div className="text-[10px] text-gray-400 font-mono">/blogs/{blog.slug}</div>
                              </td>
                              <td className="py-3 px-4 text-gray-600">{blog.category}</td>
                              <td className="py-3 px-4 text-gray-600">{blog.author_name}</td>
                              <td className="py-3 px-4 text-gray-500">{blog.publication_date}</td>
                              <td className="py-3 px-4">
                                <span
                                  className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                                    blog.status === "published"
                                      ? "bg-emerald-100 text-emerald-800"
                                      : "bg-gray-100 text-gray-600"
                                  }`}
                                >
                                  {blog.status}
                                </span>
                              </td>
                              <td className="py-3 px-4 text-right space-x-2">
                                <Link
                                  href={`/blogs/${blog.slug}`}
                                  target="_blank"
                                  className="text-emerald-700 hover:text-emerald-900 inline-block"
                                  title="View Live"
                                >
                                  <ExternalLink size={14} />
                                </Link>
                                <button
                                  type="button"
                                  onClick={() => handleDeleteBlog(blog.slug)}
                                  className="text-red-600 hover:text-red-800 inline-block"
                                  title="Delete"
                                >
                                  <Trash2 size={14} />
                                </button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* TAB 2: GALLERY MANAGER */}
            {activeTab === "gallery" && (
              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <h2 className="font-display text-xl font-bold text-[var(--color-green-900)]">
                      Gallery Events and Photos Management
                    </h2>
                    <p className="text-xs text-[var(--color-green-700)]">
                      Create event albums, categorize photographic assets, and manage public photo visibility.
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setShowGalleryModal(true)}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-emerald-700 text-white text-xs font-bold hover:bg-emerald-800 transition-colors w-fit"
                  >
                    <Plus size={15} />
                    <span>Create Gallery Event</span>
                  </button>
                </div>

                {gallerySubmitSuccess && (
                  <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-900 flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-emerald-700" />
                    <span>{gallerySubmitSuccess}</span>
                  </div>
                )}

                <div className="card-base bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
                  {loadingGallery ? (
                    <div className="p-12 text-center text-xs text-gray-500">
                      Loading gallery events from Cloudflare D1...
                    </div>
                  ) : galleryEventsList.length === 0 ? (
                    <div className="p-12 text-center">
                      <ImageIcon size={32} className="mx-auto text-gray-300 mb-2" />
                      <p className="text-xs font-bold text-gray-700">No dynamic gallery events in D1 database yet.</p>
                      <p className="text-[11px] text-gray-500 mt-1 max-w-sm mx-auto">
                        Your built-in verified photo sets are active in the Public Gallery. Click &quot;Create Gallery Event&quot; to add new dynamic albums.
                      </p>
                    </div>
                  ) : (
                    <div className="divide-y divide-gray-100">
                      {galleryEventsList.map((event) => (
                        <div key={event.id} className="p-4 flex items-center justify-between gap-4 hover:bg-gray-50">
                          <div className="flex items-center gap-3">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                              src={event.cover_image}
                              alt={event.title}
                              className="w-14 h-10 object-cover rounded-lg border border-gray-200"
                            />
                            <div>
                              <h4 className="font-bold text-xs text-[var(--color-green-950)]">{event.title}</h4>
                              <p className="text-[10px] text-gray-500">{event.category} · {event.location || "Neralu Farms"}</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-3">
                            <span
                              className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                                event.status === "published"
                                  ? "bg-emerald-100 text-emerald-800"
                                  : "bg-gray-100 text-gray-600"
                              }`}
                            >
                              {event.status}
                            </span>
                            <button
                              type="button"
                              onClick={() => handleDeleteGallery(event.id)}
                              className="text-red-600 hover:text-red-800"
                              title="Delete Event"
                            >
                              <Trash2 size={14} />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* TAB 3: CLOUDFLARE BINDINGS & STATUS */}
            {activeTab === "status" && (
              <div className="space-y-6">
                <div className="p-6 rounded-3xl bg-white border border-gray-200 shadow-sm space-y-4">
                  <h3 className="font-display text-lg font-bold text-[var(--color-green-900)]">
                    Cloudflare Pages Architecture Checklist
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    FURAA uses a hybrid static-first architecture. Static pages are pre-rendered at build time, while administrative mutations write to Cloudflare D1 and R2 through Pages Functions without breaking Next.js static export.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                    <div className="p-4 rounded-2xl bg-gray-50 border border-gray-200">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-bold text-xs text-gray-800 flex items-center gap-1.5">
                          <Database size={14} className="text-emerald-700" /> D1 Database Binding
                        </span>
                        <span
                          className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                            serviceStatus?.services?.database_d1?.bound
                              ? "bg-emerald-100 text-emerald-800"
                              : "bg-amber-100 text-amber-800"
                          }`}
                        >
                          {serviceStatus?.services?.database_d1?.bound ? "Bound (DB)" : "Missing Binding"}
                        </span>
                      </div>
                      <p className="text-[11px] text-gray-600">
                        Binding variable: <code>DB</code>. Database: <code>furaa-db</code>. Executes schema defined in <code>schema.sql</code>.
                      </p>
                    </div>

                    <div className="p-4 rounded-2xl bg-gray-50 border border-gray-200">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-bold text-xs text-gray-800 flex items-center gap-1.5">
                          <HardDrive size={14} className="text-emerald-700" /> R2 Media Storage
                        </span>
                        <span
                          className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                            serviceStatus?.services?.storage_r2?.bound
                              ? "bg-emerald-100 text-emerald-800"
                              : "bg-amber-100 text-amber-800"
                          }`}
                        >
                          {serviceStatus?.services?.storage_r2?.bound ? "Bound (BUCKET)" : "Missing Binding"}
                        </span>
                      </div>
                      <p className="text-[11px] text-gray-600">
                        Binding variable: <code>BUCKET</code>. Bucket: <code>furaa-media</code>. Stores uploaded cover photos and event pictures.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* MODAL: CREATE BLOG POST */}
        {showBlogModal && (
          <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
            <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl my-8">
              <div className="flex items-center justify-between pb-4 border-b border-gray-100 mb-6">
                <h3 className="font-display text-xl font-bold text-[var(--color-green-900)]">
                  Create Educational Blog Post
                </h3>
                <button
                  type="button"
                  onClick={() => setShowBlogModal(false)}
                  className="text-gray-400 hover:text-gray-600 text-sm font-bold"
                >
                  ✕
                </button>
              </div>

              {blogSubmitError && (
                <div className="p-3 mb-4 rounded-xl bg-red-50 border border-red-200 text-xs text-red-800">
                  {blogSubmitError}
                </div>
              )}

              <form onSubmit={handleCreateBlog} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">Article Title *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Regenerative Soil Ecology in Primary Classrooms"
                    value={blogFormData.title}
                    onChange={(e) => setBlogFormData({ ...blogFormData, title: e.target.value })}
                    className="w-full px-3 py-2 text-xs rounded-xl border border-gray-200 focus:ring-2 focus:ring-emerald-500"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">Category *</label>
                    <select
                      value={blogFormData.category}
                      onChange={(e) => setBlogFormData({ ...blogFormData, category: e.target.value })}
                      className="w-full px-3 py-2 text-xs rounded-xl border border-gray-200 focus:ring-2 focus:ring-emerald-500 bg-white"
                    >
                      {blogCategoryList.map((cat) => (
                        <option key={cat} value={cat}>
                          {cat}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">Publication Status</label>
                    <select
                      value={blogFormData.status}
                      onChange={(e) => setBlogFormData({ ...blogFormData, status: e.target.value })}
                      className="w-full px-3 py-2 text-xs rounded-xl border border-gray-200 focus:ring-2 focus:ring-emerald-500 bg-white"
                    >
                      <option value="published">Published (Live)</option>
                      <option value="draft">Draft (Private)</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">Author Name *</label>
                    <input
                      type="text"
                      required
                      value={blogFormData.author_name}
                      onChange={(e) => setBlogFormData({ ...blogFormData, author_name: e.target.value })}
                      className="w-full px-3 py-2 text-xs rounded-xl border border-gray-200"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">Cover Image URL *</label>
                    <input
                      type="text"
                      required
                      value={blogFormData.cover_image}
                      onChange={(e) => setBlogFormData({ ...blogFormData, cover_image: e.target.value })}
                      className="w-full px-3 py-2 text-xs rounded-xl border border-gray-200"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">Short Excerpt *</label>
                  <textarea
                    required
                    rows={2}
                    placeholder="Brief 1-2 sentence preview..."
                    value={blogFormData.excerpt}
                    onChange={(e) => setBlogFormData({ ...blogFormData, excerpt: e.target.value })}
                    className="w-full px-3 py-2 text-xs rounded-xl border border-gray-200"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">Section 1 Heading</label>
                  <input
                    type="text"
                    value={blogFormData.content_heading}
                    onChange={(e) => setBlogFormData({ ...blogFormData, content_heading: e.target.value })}
                    className="w-full px-3 py-2 text-xs rounded-xl border border-gray-200 mb-2"
                  />
                  <label className="block text-xs font-bold text-gray-700 mb-1">Section 1 Paragraph</label>
                  <textarea
                    rows={4}
                    value={blogFormData.content_paragraph}
                    onChange={(e) => setBlogFormData({ ...blogFormData, content_paragraph: e.target.value })}
                    className="w-full px-3 py-2 text-xs rounded-xl border border-gray-200"
                  />
                </div>

                <div className="flex items-center justify-end gap-3 pt-4 border-t border-gray-100">
                  <button
                    type="button"
                    onClick={() => setShowBlogModal(false)}
                    className="px-4 py-2 text-xs font-semibold rounded-xl border border-gray-200 text-gray-700 hover:bg-gray-50"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={submittingBlog}
                    className="px-5 py-2 text-xs font-bold rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white transition-colors"
                  >
                    {submittingBlog ? "Saving to D1..." : "Save and Publish"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* MODAL: CREATE GALLERY EVENT */}
        {showGalleryModal && (
          <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
            <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl my-8">
              <div className="flex items-center justify-between pb-4 border-b border-gray-100 mb-6">
                <h3 className="font-display text-xl font-bold text-[var(--color-green-900)]">
                  Create Gallery Event
                </h3>
                <button
                  type="button"
                  onClick={() => setShowGalleryModal(false)}
                  className="text-gray-400 hover:text-gray-600 text-sm font-bold"
                >
                  ✕
                </button>
              </div>

              {gallerySubmitError && (
                <div className="p-3 mb-4 rounded-xl bg-red-50 border border-red-200 text-xs text-red-800">
                  {gallerySubmitError}
                </div>
              )}

              <form onSubmit={handleCreateGallery} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">Event Title *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Traditional Sugarcane Jaggery Workshop"
                    value={galleryFormData.title}
                    onChange={(e) => setGalleryFormData({ ...galleryFormData, title: e.target.value })}
                    className="w-full px-3 py-2 text-xs rounded-xl border border-gray-200"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">Category *</label>
                    <select
                      value={galleryFormData.category}
                      onChange={(e) => setGalleryFormData({ ...galleryFormData, category: e.target.value })}
                      className="w-full px-3 py-2 text-xs rounded-xl border border-gray-200 bg-white"
                    >
                      {galleryCategoryList.map((cat) => (
                        <option key={cat} value={cat}>
                          {cat}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">Location</label>
                    <input
                      type="text"
                      value={galleryFormData.location}
                      onChange={(e) => setGalleryFormData({ ...galleryFormData, location: e.target.value })}
                      className="w-full px-3 py-2 text-xs rounded-xl border border-gray-200"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">Cover Image Path/URL *</label>
                  <input
                    type="text"
                    required
                    value={galleryFormData.cover_image}
                    onChange={(e) => setGalleryFormData({ ...galleryFormData, cover_image: e.target.value })}
                    className="w-full px-3 py-2 text-xs rounded-xl border border-gray-200"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">Description *</label>
                  <textarea
                    required
                    rows={3}
                    placeholder="Describe the educational activity..."
                    value={galleryFormData.description}
                    onChange={(e) => setGalleryFormData({ ...galleryFormData, description: e.target.value })}
                    className="w-full px-3 py-2 text-xs rounded-xl border border-gray-200"
                  />
                </div>

                <div className="flex items-center justify-end gap-3 pt-4 border-t border-gray-100">
                  <button
                    type="button"
                    onClick={() => setShowGalleryModal(false)}
                    className="px-4 py-2 text-xs font-semibold rounded-xl border border-gray-200 text-gray-700 hover:bg-gray-50"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={submittingGallery}
                    className="px-5 py-2 text-xs font-bold rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white transition-colors"
                  >
                    {submittingGallery ? "Saving to D1..." : "Save Event"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* MODAL: VIEW & MANAGE LEAD */}
        {selectedLead && (
          <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
            <div className="bg-white rounded-3xl max-w-3xl w-full p-6 sm:p-8 shadow-2xl my-8 max-h-[90vh] overflow-y-auto">
              <div className="flex items-start justify-between pb-4 border-b border-gray-100 mb-6">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-mono text-xs font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                      #{selectedLead.id}
                    </span>
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-stone-500 bg-stone-100 px-2 py-0.5 rounded-full">
                      {selectedLead.inquiry_type}
                    </span>
                  </div>
                  <h3 className="font-display text-xl font-bold text-[var(--color-green-900)]">
                    {selectedLead.org_name}
                  </h3>
                  <p className="text-xs text-[var(--color-green-700)]">
                    Submitted on {selectedLead.created_at ? new Date(selectedLead.created_at).toLocaleString() : "Recent"}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedLead(null)}
                  className="text-gray-400 hover:text-gray-600 p-1 rounded-lg"
                >
                  <X size={20} />
                </button>
              </div>

              {updateLeadMessage && (
                <div className="p-3 mb-4 rounded-xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-800">
                  {updateLeadMessage}
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Contact & Organization Column */}
                <div className="space-y-4">
                  <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
                    <h4 className="font-bold text-xs uppercase tracking-wider text-stone-500 mb-3">
                      Contact Information
                    </h4>
                    <div className="space-y-2 text-xs">
                      <div>
                        <span className="text-stone-400">Contact Person: </span>
                        <span className="font-semibold text-stone-900">{selectedLead.contact_name}</span>
                        {selectedLead.designation && (
                          <span className="text-stone-500"> ({selectedLead.designation})</span>
                        )}
                      </div>
                      <div>
                        <span className="text-stone-400">City / Location: </span>
                        <span className="font-semibold text-stone-900">{selectedLead.city || "Not provided"}</span>
                      </div>
                      <div className="flex items-center gap-3 pt-2">
                        <a
                          href={`tel:${selectedLead.phone.replace(/\s+/g, '')}`}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-100 text-emerald-900 font-semibold text-xs hover:bg-emerald-200"
                        >
                          <PhoneCall size={12} />
                          <span>{selectedLead.phone}</span>
                        </a>
                        <a
                          href={`mailto:${selectedLead.email}`}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-stone-200 text-stone-900 font-semibold text-xs hover:bg-stone-300"
                        >
                          <Send size={12} />
                          <span>Email</span>
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
                    <h4 className="font-bold text-xs uppercase tracking-wider text-stone-500 mb-3">
                      Program Parameters
                    </h4>
                    <div className="space-y-1.5 text-xs">
                      <div>
                        <span className="text-stone-400">Estimated Students: </span>
                        <span className="font-semibold text-stone-900">{selectedLead.participant_count || "Not specified"}</span>
                      </div>
                      <div>
                        <span className="text-stone-400">Class Range: </span>
                        <span className="font-semibold text-stone-900">{selectedLead.class_range || "Not specified"}</span>
                      </div>
                      <div>
                        <span className="text-stone-400">Transport: </span>
                        <span className="font-semibold text-stone-900 capitalize">{selectedLead.transport_required || "Undecided"}</span>
                      </div>
                      <div>
                        <span className="text-stone-400">Preferred Date: </span>
                        <span className="font-semibold text-stone-900">{selectedLead.preferred_date || "Flexible"}</span>
                      </div>
                    </div>
                  </div>

                  {/* Delivery Status */}
                  <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
                    <h4 className="font-bold text-xs uppercase tracking-wider text-stone-500 mb-2">
                      Edge Notification Logs
                    </h4>
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div className="p-2.5 rounded-xl bg-white border border-stone-200">
                        <div className="text-[10px] text-stone-400 uppercase">Resend Email</div>
                        <div className="font-bold capitalize text-stone-800">{selectedLead.email_status || "Logged"}</div>
                      </div>
                      <div className="p-2.5 rounded-xl bg-white border border-stone-200">
                        <div className="text-[10px] text-stone-400 uppercase">WhatsApp</div>
                        <div className="font-bold capitalize text-stone-800">{selectedLead.whatsapp_status || "User Click"}</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Requirements & Follow-up Controls */}
                <div className="space-y-4">
                  {/* Selected Programs */}
                  <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
                    <h4 className="font-bold text-xs uppercase tracking-wider text-stone-500 mb-2">
                      Selected Programs
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {(() => {
                        try {
                          const progs = JSON.parse(selectedLead.selected_programs || "[]");
                          if (Array.isArray(progs) && progs.length > 0) {
                            return progs.map((p: string, i: number) => (
                              <span key={i} className="px-2.5 py-1 rounded-lg text-[11px] font-medium bg-emerald-100 text-emerald-900 border border-emerald-200">
                                {p}
                              </span>
                            ));
                          }
                        } catch {}
                        return (
                          <span className="text-xs text-stone-500 italic">
                            {selectedLead.selected_programs || "No specific programs checked"}
                          </span>
                        );
                      })()}
                    </div>
                  </div>

                  {/* Requirements Note */}
                  <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
                    <h4 className="font-bold text-xs uppercase tracking-wider text-stone-500 mb-2">
                      Special Requirements / Message
                    </h4>
                    <p className="text-xs text-stone-700 leading-relaxed bg-white p-3 rounded-xl border border-stone-200/60 min-h-[60px]">
                      {selectedLead.requirements || "No specific message provided."}
                    </p>
                  </div>

                  {/* Admin Follow-Up Controls */}
                  <div className="p-4 rounded-2xl bg-emerald-50/60 border border-emerald-200/80">
                    <h4 className="font-bold text-xs uppercase tracking-wider text-emerald-900 mb-3">
                      Follow-up Status & Internal Notes
                    </h4>
                    <div className="space-y-3">
                      <div>
                        <label className="block text-xs font-bold text-emerald-950 mb-1">
                          Processing Status
                        </label>
                        <select
                          value={leadEditStatus}
                          onChange={(e) => setLeadEditStatus(e.target.value)}
                          className="w-full px-3 py-2 text-xs rounded-xl border border-emerald-300 bg-white focus:ring-2 focus:ring-emerald-500 font-semibold"
                        >
                          <option value="new">New Inquiry</option>
                          <option value="contacted">Contacted / In Discussion</option>
                          <option value="scheduled">Demo Scheduled</option>
                          <option value="completed">Completed / Enrolled</option>
                          <option value="archived">Archived</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-emerald-950 mb-1">
                          Internal Notes (Private to FURAA Staff)
                        </label>
                        <textarea
                          rows={3}
                          placeholder="e.g. Spoke with Principal Sharma. Scheduled presentation for next Tuesday at 11am..."
                          value={leadEditNotes}
                          onChange={(e) => setLeadEditNotes(e.target.value)}
                          className="w-full px-3 py-2 text-xs rounded-xl border border-emerald-300 bg-white focus:ring-2 focus:ring-emerald-500"
                        />
                      </div>

                      <div className="flex items-center justify-between pt-2">
                        <button
                          type="button"
                          onClick={() => handleDeleteLead(selectedLead.id)}
                          className="text-xs font-semibold text-red-600 hover:text-red-700"
                        >
                          Delete Lead
                        </button>
                        <button
                          type="button"
                          disabled={updatingLead}
                          onClick={() => handleUpdateLead(selectedLead.id)}
                          className="px-4 py-2 text-xs font-bold rounded-xl bg-emerald-800 hover:bg-emerald-900 text-white shadow-sm transition-colors"
                        >
                          {updatingLead ? "Saving..." : "Save Updates"}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
