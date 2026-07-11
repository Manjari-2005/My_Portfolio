"use client";

import { motion } from "framer-motion";
import { Code2, BrainCircuit, LineChart, Container } from "lucide-react";
import { whatIDo } from "@/lib/data";

const ICONS = [Code2, BrainCircuit, LineChart, Container];

export default function WhatIDo() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="eyebrow mb-3"
      >
        what i do
      </motion.p>
      <h2 className="font-display text-3xl font-bold text-ink sm:text-4xl">
        One stack, four disciplines
      </h2>

      <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {whatIDo.map((item, i) => {
          const Icon = ICONS[i];
          return (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -6 }}
              className="glass group rounded-2xl p-6 transition-colors hover:border-accent/60"
            >
              <Icon className="h-7 w-7 text-accent2 transition-colors group-hover:text-cyan" />
              <h3 className="mt-4 font-display text-lg font-semibold text-ink">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{item.description}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
