"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Send } from "lucide-react";
import { useState, type FormEvent } from "react";
import { profile } from "@/lib/data";

// Replace with your own Formspree endpoint: https://formspree.io -> new form -> copy the ID
const FORMSPREE_ENDPOINT = "https://formspree.io/f/xykrgean";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [errorDetail, setErrorDetail] = useState<string>("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    setErrorDetail("");
    const form = e.currentTarget;
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("sent");
        form.reset();
      } else {
        // Formspree returns a JSON body describing exactly what went wrong
        // (e.g. "form not found", "not confirmed yet"). Surface it instead
        // of a generic message — it's the fastest way to see the real cause.
        let detail = `Request failed (${res.status})`;
        try {
          const data = await res.json();
          if (data?.errors?.length) {
            detail = data.errors
              .map((er: { message: string }) => er.message)
              .join(", ");
          }
        } catch {
          // response wasn't JSON — keep the generic status message
        }
        setErrorDetail(detail);
        setStatus("error");
      }
    } catch (err) {
      setErrorDetail(
        err instanceof Error ? err.message : "Network error — request never reached Formspree"
      );
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-28">
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="eyebrow mb-3"
      >
        contact
      </motion.p>
      <h2 className="font-display text-3xl font-bold text-ink sm:text-4xl">
        Let&apos;s build something together
      </h2>
      <p className="mt-3 max-w-xl text-muted">
        Open to Software Development, Full-Stack, AI/ML, and Data Analyst internships
        and entry-level roles. My inbox is genuinely the fastest way to reach me.
      </p>

      <div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          <a
            href={"mailto:" + profile.email}
            data-cursor-hover
            className="glass flex items-center gap-3 rounded-xl p-4 text-ink transition-colors hover:border-accent/60"
          >
            <Mail className="h-5 w-5 text-accent2" /> {profile.email}
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor-hover
            className="glass flex items-center gap-3 rounded-xl p-4 text-ink transition-colors hover:border-accent/60"
          >
            <Github className="h-5 w-5 text-accent2" /> github.com/Manjari-2005
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor-hover
            className="glass flex items-center gap-3 rounded-xl p-4 text-ink transition-colors hover:border-accent/60"
          >
            <Linkedin className="h-5 w-5 text-accent2" /> linkedin.com/in/manjari-kamley
          </a>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="glass space-y-4 rounded-2xl p-6"
        >
          {/* Honeypot: invisible to humans, bots fill it in automatically.
              Formspree silently drops any submission where this is non-empty,
              so it never counts against your monthly quota. */}
          <input
            type="text"
            name="_gotcha"
            style={{ display: "none" }}
            tabIndex={-1}
            autoComplete="off"
          />

          <input
            required
            name="name"
            placeholder="Your name"
            className="w-full rounded-lg border border-border bg-surface2 px-4 py-3 text-sm text-ink placeholder:text-muted focus:border-accent focus:outline-none"
          />
          <input
            required
            type="email"
            name="email"
            placeholder="Email address"
            className="w-full rounded-lg border border-border bg-surface2 px-4 py-3 text-sm text-ink placeholder:text-muted focus:border-accent focus:outline-none"
          />
          <textarea
            required
            name="message"
            rows={4}
            placeholder="Message"
            className="w-full rounded-lg border border-border bg-surface2 px-4 py-3 text-sm text-ink placeholder:text-muted focus:border-accent focus:outline-none"
          />
          <button
            type="submit"
            disabled={status === "sending"}
            data-cursor-hover
            className="flex w-full items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 font-mono text-sm uppercase tracking-widest text-white shadow-glow transition-transform hover:-translate-y-0.5 disabled:opacity-60"
          >
            <Send className="h-4 w-4" />
            {status === "sending" && "Sending..."}
            {status === "sent" && "Sent - thank you!"}
            {status === "idle" && "Send Message"}
            {status === "error" && "Try again"}
          </button>
          {status === "error" && (
            <p className="text-center text-xs text-red-400">
              {errorDetail || "Something went wrong."} — please email me directly at{" "}
              {profile.email}.
            </p>
          )}
        </motion.form>
      </div>
    </section>
  );
}