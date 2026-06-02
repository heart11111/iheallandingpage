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

## Contact form inbox

The on-site inquiry form can work **without** a `@your-domain.com` mailbox.
Use Web3Forms with any inbox that should receive form submissions:

1. Create a Web3Forms access key with the recipient inbox.
2. GitHub → repository **Settings → Secrets and variables → Actions → Variables**.
3. Add:
   ```
   WEB3FORMS_ACCESS_KEY = your Web3Forms access key
   ```
4. Re-run the Pages workflow or push to `main`.

If you want the disabled/unconfigured form message to point to a real address,
also set:

```
NEXT_PUBLIC_CONTACT_FALLBACK_EMAIL = your@email.com
```

## Domain email / MX records

GitHub Pages does **not** handle domain email — the `A`/`CNAME` records above
only serve the website. To receive mail at `name@your-domain.com`, add `MX`
records for a mail provider. Examples:

**Google Workspace**
```
MX   @   1    smtp.google.com.
```

**Naver Works**
```
MX   @   10   inbound1.worksmobile.com.
MX   @   20   inbound2.worksmobile.com.
```

`A`/`CNAME` (website) and `MX` (email) are independent and coexist on the same
domain. The Web3Forms contact form can send to an ordinary inbox first, then be
switched to a domain mailbox later by issuing a new key.
