"use client";

import { motion } from "framer-motion";
import { Trophy } from "lucide-react";
import { achievements } from "@/lib/data";

export default function Achievements() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="eyebrow mb-3"
      >
        achievements
      </motion.p>
      <h2 className="font-display text-3xl font-bold text-ink sm:text-4xl">
        Milestones worth mentioning
      </h2>

      <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {achievements.map((a, i) => (
          <motion.div
            key={a.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06 }}
            whileHover={{ y: -5 }}
            className="glass rounded-2xl p-5"
          >
            <Trophy className="h-6 w-6 text-signal" />
            <h3 className="mt-3 font-display text-base font-semibold text-ink">
              {a.title}
            </h3>
            <p className="mt-1 text-sm text-cyan">{a.org}</p>
            <p className="mt-2 text-xs text-muted">{a.note}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
