"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { terminalLines } from "@/lib/data";

export default function Terminal() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [visibleLines, setVisibleLines] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (visibleLines >= terminalLines.length) return;
    const t = setTimeout(() => setVisibleLines((v) => v + 1), 650);
    return () => clearTimeout(t);
  }, [inView, visibleLines]);

  return (
    <section className="mx-auto max-w-4xl px-6 py-16">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="glass overflow-hidden rounded-2xl border border-border shadow-glow"
      >
        <div className="flex items-center gap-2 border-b border-border bg-surface2 px-4 py-3">
          <span className="h-3 w-3 rounded-full bg-red-400/70" />
          <span className="h-3 w-3 rounded-full bg-yellow-400/70" />
          <span className="h-3 w-3 rounded-full bg-signal/70" />
          <span className="ml-3 font-mono text-xs text-muted">manjari@devops:~</span>
        </div>
        <div className="min-h-[180px] space-y-3 p-6 font-mono text-sm">
          {terminalLines.slice(0, visibleLines).map((line) => (
            <div key={line.cmd}>
              <p>
                <span className="text-signal">$</span>{" "}
                <span className="text-ink">{line.cmd}</span>
              </p>
              <p className="pl-4 text-muted">{line.out}</p>
            </div>
          ))}
          {visibleLines < terminalLines.length ? (
            <span className="inline-block h-4 w-2 animate-blink bg-accent2" />
          ) : (
            <p>
              <span className="text-signal">$</span>{" "}
              <span className="animate-blink text-ink">_</span>
            </p>
          )}
        </div>
      </motion.div>
    </section>
  );
}
