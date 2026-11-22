"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/courses/numerical-mathematics", label: "Numerical Mathematics" },
  { href: "/library", label: "Library" },
  { href: "/paths", label: "Learning paths" },
  { href: "/about", label: "About" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="relative z-20 border-b border-white/[0.07]">
      <div className="container flex h-[76px] items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-3"
          aria-label="Visual Studies home"
          onClick={() => setMenuOpen(false)}
        >
          <span className="grid h-9 w-9 place-items-center rounded-xl border border-teal-300/20 bg-teal-300/[0.08] text-[13px] font-semibold tracking-tight text-teal-200">
            VS
          </span>
          <span className="leading-tight">
            <span className="block text-[13px] font-semibold tracking-tight">
              Visual Studies
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Main navigation">
          {links.map((link) => {
            const active = pathname === link.href || pathname.startsWith(`${link.href}/`);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-[13px] transition-colors hover:text-white ${
                  active ? "text-white" : "text-slate-400"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <Link
          href="/library"
          className="button-secondary hidden min-h-[38px] px-4 text-[12px] sm:inline-flex"
        >
          Explore lessons <span aria-hidden="true">↗</span>
        </Link>

        <button
          type="button"
          className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-slate-200 md:hidden"
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="text-lg" aria-hidden="true">{menuOpen ? "×" : "☰"}</span>
        </button>
      </div>

      {menuOpen && (
        <nav
          id="mobile-navigation"
          className="absolute inset-x-0 top-full border-b border-white/[0.08] bg-[#0c1220] px-6 py-4 shadow-xl md:hidden"
          aria-label="Mobile navigation"
        >
          <div className="container flex flex-col gap-1">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-lg px-3 py-3 text-sm text-slate-300 hover:bg-white/[0.04] hover:text-white"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
