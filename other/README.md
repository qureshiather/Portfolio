# Ather Qureshi — Portfolio

Next.js portfolio site with a **code-generated one-page resume PDF**.

## Edit your resume

All reusable content lives in:

```
other/resume.ts
```

Then regenerate the PDF:

```bash
npm run generate:resume
```

This writes `public/atherqureshi_resume.pdf` (served by the site) and mirrors it to `other/`. Keep `other/resume.ts` concise — the PDF is intentionally **one page**.

`npm run build` also regenerates the resume first (`prebuild`).

## Develop

```bash
npm install
npm run generate:resume
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploy (Vercel)

1. Push this repo to GitHub
2. Import the project in [Vercel](https://vercel.com/new)
3. Deploy — no special config required

Optional: set your custom domain (e.g. `atherqureshi.com`) in the Vercel project settings.
