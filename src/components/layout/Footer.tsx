import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import { brand } from "@/config/brand";
import { navLinks, footerSecondaryLinks } from "@/config/navigation";
import Logo from "@/components/ui/Logo";
import SocialLinks from "@/components/ui/SocialLinks";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      style={{ background: "var(--color-green-950)", color: "var(--color-green-200)" }}
      aria-label="Site footer"
    >
      <div className="container-xl py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <Logo light={true} variant="horizontal" className="mb-6 origin-left" />
            <p className="text-sm leading-relaxed opacity-75 max-w-sm mb-6">
              {brand.tagline} — {brand.fullName} partners with schools to nurture students
              through agriculture, art, folk culture, and nature-based learning.
            </p>
            {/* Social links */}
            <div className="flex items-center gap-3">
              <SocialLinks light={true} iconClassName="w-4 h-4" />
            </div>
          </div>

          {/* Modules column */}
          <div>
            <h3
              className="text-sm font-semibold uppercase tracking-widest mb-5"
              style={{ color: "var(--color-gold-300)" }}
            >
              Modules
            </h3>
            <ul className="flex flex-col gap-2.5">
              <li>
                <Link
                  href="/modules/foundation"
                  className="text-sm opacity-70 hover:opacity-100 hover:text-white transition-all"
                >
                  Foundation (Classes 1–4)
                </Link>
              </li>
              <li>
                <Link
                  href="/modules/exploration"
                  className="text-sm opacity-70 hover:opacity-100 hover:text-white transition-all"
                >
                  Exploration (Classes 5–8)
                </Link>
              </li>
              <li>
                <Link
                  href="/modules/specialization"
                  className="text-sm opacity-70 hover:opacity-100 hover:text-white transition-all"
                >
                  Specialization (Classes 9–10)
                </Link>
              </li>
              <li>
                <Link
                  href="/summer-camps"
                  className="text-sm opacity-70 hover:opacity-100 hover:text-white transition-all"
                >
                  Special Camps
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links column */}
          <div>
            <h3
              className="text-sm font-semibold uppercase tracking-widest mb-5"
              style={{ color: "var(--color-gold-300)" }}
            >
              Explore
            </h3>
            <ul className="flex flex-col gap-2.5">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm opacity-70 hover:opacity-100 hover:text-white transition-all"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              {footerSecondaryLinks.map((sec) => (
                <li key={sec.href}>
                  <Link
                    href={sec.href}
                    className="text-sm opacity-70 hover:opacity-100 hover:text-white transition-all"
                  >
                    {sec.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact column */}
          <div>
            <h3
              className="text-sm font-semibold uppercase tracking-widest mb-5"
              style={{ color: "var(--color-gold-300)" }}
            >
              Contact
            </h3>
            <ul className="flex flex-col gap-3">
              <li className="flex items-start gap-2 text-sm opacity-75">
                <Mail size={15} className="mt-0.5 shrink-0" />
                <a
                  href={brand.contact.emailLink}
                  className="hover:text-white transition-colors underline-offset-2 hover:underline"
                >
                  {brand.contact.email}
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm opacity-75">
                <Phone size={15} className="mt-0.5 shrink-0" />
                <a
                  href={brand.contact.phoneLink}
                  className="hover:text-white transition-colors underline-offset-2 hover:underline"
                >
                  {brand.contact.phone}
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm opacity-75">
                <MapPin size={15} className="mt-0.5 shrink-0" />
                <span>{brand.contact.address}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs opacity-60"
          style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}
        >
          <p>
            &copy; {currentYear} {brand.legal.officialLegalName}. All rights reserved.
          </p>
          <p>
            Future Ready Agriculture Academy — Hands-On Agricultural and Ecological Education for Schools.
          </p>
        </div>
      </div>
    </footer>
  );
}
