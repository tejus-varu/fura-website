"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import { brand } from "@/config/brand";
import { navLinks } from "@/config/navigation";
import type { NavLink } from "@/types";
import Button from "@/components/ui/Button";
import Logo from "@/components/ui/Logo";
import SocialLinks from "@/components/ui/SocialLinks";

/** Desktop dropdown for nav items with children */
function NavDropdown({ link }: { link: NavLink }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  const isActive =
    pathname === link.href ||
    link.children?.some((c) => pathname === c.href);

  // Close on click-outside
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  // Close on Escape
  const onKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === "Escape") setOpen(false);
  }, []);

  return (
    <div
      ref={ref}
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onKeyDown={onKeyDown}
    >
      <button
        className={`flex items-center gap-1 px-2.5 xl:px-3 py-1.5 xl:py-2 text-[13px] xl:text-sm font-medium rounded-lg transition-colors duration-150 whitespace-nowrap ${
          isActive
            ? "text-white bg-white/15"
            : "text-[var(--color-green-200)] hover:text-white hover:bg-white/10"
        }`}
        aria-haspopup="true"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        {link.label}
        <ChevronDown
          size={13}
          className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>

      {/* Dropdown panel */}
      <div
        className={`absolute left-0 top-full mt-1.5 z-50 min-w-[240px] rounded-2xl shadow-2xl overflow-hidden transition-all duration-200 ${
          open
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-2 pointer-events-none"
        }`}
        style={{
          background: "var(--color-green-950)",
          border: "1px solid rgba(255,255,255,0.12)",
          backdropFilter: "blur(12px)",
        }}
        role="menu"
      >
        {link.children?.map((child) => {
          const isChildActive = pathname === child.href;
          return (
            <Link
              key={child.href}
              href={child.href}
              role="menuitem"
              onClick={() => setOpen(false)}
              className={`block px-4 py-3 text-sm transition-colors duration-150 ${
                isChildActive
                  ? "text-white bg-white/15 font-semibold"
                  : "text-[var(--color-green-200)] hover:text-white hover:bg-white/10"
              }`}
            >
              {child.label}
            </Link>
          );
        })}
      </div>
    </div>
  );
}

/** Mobile accordion item for nav items with children */
function MobileNavItem({
  link,
  onClose,
}: {
  link: NavLink;
  onClose: () => void;
}) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  if (!link.children) {
    return (
      <Link
        href={link.href}
        onClick={onClose}
        className={`block px-4 py-3 text-base font-medium rounded-xl transition-colors ${
          pathname === link.href
            ? "text-white bg-white/15"
            : "text-[var(--color-green-200)] hover:text-white hover:bg-white/10"
        }`}
      >
        {link.label}
      </Link>
    );
  }

  return (
    <div>
      <button
        className="w-full flex items-center justify-between px-4 py-3 text-base font-medium rounded-xl text-[var(--color-green-200)] hover:text-white hover:bg-white/10 transition-colors"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        {link.label}
        <ChevronDown
          size={16}
          className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <div className="ml-4 mt-1 flex flex-col gap-1 border-l border-white/10 pl-2">
          {link.children.map((child) => (
            <Link
              key={child.href}
              href={child.href}
              onClick={onClose}
              className={`block px-3 py-2 text-sm rounded-xl transition-colors ${
                pathname === child.href
                  ? "text-white bg-white/15 font-semibold"
                  : "text-[var(--color-green-300)] hover:text-white hover:bg-white/10"
              }`}
            >
              {child.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[var(--color-green-950)]/95 backdrop-blur-md shadow-lg py-2"
          : "bg-transparent py-3 md:py-4"
      }`}
    >
      <div className="container-xl">
        <div className="flex items-center justify-between gap-2 xl:gap-4 h-14 md:h-16">
          {/* Logo / Brand */}
          <Link
            href="/"
            className="focus-visible:outline-none shrink-0"
            aria-label={`${brand.name} — Home`}
          >
            {/* Desktop: Horizontal lockup with circular emblem & wordmark */}
            <div className="hidden sm:block">
              <Logo light={true} variant="horizontal" size="sm" />
            </div>
            {/* Mobile: Compact lockup */}
            <div className="sm:hidden">
              <Logo light={true} variant="compact" size="sm" />
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav
            className="hidden lg:flex items-center gap-0.5 xl:gap-1"
            aria-label="Primary navigation"
          >
            {navLinks.map((link) =>
              link.children ? (
                <NavDropdown key={link.label} link={link} />
              ) : (
                <DesktopNavLink key={link.label} link={link} />
              )
            )}
          </nav>

          {/* Right Header Area: Social Links + Book a Demo CTA */}
          <div className="hidden lg:flex items-center gap-3 shrink-0">
            {/* Configurable Social Links */}
            <SocialLinks light={true} iconClassName="w-4 h-4" />

            {/* Book a Demo CTA */}
            <Button href="/contact" variant="primary" size="sm" className="whitespace-nowrap">
              Book a Demo
            </Button>
          </div>

          {/* Mobile Right Controls: Social Links (if configured) + Hamburger */}
          <div className="flex items-center gap-2 lg:hidden">
            <SocialLinks light={true} iconClassName="w-3.5 h-3.5" />
            <button
              id="mobile-menu-toggle"
              onClick={() => setMenuOpen((v) => !v)}
              className="p-2 rounded-lg text-[var(--color-green-200)] hover:bg-white/10 transition-colors focus-visible:outline-none"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {menuOpen && (
        <div
          className="lg:hidden fixed inset-0 top-14 md:top-16 z-40 overflow-y-auto"
          style={{ background: "var(--color-green-950)" }}
        >
          <nav className="flex flex-col p-6 gap-1.5" aria-label="Mobile navigation">
            {navLinks.map((link) => (
              <MobileNavItem
                key={link.label}
                link={link}
                onClose={() => setMenuOpen(false)}
              />
            ))}

            <div className="mt-6 pt-6 border-t border-white/10 flex flex-col gap-4">
              <Button
                href="/contact"
                variant="primary"
                size="md"
                className="w-full justify-center"
                onClick={() => setMenuOpen(false)}
              >
                Book a Demo
              </Button>

              {/* Mobile Social Links Footer */}
              <div className="flex items-center justify-between text-xs text-[var(--color-green-300)] pt-2">
                <span>Connect with FURAA:</span>
                <SocialLinks light={true} iconClassName="w-4 h-4" />
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

/** Simple desktop nav link without children */
function DesktopNavLink({ link }: { link: NavLink }) {
  const pathname = usePathname();
  const isActive = pathname === link.href;
  return (
    <Link
      href={link.href}
      className={`px-2.5 xl:px-3 py-1.5 xl:py-2 text-[13px] xl:text-sm font-medium rounded-lg transition-colors duration-150 whitespace-nowrap ${
        isActive
          ? "text-white bg-white/15"
          : "text-[var(--color-green-200)] hover:text-white hover:bg-white/10"
      }`}
    >
      {link.label}
    </Link>
  );
}
