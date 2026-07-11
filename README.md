# Manjari Kamley — Portfolio

Live at **[sunny-profiterole-445e0b.netlify.app](https://sunny-profiterole-445e0b.netlify.app/)**

A premium, interactive developer portfolio built with Next.js 14 (App Router),
TypeScript, Tailwind CSS, React Three Fiber, and Framer Motion — showcasing
full-stack, AI/ML, and DevOps projects.

## Stack

- **Next.js 14** (App Router) + TypeScript
- **Tailwind CSS** — design tokens in `tailwind.config.ts`
- **Three.js / @react-three/fiber / @react-three/drei** — hero 3D scene
- **Framer Motion** — page and scroll animations
- **lucide-react** — icons
- **Formspree** — contact form backend (no server code needed)

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

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
touch component code to update copy. Each project entry's `github` field must
point to the *exact* repo URL (not your profile page) — double-check this
whenever you add a new project, since a wrong slug silently 404s.

## Contact form

`components/Contact.tsx` submits to a [Formspree](https://formspree.io)
endpoint via `fetch`. To reuse this for another form:

1. Create a new form at [formspree.io](https://formspree.io) and copy its ID.
2. Replace `FORMSPREE_ENDPOINT` in `components/Contact.tsx`.
3. Submit the form once after deploying — Formspree emails a one-time
   confirmation link to activate the form. Submissions before that click are
   silently dropped even though the UI shows "Sent."

## Deploying

This project auto-deploys to **Netlify** on every push to `main`:

```bash
git add .
git commit -m "update content"
git push
```

Netlify picks up the push, rebuilds, and redeploys automatically — usually
within 1–2 minutes. Check build status and logs in the Netlify dashboard
under **Deploys**.

To deploy your own copy from scratch:

- Push the repo to GitHub.
- In Netlify: **Add new site → Import an existing project → GitHub** → select
  the repo. Build command `next build`, publish directory `.next` (Netlify's
  Next.js runtime handles the rest automatically).

## Live project demos referenced in this portfolio

| Project | Code | Live demo |
|---|---|---|
| LedgerShield | [GitHub](https://github.com/Manjari-2005/Ledgershield-Digital-cctv) | [Render](https://ledgershield-digital-cctv.onrender.com/) |
| VoiceIQ | [GitHub](https://github.com/Manjari-2005/VoiceAI) | [Vercel](https://voice-ai-beta-ten.vercel.app/) |
| Revenue Optimization Engine | [GitHub](https://github.com/Manjari-2005/Revenue-Optimization-Engine) | [Streamlit](https://revenue-optimization-engine-kynwq2pzgb2zhvfd42qtmh.streamlit.app/) |
| Spam Email Classifier | [GitHub](https://github.com/Manjari-2005/Spam-Email-Classifier) | — |
| Customer Churn Prediction | [GitHub](https://github.com/Manjari-2005/Customer-Churn-Prediction) | — |
| DevOps-IaC-Simulator | [GitHub](https://github.com/Manjari-2005/DevOps-IaC-Simulator) | — |
| TravelBuddy | [GitHub](https://github.com/Manjari-2005/TravelBuddy) | — |

> Note: LedgerShield runs on Render's free tier, which spins down after ~15
> minutes of inactivity — the first load after idle time can take 30–50s to
> wake up. This is expected, not a bug.

## Design tokens

| Token      | Value      | Use                          |
|------------|-----------|-------------------------------|
| `base`     | `#0B0F19` | Page background                |
| `accent`   | `#7C3AED` | Primary CTA / highlight color  |
| `cyan`     | `#06B6D4` | Secondary accent               |
| `signal`   | `#34D399` | "Online / open to work" status |

Fonts: **Sora** (display), **Inter** (body), **JetBrains Mono** (terminal /
eyebrow labels) — all loaded via `next/font/google` in `app/layout.tsx`.

## Maintenance checklist

- [ ] Keep `lib/data.ts` `github` links pointing at exact repo slugs whenever
      a project is renamed or added.
- [ ] Update `metadataBase` in `app/layout.tsx` if the domain ever changes
      from the current Netlify URL.
- [ ] Re-run `npm run build` locally before pushing large changes, to catch
      TypeScript/build errors before Netlify does.