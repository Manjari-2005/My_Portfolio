"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin } from "lucide-react";
import { profile } from "@/lib/data";

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-28">
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="eyebrow mb-3"
      >
        contact
      </motion.p>
      <h2 className="font-display text-3xl font-bold text-ink sm:text-4xl">
        Let&apos;s build something together
      </h2>
      <p className="mt-3 max-w-xl text-muted">
        Open to Software Development, Full-Stack, AI/ML, and Data Analyst internships
        and entry-level roles. My inbox is genuinely the fastest way to reach me.
      </p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-12 grid max-w-xl grid-cols-1 gap-4 sm:grid-cols-2"
      >
        
          href={"mailto:" + profile.email}
          data-cursor-hover
          className="glass flex items-center gap-3 rounded-xl p-4 text-ink transition-colors hover:border-accent/60 sm:col-span-2"
        >
          <Mail className="h-5 w-5 shrink-0 text-accent2" /> {profile.email}
        </a>
        
          href={profile.github}
          target="_blank"
          rel="noopener noreferrer"
          data-cursor-hover
          className="glass flex items-center gap-3 rounded-xl p-4 text-ink transition-colors hover:border-accent/60"
        >
          <Github className="h-5 w-5 shrink-0 text-accent2" /> GitHub
        </a>
        
          href={profile.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          data-cursor-hover
          className="glass flex items-center gap-3 rounded-xl p-4 text-ink transition-colors hover:border-accent/60"
        >
          <Linkedin className="h-5 w-5 shrink-0 text-accent2" /> LinkedIn
        </a>
      </motion.div>
    </section>
  );
}