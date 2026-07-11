"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { education } from "@/lib/data";

export default function Education() {
  return (
    <section id="education" className="mx-auto max-w-6xl px-6 py-24">
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="eyebrow mb-3"
      >
        education
      </motion.p>
      <h2 className="font-display text-3xl font-bold text-ink sm:text-4xl">
        Academic record
      </h2>

      <div className="mt-10 space-y-5">
        {education.map((e, i) => (
          <motion.div
            key={e.school}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="glass flex flex-col gap-4 rounded-2xl p-6 sm:flex-row sm:items-start"
          >
            <GraduationCap className="h-7 w-7 shrink-0 text-accent2" />
            <div>
              <h3 className="font-display text-lg font-semibold text-ink">{e.school}</h3>
              <p className="mt-1 text-sm text-cyan">{e.degree}</p>
              <p className="mt-1 font-mono text-xs text-muted">{e.duration}</p>
              {e.note && <p className="mt-2 text-sm text-muted">{e.note}</p>}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
