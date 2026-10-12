"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle } from "lucide-react";
import { brand } from "@/config/brand";
import Button from "@/components/ui/Button";

// The contact page is a client component because of the complex form state

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    // Basic frontend validation
    if (!data.schoolName || !data.email || !data.phone) {
      setError("Please fill in all required fields.");
      setIsSubmitting(false);
      return;
    }

    // Simulate network request
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    // Switch to success state
    setIsSubmitting(false);
    setIsSuccess(true);
  };

  return (
    <>
      <section
        className="relative pt-32 pb-20 gradient-hero overflow-hidden"
        aria-label="Contact Header"
      >
        <div className="container-xl relative z-10 text-center max-w-3xl mx-auto">
          <h1 className="text-display text-white mb-6 leading-tight">Book a School Demo</h1>
          <p className="text-lg leading-relaxed" style={{ color: "var(--color-green-200)" }}>
            Let&apos;s discuss how {brand.name} can integrate into your academic calendar. Fill out the form below and our team will contact you to schedule a consultation.
          </p>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-xl max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
            
            {/* Left Column: Contact Info */}
            <div className="lg:w-1/3 flex flex-col gap-8">
              <div>
                <h2 className="text-h2 mb-4" style={{ color: "var(--color-green-900)" }}>Get in Touch</h2>
                <p className="text-sm leading-relaxed" style={{ color: "var(--color-green-700)" }}>
                  Prefer to reach out directly? Our admissions and partnership team is available during regular school hours.
                </p>
              </div>

              <div className="flex flex-col gap-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ background: "var(--color-green-50)" }}>
                    <Mail size={18} style={{ color: "var(--color-green-700)" }} />
                  </div>
                  <div>
                    <p className="font-semibold text-sm mb-1" style={{ color: "var(--color-green-900)" }}>Email Us</p>
                    <a href={`mailto:${brand.contact.email}`} className="text-sm hover:underline" style={{ color: "var(--color-green-700)" }}>
                      {brand.contact.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ background: "var(--color-green-50)" }}>
                    <Phone size={18} style={{ color: "var(--color-green-700)" }} />
                  </div>
                  <div>
                    <p className="font-semibold text-sm mb-1" style={{ color: "var(--color-green-900)" }}>Call Us</p>
                    <a href={`tel:${brand.contact.phone}`} className="text-sm hover:underline" style={{ color: "var(--color-green-700)" }}>
                      {brand.contact.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ background: "var(--color-green-50)" }}>
                    <MapPin size={18} style={{ color: "var(--color-green-700)" }} />
                  </div>
                  <div>
                    <p className="font-semibold text-sm mb-1" style={{ color: "var(--color-green-900)" }}>Farm Center</p>
                    <p className="text-sm leading-relaxed" style={{ color: "var(--color-green-700)" }}>
                      {brand.contact.address}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: The Form */}
            <div className="lg:w-2/3">
              <div className="card-base p-8 md:p-10 bg-white shadow-sm border" style={{ borderColor: "var(--color-green-100)" }}>
                
                {isSuccess ? (
                  <div className="flex flex-col items-center justify-center text-center py-10">
                    <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6" style={{ background: "var(--color-green-100)" }}>
                      <CheckCircle2 size={32} style={{ color: "var(--color-green-700)" }} />
                    </div>
                    <h3 className="text-h2 mb-4" style={{ color: "var(--color-green-900)" }}>Request Received!</h3>
                    <p className="text-base max-w-md mx-auto" style={{ color: "var(--color-green-700)" }}>
                      Thank you for your interest in {brand.shortName}. Our partnership team will contact you shortly to schedule your demo.
                    </p>
                    <div className="mt-8 p-4 rounded-lg bg-gray-50 text-xs text-gray-500 border border-gray-100">
                      Note: This is a frontend demonstration. No backend email was actually sent.
                    </div>
                    <Button 
                      variant="outline" 
                      className="mt-6"
                      onClick={() => setIsSuccess(false)}
                    >
                      Submit Another Request
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                    {error && (
                      <div className="p-4 rounded-lg flex items-center gap-3" style={{ background: "#FEF2F2", color: "#991B1B", border: "1px solid #FCA5A5" }}>
                        <AlertCircle size={18} />
                        <span className="text-sm font-medium">{error}</span>
                      </div>
                    )}

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="flex flex-col gap-2">
                        <label htmlFor="schoolName" className="text-sm font-semibold" style={{ color: "var(--color-green-900)" }}>School Name *</label>
                        <input required type="text" id="schoolName" name="schoolName" className="input-field" placeholder="E.g., Sunrise International" />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label htmlFor="city" className="text-sm font-semibold" style={{ color: "var(--color-green-900)" }}>City *</label>
                        <input required type="text" id="city" name="city" className="input-field" placeholder="E.g., Pune" />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="flex flex-col gap-2">
                        <label htmlFor="contactPerson" className="text-sm font-semibold" style={{ color: "var(--color-green-900)" }}>Contact Person *</label>
                        <input required type="text" id="contactPerson" name="contactPerson" className="input-field" placeholder="Full Name" />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label htmlFor="designation" className="text-sm font-semibold" style={{ color: "var(--color-green-900)" }}>Designation</label>
                        <input type="text" id="designation" name="designation" className="input-field" placeholder="E.g., Principal, Coordinator" />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="flex flex-col gap-2">
                        <label htmlFor="email" className="text-sm font-semibold" style={{ color: "var(--color-green-900)" }}>Email Address *</label>
                        <input required type="email" id="email" name="email" className="input-field" placeholder="name@school.edu" />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label htmlFor="phone" className="text-sm font-semibold" style={{ color: "var(--color-green-900)" }}>Phone Number *</label>
                        <input required type="tel" id="phone" name="phone" className="input-field" placeholder="+91" />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="flex flex-col gap-2">
                        <label htmlFor="studentCount" className="text-sm font-semibold" style={{ color: "var(--color-green-900)" }}>Est. Students</label>
                        <select id="studentCount" name="studentCount" className="input-field">
                          <option value="">Select range</option>
                          <option value="50-100">50 - 100</option>
                          <option value="100-300">100 - 300</option>
                          <option value="300-500">300 - 500</option>
                          <option value="500+">500+</option>
                        </select>
                      </div>
                      <div className="flex flex-col gap-2">
                        <label htmlFor="classRange" className="text-sm font-semibold" style={{ color: "var(--color-green-900)" }}>Class Range</label>
                        <select id="classRange" name="classRange" className="input-field">
                          <option value="">Select range</option>
                          <option value="1-4">Foundation Module (Classes 1–4)</option>
                          <option value="5-8">Exploration Module (Classes 5–8)</option>
                          <option value="9-10">Specialization Module (Classes 9–10)</option>
                          <option value="all">All Modules (Classes 1–10)</option>
                        </select>
                      </div>
                      <div className="flex flex-col gap-2">
                        <label htmlFor="transport" className="text-sm font-semibold" style={{ color: "var(--color-green-900)" }}>Transport Needed?</label>
                        <select id="transport" name="transport" className="input-field">
                          <option value="">Select</option>
                          <option value="yes">Yes, {brand.shortName} transport</option>
                          <option value="no">No, School transport</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="flex flex-col gap-2">
                        <label htmlFor="preferredDate" className="text-sm font-semibold" style={{ color: "var(--color-green-900)" }}>Preferred Demo Date</label>
                        <input type="date" id="preferredDate" name="preferredDate" className="input-field" />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label htmlFor="module" className="text-sm font-semibold" style={{ color: "var(--color-green-900)" }}>Interested Module</label>
                        <select id="module" name="module" className="input-field">
                          <option value="">Select a module</option>
                          <option value="annual">Annual Module (Year-round)</option>
                          <option value="term">Term Module (3-4 months)</option>
                          <option value="workshop">Short Workshop</option>
                          <option value="summer">Summer Camp</option>
                        </select>
                      </div>
                    </div>

                    <div className="flex flex-col gap-2">
                      <label htmlFor="message" className="text-sm font-semibold" style={{ color: "var(--color-green-900)" }}>Message / Specific Requirements</label>
                      <textarea id="message" name="message" rows={4} className="input-field resize-none" placeholder="Tell us about your specific curriculum goals or any other details..."></textarea>
                    </div>

                    <div className="p-4 rounded-lg bg-blue-50 text-xs text-blue-700 border border-blue-100 flex items-start gap-3">
                      <AlertCircle size={14} className="shrink-0 mt-0.5" />
                      <p>
                        <strong>Note:</strong> This is a demonstration form. In the production version, this will be connected to our backend to notify our partnership team.
                      </p>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center justify-between pt-4 mt-2 border-t gap-4" style={{ borderColor: "var(--color-green-100)" }}>
                      <p className="text-xs text-gray-500 max-w-xs text-center sm:text-left">
                        By submitting this form, you request a consultation. No financial commitment is required at this stage.
                      </p>
                      <button 
                        type="submit" 
                        disabled={isSubmitting}
                        className="btn btn-primary btn-lg w-full sm:w-auto flex items-center justify-center gap-2"
                      >
                        {isSubmitting ? "Processing..." : "Submit Request"}
                        {!isSubmitting && <Send size={18} />}
                      </button>
                    </div>
                  </form>
                )}

              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
