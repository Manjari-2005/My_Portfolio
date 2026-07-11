"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { profile } from "@/lib/data";

const LINKS = [
  { href: "#about", label: "about" },
  { href: "#skills", label: "skills" },
  { href: "#projects", label: "projects" },
  { href: "#experience", label: "experience" },
  { href: "#certifications", label: "certs" },
  { href: "#contact", label: "contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "glass py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6">
        <a href="#" className="font-display text-lg font-bold text-ink" data-cursor-hover>
          Manjari<span className="text-accent">.</span>
        </a>

        <ul className="hidden gap-8 md:flex">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                data-cursor-hover
                className="font-mono text-xs uppercase tracking-widest text-muted transition-colors hover:text-accent2"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href={profile.resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
          data-cursor-hover
          className="hidden rounded-full border border-accent/50 px-5 py-2 font-mono text-xs uppercase tracking-widest text-ink transition-colors hover:border-accent hover:bg-accent/10 md:inline-block"
        >
          Resume ↗
        </a>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="flex flex-col gap-1.5 md:hidden"
        >
          <span className="h-0.5 w-6 bg-ink" />
          <span className="h-0.5 w-6 bg-ink" />
        </button>
      </div>

      {open && (
        <div className="glass mx-6 mt-3 flex flex-col gap-4 rounded-2xl p-6 md:hidden">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="font-mono text-sm uppercase tracking-widest text-muted hover:text-accent2"
            >
              {l.label}
            </a>
          ))}
          <a href={profile.resumeUrl} target="_blank" rel="noopener noreferrer" className="text-sm text-accent2">
            Resume ↗
          </a>
        </div>
      )}
    </motion.nav>
  );
}
