# Deployment & custom domain

The site is a Next.js static export deployed to GitHub Pages by
[`.github/workflows/pages.yml`](.github/workflows/pages.yml) on every push to `main`.

## Two build modes

The build auto-detects where it will be served from:

| Mode | Served at | `basePath` | How to enable |
| --- | --- | --- | --- |
| Project page (default) | `https://<user>.github.io/iheallandingpage/` | `/iheallandingpage` | nothing — this is the default |
| Custom domain | `https://your-domain.com/` | _(none, root)_ | set the `CUSTOM_DOMAIN` repo variable |

The logic lives in [`biolab-japan-science-landing/next.config.ts`](biolab-japan-science-landing/next.config.ts):
when `CUSTOM_DOMAIN` is set, `basePath` / `assetPrefix` are dropped so assets load from the root.

## Switching to a custom domain

### 1. Set the repo variable
GitHub → repo **Settings → Secrets and variables → Actions → Variables → New variable**

```
Name:  CUSTOM_DOMAIN
Value: your-domain.com        # apex, no protocol, no trailing slash
```

On the next deploy the workflow will:
- build with no `basePath` (root-served), and
- write `out/CNAME` containing the domain (so GitHub Pages keeps the custom domain).

> Alternative: commit `biolab-japan-science-landing/public/CNAME` with the domain
> on a single line. The repo-variable approach is preferred so the domain isn't
> hardcoded and the project build still works without it.

### 2. Point DNS at GitHub Pages
At your domain registrar (Gabia, Cloudflare, GoDaddy, …):

**Apex domain** (`your-domain.com`) — four `A` records:
```
A   @   185.199.108.153
A   @   185.199.109.153
A   @   185.199.110.153
A   @   185.199.111.153
```
(Optionally add the matching `AAAA` records: `2606:50c0:8000::153`, `…8001::153`, `…8002::153`, `…8003::153`.)

**`www` or a subdomain** (`www.your-domain.com`) — a `CNAME` record:
```
CNAME   www   <user>.github.io.
```

### 3. Enable HTTPS
GitHub → repo **Settings → Pages** → set the custom domain → wait for the DNS
check to pass → tick **Enforce HTTPS** (certificate issuance can take a few minutes).

DNS propagation can take up to 24–48h, though it's usually much faster.

## Email (for the contact address / MX)

GitHub Pages does **not** handle email — the `A`/`CNAME` records above only serve
the website. To receive mail at `name@your-domain.com` you must add `MX` records
for a mail provider. Examples:

**Google Workspace**
```
MX   @   1    smtp.google.com.
```

**Naver Works**
```
MX   @   10   inbound1.worksmobile.com.
MX   @   20   inbound2.worksmobile.com.
```

`A`/`CNAME` (website) and `MX` (email) are independent and coexist on the same domain.

> The contact form itself is a static form with no backend — wiring it to a
> provider (Web3Forms / Formspree / EmailJS) is tracked separately. The MX setup
> above only enables the `mailto:` address to receive mail.
