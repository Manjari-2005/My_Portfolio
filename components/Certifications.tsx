"use client";

import { motion } from "framer-motion";
import { Award } from "lucide-react";
import { certifications } from "@/lib/data";

export default function Certifications() {
  return (
    <section id="certifications" className="mx-auto max-w-6xl px-6 py-24">
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="eyebrow mb-3"
      >
        certifications
      </motion.p>
      <h2 className="font-display text-3xl font-bold text-ink sm:text-4xl">
        Continuous, deliberate learning
      </h2>

      <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {certifications.map((c, i) => (
          <motion.div
            key={c.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06 }}
            whileHover={{ y: -5 }}
            className="glass rounded-2xl p-5"
          >
            <Award className="h-6 w-6 text-accent2" />
            <h3 className="mt-3 font-display text-base font-semibold text-ink">
              {c.title}
            </h3>
            <p className="mt-1 text-sm text-cyan">{c.org}</p>
            <p className="mt-1 font-mono text-xs text-muted">{c.date}</p>
            {c.note && <p className="mt-2 text-xs text-muted">{c.note}</p>}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
