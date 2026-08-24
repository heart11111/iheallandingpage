<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## Site edit workflow (owner preference)

Read and follow `DEV_WORKFLOW.md`.

- Default: put page changes under `/dev/...` first. Do not change live routes until the owner says publish / 퍼블리시 / 반영 / 배포.
- Register every open draft in `src/dev/registry.ts`.
- Keep `/dev` out of the main nav and out of the sitemap; robots already disallows it.
