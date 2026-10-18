"use client";

import { Mail, Phone, MapPin, Clock, MessageSquare } from "lucide-react";
import { brand } from "@/config/brand";
import { contactConfig } from "@/config/leads";
import BookADemoForm from "@/components/sections/BookADemoForm";

export default function ContactPage() {
  return (
    <>
      <section
        className="relative pt-32 pb-20 gradient-hero overflow-hidden"
        aria-label="Contact Header"
      >
        <div className="container-xl relative z-10 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider text-green-100 bg-white/10 backdrop-blur-sm border border-white/15 mb-4">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Admissions and School Partnerships
          </div>
          <h1 className="text-display text-white mb-6 leading-tight">Book a Demo or Inquiry</h1>
          <p className="text-lg leading-relaxed text-green-100">
            Let&apos;s discuss how {brand.name} can integrate into your academic calendar. Fill out the consultation request below, and our team will get in touch promptly.
          </p>
        </div>
      </section>

      <section className="section-pad bg-stone-50">
        <div className="container-xl max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
            
            {/* Left Column: Direct Contact Info */}
            <div className="lg:w-1/3 flex flex-col gap-6">
              <div className="bg-white p-6 md:p-8 rounded-2xl border border-stone-200/80 shadow-sm">
                <h2 className="text-h2 mb-3 text-stone-900">Direct Contact</h2>
                <p className="text-sm leading-relaxed text-stone-600 mb-6">
                  Have an urgent inquiry or prefer direct correspondence? Our educational liaisons are available during business hours.
                </p>

                <div className="flex flex-col gap-5">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 bg-emerald-50 text-emerald-700">
                      <Mail size={18} />
                    </div>
                    <div>
                      <p className="font-semibold text-xs uppercase tracking-wider text-stone-400 mb-0.5">Official Email</p>
                      <a href={`mailto:${contactConfig.officialEmail}`} className="text-sm font-medium text-emerald-800 hover:text-emerald-950 underline underline-offset-2">
                        {contactConfig.officialEmail}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 bg-emerald-50 text-emerald-700">
                      <Phone size={18} />
                    </div>
                    <div>
                      <p className="font-semibold text-xs uppercase tracking-wider text-stone-400 mb-0.5">Direct Line</p>
                      <a href={`tel:${contactConfig.officialPhone.replace(/\s+/g, '')}`} className="text-sm font-medium text-emerald-800 hover:text-emerald-950">
                        {contactConfig.officialPhone}
                      </a>
                    </div>
                  </div>

                  {contactConfig.whatsappNumber && (
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 bg-emerald-50 text-emerald-700">
                        <MessageSquare size={18} />
                      </div>
                      <div>
                        <p className="font-semibold text-xs uppercase tracking-wider text-stone-400 mb-0.5">WhatsApp Inquiry</p>
                        <a
                          href={`https://wa.me/${contactConfig.whatsappNumber}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm font-medium text-emerald-800 hover:text-emerald-950"
                        >
                          +{contactConfig.whatsappNumber}
                        </a>
                      </div>
                    </div>
                  )}

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 bg-emerald-50 text-emerald-700">
                      <MapPin size={18} />
                    </div>
                    <div>
                      <p className="font-semibold text-xs uppercase tracking-wider text-stone-400 mb-0.5">Academy Address</p>
                      <p className="text-sm text-stone-600 leading-relaxed">
                        {brand.contact.address}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 bg-emerald-50 text-emerald-700">
                      <Clock size={18} />
                    </div>
                    <div>
                      <p className="font-semibold text-xs uppercase tracking-wider text-stone-400 mb-0.5">Office Hours</p>
                      <p className="text-sm text-stone-600">
                        Monday – Saturday: 9:00 AM – 6:00 PM IST
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Safe Demo Guarantee */}
              <div className="bg-emerald-900 text-white p-6 rounded-2xl">
                <h3 className="font-bold text-base mb-2 text-emerald-100">Transparent and Free Consultation</h3>
                <p className="text-xs text-emerald-200/90 leading-relaxed mb-4">
                  Demo sessions and initial curricular alignment meetings are conducted at no cost or obligation to the school. We present customized learning outcomes, safety protocols, and student batching for your management.
                </p>
                <div className="text-[11px] text-emerald-300 border-t border-emerald-800/80 pt-3">
                  All submissions are encrypted and processed in compliance with student privacy regulations.
                </div>
              </div>
            </div>

            {/* Right Column: The Full Book a Demo Lead Engine */}
            <div className="lg:w-2/3">
              <BookADemoForm />
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
