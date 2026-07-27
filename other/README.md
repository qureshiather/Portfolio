# Resume content

Edit [`resume.ts`](./resume.ts) — that file is the source of truth for the portfolio and the PDF.

The site generates the PDF **on demand** at [`/api/resume`](../src/app/api/resume/route.tsx) (Download resume in the UI).

Optional local file export:

```bash
npm run generate:resume
```

Keep `resume.ts` concise — the PDF is intentionally **one page**.
