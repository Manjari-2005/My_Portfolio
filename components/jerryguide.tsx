"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Sparkles, X } from "lucide-react";
import { useCallback, useEffect, useState } from "react";

interface Step {
  id: string;
  title: string;
  message: string;
}

const STEPS: Step[] = [
  {
    id: "hero",
    title: "Welcome!",
    message: "Hi, I'm Jerry \u{1F42D} \u2014 Manjari's little guide. Want a 60-second tour?",
  },
  {
    id: "about",
    title: "About",
    message: "Here's who Manjari is \u2014 final-year CS, comfortable across full-stack, AI/ML, and DevOps.",
  },
  {
    id: "skills",
    title: "Skills",
    message: "Her technical toolkit \u2014 languages, web stack, ML tooling, and cloud/DevOps, all shipped in real projects.",
  },
  {
    id: "projects",
    title: "Projects",
    message: "Six shipped projects \u2014 hackathon wins, a fraud-detection engine, and a Zero-Trust infra stack.",
  },
  {
    id: "experience",
    title: "Experience",
    message: "Where she's applied it \u2014 a hands-on AI internship building real ML pipelines.",
  },
  {
    id: "contact",
    title: "Contact",
    message: "And here's how to reach her \u2014 email's the fastest way to get a reply.",
  },
];

const STORAGE_KEY = "jerry_tour_seen";

export default function JerryGuide() {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState(0);
  const [target, setTarget] = useState<HTMLElement | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const seen = typeof window !== "undefined" && localStorage.getItem(STORAGE_KEY);
    if (!seen) {
      const t = setTimeout(() => setOpen(true), 1800);
      return () => clearTimeout(t);
    }
  }, []);

  useEffect(() => {
    if (!open) {
      setTarget(null);
      return;
    }
    const el = document.getElementById(STEPS[step].id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "center" });
      setTarget(el);
    } else {
      setTarget(null);
    }
  }, [open, step]);

  const finish = useCallback(() => {
    setOpen(false);
    setStep(0);
    if (typeof window !== "undefined") localStorage.setItem(STORAGE_KEY, "1");
  }, []);

  const next = () => (step === STEPS.length - 1 ? finish() : setStep((s) => s + 1));
  const back = () => setStep((s) => Math.max(0, s - 1));
  const start = () => {
    setStep(0);
    setOpen(true);
  };

  if (!mounted) return null;

  return (
    <>
      <AnimatePresence>{open && target && <SpotlightRing target={target} />}</AnimatePresence>

      {!open && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          onClick={start}
          data-cursor-hover
          className="glass fixed bottom-6 right-6 z-40 flex items-center gap-2 rounded-full border border-accent/40 px-4 py-3 font-mono text-xs text-ink shadow-glow transition-transform hover:-translate-y-0.5"
          aria-label="Open Jerry, the portfolio guide"
        >
          <span aria-hidden className="text-base leading-none">
            🐭
          </span>
          <Sparkles className="h-3.5 w-3.5 text-cyan" /> Ask Jerry
        </motion.button>
      )}

      <AnimatePresence>
        {open && (
          <motion.div
            role="dialog"
            aria-label="Jerry, portfolio guide"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="glass fixed bottom-6 right-6 z-50 w-[min(340px,calc(100vw-3rem))] rounded-2xl border border-accent/40 p-5 shadow-glow"
          >
            <div className="flex items-start gap-3">
              <div
                aria-hidden
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-accent to-cyan text-lg"
              >
                🐭
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between gap-2">
                  <p className="font-mono text-[0.65rem] uppercase tracking-widest text-cyan">
                    Jerry · {step + 1}/{STEPS.length}
                  </p>
                  <button
                    onClick={finish}
                    aria-label="Close tour"
                    data-cursor-hover
                    className="shrink-0"
                  >
                    <X className="h-4 w-4 text-muted hover:text-ink" />
                  </button>
                </div>
                <p className="mt-2 font-display text-sm font-semibold text-ink">
                  {STEPS[step].title}
                </p>
                <p className="mt-1 text-sm leading-relaxed text-muted">{STEPS[step].message}</p>
              </div>
            </div>

            <div className="mt-4 flex items-center justify-between">
              <button
                onClick={finish}
                data-cursor-hover
                className="font-mono text-[0.65rem] uppercase tracking-widest text-muted hover:text-ink"
              >
                Skip
              </button>
              <div className="flex items-center gap-2">
                {step > 0 && (
                  <button
                    onClick={back}
                    data-cursor-hover
                    className="flex items-center gap-1 rounded-full border border-border px-3 py-2 font-mono text-[0.65rem] uppercase tracking-widest text-ink transition-colors hover:border-cyan hover:text-cyan"
                  >
                    <ChevronLeft className="h-3 w-3" /> Back
                  </button>
                )}
                <button
                  onClick={next}
                  data-cursor-hover
                  className="flex items-center gap-1 rounded-full bg-accent px-3 py-2 font-mono text-[0.65rem] uppercase tracking-widest text-white shadow-glow transition-transform hover:-translate-y-0.5"
                >
                  {step === STEPS.length - 1 ? "Done" : "Next"} <ChevronRight className="h-3 w-3" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function SpotlightRing({ target }: { target: HTMLElement }) {
  const [rect, setRect] = useState<DOMRect>(() => target.getBoundingClientRect());

  useEffect(() => {
    let frame: number;
    const track = () => {
      setRect(target.getBoundingClientRect());
      frame = requestAnimationFrame(track);
    };
    frame = requestAnimationFrame(track);
    return () => cancelAnimationFrame(frame);
  }, [target]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      aria-hidden
      className="pointer-events-none fixed z-30 rounded-2xl border-2 border-cyan"
      style={{
        top: rect.top - 10,
        left: rect.left - 10,
        width: rect.width + 20,
        height: rect.height + 20,
        boxShadow: "0 0 0 4px rgba(6,182,212,0.15), 0 0 50px rgba(6,182,212,0.35)",
      }}
    />
  );
}