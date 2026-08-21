<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## Site edit workflow (owner preference)

Read and follow `DEV_WORKFLOW.md`.

- Default: put page changes under `/dev/...` first. Do not change live routes until the owner says publish / 퍼블리시 / 반영 / 배포.
- Register every open draft in `src/dev/registry.ts`.
- Keep `/dev` out of the main nav and out of the sitemap; robots already disallows it.

## Cursor Cloud specific instructions

- The app is nested in `biolab-japan-science-landing/` (not the repo root). Run all `npm` commands from that directory. The startup update script installs deps via `npm ci --prefix biolab-japan-science-landing`.
- Standard scripts live in `package.json`: `npm run dev` (dev server, Turbopack, http://localhost:3000), `npm run lint`, `npm run build`. Runs on Node 22 / npm.
- This is a fully static site (`next.config.ts` sets `output: "export"`) with no backend, database, or other local services — running the dev server is all that is needed to exercise the product.
- The contact form (`src/components/ContactForm.tsx`) posts directly to the external Web3Forms API and works with a bundled default access key; actual delivery requires outbound internet, but the UI/flow can be tested without extra config. No env vars are required to run locally.
- Known pre-existing UI quirk: the contact-form success message ("送信が完了しました。") renders as near-white text, so it can be hard to see against the light background even though submission succeeds.
