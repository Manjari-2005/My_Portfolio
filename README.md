# Manjari Kamley — Portfolio

Premium, interactive portfolio built with Next.js 14 (App Router), TypeScript,
Tailwind CSS, React Three Fiber, and Framer Motion.

## Stack
- **Next.js 14** (App Router) + TypeScript
- **Tailwind CSS** — design tokens in `tailwind.config.ts`
- **Three.js / @react-three/fiber / @react-three/drei** — hero 3D scene
- **Framer Motion** — page and scroll animations
- **lucide-react** — icons

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Project structure

```
app/            # App Router: layout, page, global styles
components/     # All UI sections (Hero, Projects, Skills, Contact, ...)
components/3d/  # React Three Fiber scene(s)
lib/data.ts     # All content (profile, projects, skills, timeline, etc.)
public/         # Résumé PDF + profile photo
```

## Editing content

Everything you'll want to change lives in **`lib/data.ts`** — projects, skills,
experience, certifications, achievements, and profile links. You don't need to
touch component code to update copy.

## Before you deploy — checklist

- [ ] `lib/data.ts` → replace placeholder `github` links (`LedgerShield`,
      `VoiceIQ`, `DevOps-IaC-Simulator`) with your actual repo URLs if the repo
      names differ.
- [ ] Add live demo URLs for LedgerShield (Render) and VoiceIQ (Vercel) once
      confirmed — only the Revenue Optimization Engine (Streamlit) link is
      verified right now.
- [ ] Swap `public/images/profile.jpg` for a higher-res version if you have one.
- [ ] Wire the contact form in `components/Contact.tsx` to a real backend
      (e.g. [Resend](https://resend.com), [Formspree](https://formspree.io), or
      a Next.js API route) — it's currently a static UI demo.
- [ ] Update `metadataBase` in `app/layout.tsx` once you have a real domain.
- [ ] Run `npm run build` and check the Lighthouse score before shipping.

## Deploying

The fastest path is [Vercel](https://vercel.com):

```bash
npm i -g vercel
vercel
```

Or push to GitHub and import the repo in the Vercel dashboard — zero config
needed for Next.js.

## Design tokens

| Token      | Value      | Use                          |
|------------|-----------|-------------------------------|
| `base`     | `#0B0F19` | Page background                |
| `accent`   | `#7C3AED` | Primary CTA / highlight color  |
| `cyan`     | `#06B6D4` | Secondary accent               |
| `signal`   | `#34D399` | "Online / open to work" status |

Fonts: **Sora** (display), **Inter** (body), **JetBrains Mono** (terminal /
eyebrow labels) — all loaded via `next/font/google` in `app/layout.tsx`.
