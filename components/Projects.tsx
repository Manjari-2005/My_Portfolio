"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink, Star } from "lucide-react";
import { projects, type Domain } from "@/lib/data";

const FILTERS: (Domain | "All")[] = ["All", "Full-Stack", "AI/ML", "Data Analytics", "DevOps & Cloud"];

function ProjectCard({ project, index }: { project: (typeof projects)[number]; index: number }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.35, delay: index * 0.04 }}
      whileHover={{ y: -8, rotateX: 2, rotateY: -2 }}
      style={{ transformPerspective: 800 }}
      className="glass group relative flex flex-col overflow-hidden rounded-2xl border border-border p-6 transition-colors hover:border-accent/60"
    >
      {project.featured && (
        <span className="absolute right-5 top-5 flex items-center gap-1 rounded-full bg-accent/15 px-2.5 py-1 font-mono text-[0.65rem] uppercase tracking-widest text-accent2">
          <Star className="h-3 w-3 fill-accent2" /> featured
        </span>
      )}

      {project.hackathon && (
        <p className="font-mono text-[0.65rem] uppercase tracking-widest text-signal">
          {project.hackathon}
        </p>
      )}

      <h3 className="mt-2 font-display text-xl font-bold text-ink">{project.title}</h3>
      <p className="mt-1 text-sm font-medium text-accent2">{project.subtitle}</p>
      <p className="mt-3 text-sm leading-relaxed text-muted">{project.description}</p>

      <ul className="mt-4 space-y-1.5">
        {project.bullets.map((b) => (
          <li key={b} className="flex gap-2 text-xs leading-relaxed text-muted">
            <span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-cyan" />
            {b}
          </li>
        ))}
      </ul>

      <div className="mt-4 flex flex-wrap gap-1.5">
        {project.tech.map((t) => (
          <span
            key={t}
            className="rounded-md border border-border bg-surface2 px-2 py-0.5 font-mono text-[0.65rem] text-muted"
          >
            {t}
          </span>
        ))}
      </div>

      <div className="mt-5 flex gap-3 border-t border-border pt-4">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor-hover
            className="flex items-center gap-1.5 font-mono text-xs text-ink transition-colors hover:text-accent2"
          >
            <Github className="h-4 w-4" /> Code
          </a>
        )}
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor-hover
            className="flex items-center gap-1.5 font-mono text-xs text-ink transition-colors hover:text-cyan"
          >
            <ExternalLink className="h-4 w-4" /> Live Demo
          </a>
        )}
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>("All");

  const filtered = useMemo(
    () =>
      filter === "All"
        ? projects
        : projects.filter((p) => p.domains.includes(filter as Domain)),
    [filter]
  );

  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-28">
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="eyebrow mb-3"
      >
        projects
      </motion.p>
      <h2 className="font-display text-3xl font-bold text-ink sm:text-4xl">
        Selected work
      </h2>
      <p className="mt-3 max-w-xl text-muted">
        A mix of full-stack apps, ML models, and infrastructure — each one built, and
        most deployed or demoed live.
      </p>

      <div className="mt-8 flex flex-wrap gap-2">
        {FILTERS.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            data-cursor-hover
            className={`rounded-full border px-4 py-1.5 font-mono text-xs uppercase tracking-widest transition-colors ${
              filter === f
                ? "border-accent bg-accent/15 text-accent2"
                : "border-border text-muted hover:border-accent/50 hover:text-ink"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <motion.div layout className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
        <AnimatePresence mode="popLayout">
          {filtered.map((p, i) => (
            <ProjectCard key={p.slug} project={p} index={i} />
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
