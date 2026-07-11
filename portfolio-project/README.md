# Ishan Shukla — Developer Portfolio

A dark-themed, responsive developer portfolio built with React + Vite.

## Getting started

```bash
npm install
npm run dev
```

Open the printed local URL (usually `http://localhost:5173`) in your browser.

## Project structure

```
src/
  data/
    portfolioData.js   ← ALL editable content lives here: name, tagline,
                           projects, skills, experience, events, education,
                           social links, resume URL, email
  components/
    Nav.jsx
    Hero.jsx
    SignalField.jsx     ← animated hero background (canvas)
    About.jsx
    Projects.jsx
    ProjectCard.jsx
    ProjectVisual.jsx   ← abstract per-project visual (swap for real <img>)
    Skills.jsx
    Experience.jsx
    Events.jsx
    Education.jsx
    Contact.jsx
    Footer.jsx
    SectionEyebrow.jsx
  styles/
    index.css           ← all design tokens & styling (CSS variables at top)
  App.jsx                ← composes all sections
  main.jsx                ← React entry point
index.html                ← page title, meta description, SEO tags
```

## Before you deploy — edit `src/data/portfolioData.js`

- `PROFILE.resumeUrl` — link to your hosted resume PDF
- `PROFILE.email` — your real email
- `PROFILE.social.github` / `PROFILE.social.linkedin` — your real profile URLs
- Each project's `live` and `repo` URLs
- `EDUCATION.grad` — confirm your graduation year

## Build for production

```bash
npm run build
```

Outputs a static `dist/` folder ready to deploy anywhere (Netlify, Vercel, GitHub Pages).

## Deploying to Netlify

1. Push this project to a GitHub repository.
2. In Netlify: **New site from Git** → select the repo.
3. Build command: `npm run build` — Publish directory: `dist`.
4. Once live, connect your custom domain (e.g. from BigRock) under **Domain settings**.

## Contact form

The contact form currently opens a pre-filled `mailto:` link — no backend required.
To wire it to a real submission service instead, edit `handleSubmit` in
`src/components/Contact.jsx` and connect it to Netlify Forms, EmailJS, Formspree,
Firebase, or a custom Node.js/Express endpoint. The form markup won't need to change.

## Adding a project

Add a new object to the `PROJECTS` array in `src/data/portfolioData.js` with an
icon from `lucide-react` and a `glyph` value (`"signal"`, `"flow"`, `"grid"`, `"map"`,
or your own — extend `ProjectVisual.jsx` if you add a new glyph type).
