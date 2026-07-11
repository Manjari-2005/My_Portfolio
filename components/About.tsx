"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-28">
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="eyebrow mb-3"
      >
        about
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.05 }}
        className="font-display text-3xl font-bold text-ink sm:text-4xl"
      >
        Curious, full-stack, and comfortable with ambiguity
      </motion.h2>

      <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-[1.3fr_0.7fr]">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="space-y-5 text-[1.05rem] leading-relaxed text-muted"
        >
          <p>
            I&apos;m a final-year Computer Science undergraduate at RCC Institute of
            Information Technology, Kolkata (CGPA 7.95). I don&apos;t stick to one lane —
            I&apos;ve shipped React/Next.js front ends, Flask APIs, graph-based fraud
            detection, and Docker-based multi-tier infrastructure, often for the same
            project.
          </p>
          <p>
            That range comes from hackathons and internships: a graph-analytics fraud
            platform (LedgerShield) built at IIT Delhi, a multilingual voice-AI product
            (VoiceIQ) built with a team at NIT Delhi, a Zero-Trust infrastructure stack
            (DevOps-IaC-Simulator), and a full MERN travel planner (TravelBuddy) built at
            Smart India Hackathon.
          </p>
          <p>
            What ties it together is a bias toward{" "}
            <span className="text-ink">shipping</span> — I&apos;d rather have something
            deployed and imperfect than theoretical and polished.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="glass rounded-2xl p-6 font-mono text-sm"
        >
          <div className="mb-3 flex gap-1.5">
            <span className="h-3 w-3 rounded-full bg-red-400/70" />
            <span className="h-3 w-3 rounded-full bg-yellow-400/70" />
            <span className="h-3 w-3 rounded-full bg-signal/70" />
          </div>
          <p className="text-muted">
            <span className="text-accent2">const</span> manjari = {"{"}
          </p>
          <p className="pl-4 text-ink">
            base: <span className="text-cyan">&quot; Kolkata, West Bengal&quot;</span>,
          </p>
          <p className="pl-4 text-ink">
            year: <span className="text-cyan">&quot;Final Year, B.Sc. CS&quot;</span>,
          </p>
          <p className="pl-4 text-ink">
            focus: [<span className="text-cyan">&quot;full-stack&quot;</span>,{" "}
            <span className="text-cyan">&quot;ai/ml&quot;</span>,{" "}
            <span className="text-cyan">&quot;devops&quot;</span>],
          </p>
          <p className="pl-4 text-ink">
            status: <span className="text-signal">&quot;open_to_work&quot;</span>,
          </p>
          <p className="text-muted">{"}"}</p>
        </motion.div>
      </div>
    </section>
  );
}
