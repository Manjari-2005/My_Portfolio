"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { profile, stats } from "@/lib/data";

const HeroScene = dynamic(() => import("@/components/3d/HeroScene"), {
  ssr: false,
});

const ROLES = ["Software Developer", "DevOps Enthusiast", "AI Explorer"];

function useTypewriter(words: string[], speed = 65, pause = 1400) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex % words.length];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && text === current) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && text === "") {
      setDeleting(false);
      setWordIndex((i) => i + 1);
    } else {
      timeout = setTimeout(() => {
        setText((t) =>
          deleting ? current.slice(0, t.length - 1) : current.slice(0, t.length + 1)
        );
      }, deleting ? speed / 2 : speed);
    }
    return () => clearTimeout(timeout);
  }, [text, deleting, wordIndex, words, speed, pause]);

  return text;
}

export default function Hero() {
  const typed = useTypewriter(ROLES);

  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-28"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-90">
        <HeroScene />
      </div>

      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-14 md:grid-cols-[1.1fr_0.9fr]">
        <div>
          {/* Circular avatar + greeting — visible on ALL screen sizes (mobile + desktop) */}
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 flex items-center gap-3"
          >
            <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full border-2 border-accent/50 shadow-glow sm:h-16 sm:w-16">
              <Image
                src={profile.photo}
                alt="Manjari Kamley"
                fill
                sizes="64px"
                className="object-cover"
                priority
              />
            </div>
            <p className="font-mono text-sm text-ink sm:text-base">
              Hi, I&apos;m <span className="text-gradient font-semibold">Manjari</span> 👋
            </p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="eyebrow mb-5"
          >
            open to sde · full-stack · ai/ml internships
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-5xl font-bold leading-[1.05] text-ink sm:text-6xl lg:text-7xl"
          >
            Building Scalable
            <br />
            Software &amp; <span className="text-gradient">DevOps</span> Solutions
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-5 font-mono text-lg text-cyan sm:text-xl"
          >
            {typed}
            <span className="animate-blink">_</span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="mt-6 max-w-lg text-base text-muted"
          >
            {profile.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mt-9 flex flex-wrap gap-4"
          >
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor-hover
              className="rounded-full bg-accent px-7 py-3 font-mono text-sm uppercase tracking-widest text-white shadow-glow transition-transform hover:-translate-y-0.5"
            >
              Download Résumé
            </a>
            <a
              href="#contact"
              data-cursor-hover
              className="rounded-full border border-border px-7 py-3 font-mono text-sm uppercase tracking-widest text-ink transition-colors hover:border-cyan hover:text-cyan"
            >
              Get in Touch
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-4"
          >
            {stats.map((s) => (
              <div key={s.label}>
                <div className="font-display text-2xl font-bold text-ink">
                  {s.value}
                  <span className="text-accent2">{s.suffix}</span>
                </div>
                <div className="mt-1 font-mono text-[0.65rem] uppercase tracking-widest text-muted">
                  {s.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Large circular photo card — desktop only, sits beside the text */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative mx-auto hidden md:block"
        >
          <div className="relative h-80 w-80 animate-floaty">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-accent to-cyan opacity-60 blur-2xl" />
            <div className="glass relative h-full w-full overflow-hidden rounded-full border-2 border-accent/40 p-2">
              <Image
                src={profile.photo}
                alt="Manjari Kamley"
                fill
                sizes="320px"
                className="rounded-full object-cover"
                priority
              />
            </div>
            <div className="glass absolute -bottom-5 -left-6 rounded-xl px-4 py-2 font-mono text-xs text-signal">
              <span className="mr-2 inline-block h-2 w-2 rounded-full bg-signal align-middle" />
              status: open to work
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3 }}
        className="absolute bottom-8 font-mono text-[0.65rem] uppercase tracking-[0.3em] text-muted"
      >
        scroll ↓
      </motion.div>
    </section>
  );
}