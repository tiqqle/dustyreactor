# Dusty Reactor

Studio landing page for [dustyreactor.com](https://dustyreactor.com) — a chill development shop building games, tools, and services.

## Local development

```bash
npm install
node scripts/prepare-images.mjs   # crop & optimize concept art into public/images/
npm run dev                       # http://localhost:4321
```

## Build

```bash
node scripts/prepare-images.mjs
npm run build
npm run preview
```

## Deploy to GitHub Pages

1. Create a GitHub repo and push this project:

   ```bash
   git remote add origin git@github.com:tiqqle/dustyreactor.git
   git push -u origin main
   ```

2. In the repo, go to **Settings → Pages → Build and deployment** and set source to **GitHub Actions**.

3. The workflow in `.github/workflows/deploy.yml` builds and deploys on every push to `main`.

4. Add custom domain **dustyreactor.com** under **Settings → Pages → Custom domain**. The `public/CNAME` file is already included.

5. Configure DNS at your registrar:

   | Type  | Name | Value |
   |-------|------|-------|
   | A     | `@`  | `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153` |
   | CNAME | `www` | `tiqqle.github.io` |

6. Wait for DNS propagation and HTTPS (usually under an hour).

## Configuration

- **Discord invite:** edit `DISCORD_INVITE_URL` in [`src/config.ts`](src/config.ts)
- **Projects & copy:** edit the same file
- **Concept art originals:** kept in [`conceptart/`](conceptart/); run `node scripts/prepare-images.mjs` after updating them

## Project structure

```
src/
  components/   # Nav, Hero, Projects, etc.
  config.ts     # Site copy, Discord URL, project list
  layouts/      # Base HTML shell + meta tags
  pages/        # index.astro (single page)
  styles/       # Global CSS + brand palette
public/
  images/       # Generated WebP assets (gitignored — built in CI)
conceptart/     # Source art (not processed automatically)
scripts/
  prepare-images.mjs
```
