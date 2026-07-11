import { profile } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-border px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 text-center font-mono text-xs text-muted sm:flex-row sm:text-left">
        <p>
          {profile.name} <span className="text-accent">.</span>
        </p>
        <p>© {new Date().getFullYear()} · Built with Next.js, Tailwind & React Three Fiber</p>
      </div>
    </footer>
  );
}
