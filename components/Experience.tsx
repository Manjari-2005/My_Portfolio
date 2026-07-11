"use client";

import { motion } from "framer-motion";
import { experience } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-6 py-24">
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="eyebrow mb-3"
      >
        experience
      </motion.p>
      <h2 className="font-display text-3xl font-bold text-ink sm:text-4xl">
        Where I&apos;ve applied it
      </h2>

      <div className="relative mt-12 border-l border-border pl-8">
        {experience.map((e, i) => (
          <motion.div
            key={e.org}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="relative mb-10 last:mb-0"
          >
            <span className="absolute -left-[38px] top-1.5 h-3 w-3 rounded-full bg-accent shadow-glow" />
            <p className="font-mono text-xs uppercase tracking-widest text-muted">
              {e.duration}
            </p>
            <h3 className="mt-1 font-display text-lg font-semibold text-ink">{e.role}</h3>
            <p className="text-sm text-accent2">{e.org}</p>
            {e.note && <p className="mt-1 text-xs text-muted">{e.note}</p>}
            <ul className="mt-3 space-y-1.5">
              {e.bullets.map((b) => (
                <li key={b} className="flex gap-2 text-sm text-muted">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-cyan" />
                  {b}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
