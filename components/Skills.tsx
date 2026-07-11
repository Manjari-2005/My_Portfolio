"use client";

import { motion } from "framer-motion";
import { skillGroups } from "@/lib/data";

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-24">
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="eyebrow mb-3"
      >
        skills
      </motion.p>
      <h2 className="font-display text-3xl font-bold text-ink sm:text-4xl">
        My technical toolkit
      </h2>
      <p className="mt-3 max-w-xl text-muted">
        Every tool below has shipped in a real project — web, machine learning, or
        infrastructure. No filler, no padding.
      </p>

      <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
        {skillGroups.map((g, gi) => (
          <motion.div
            key={g.group}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: gi * 0.06 }}
            className="glass rounded-2xl p-6"
          >
            <h3 className="font-mono text-xs uppercase tracking-widest text-accent2">
              {g.group}
            </h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {g.items.map((skill, i) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.85 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: gi * 0.06 + i * 0.03 }}
                  whileHover={{ y: -3, borderColor: "#7C3AED" }}
                  className="rounded-full border border-border bg-surface2 px-3.5 py-1.5 text-sm text-ink"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
