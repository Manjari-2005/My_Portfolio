"use client";

import { motion } from "framer-motion";
import { journey } from "@/lib/data";

export default function Journey() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="eyebrow mb-3"
      >
        the journey
      </motion.p>
      <h2 className="mb-10 font-display text-3xl font-bold text-ink sm:text-4xl">
        Year by year
      </h2>

      <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
        {journey.map((j, i) => (
          <motion.div
            key={j.year}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="glass rounded-2xl p-5"
          >
            <p className="font-display text-2xl font-bold text-gradient">{j.year}</p>
            <p className="mt-2 text-sm text-muted">{j.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
