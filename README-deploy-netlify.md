Netlify deployment guide for this Vite + React portfolio

Summary
-------
This project builds with Vite and outputs static files into `dist/`. Netlify should run `npm run build` and publish the `dist` folder.

Important: This repository uses a local `.env` file (ignored by Git) for development. Do NOT commit secrets. On Netlify you must add the same environment variables to the Site > Settings > Build & deploy > Environment > Environment variables (or use Netlify CLI).

Required environment variables (client-side, must start with VITE_):
- VITE_EMAILJS_SERVICE_ID
- VITE_EMAILJS_TEMPLATE_ID
- VITE_EMAILJS_PUBLIC_KEY

Steps (Netlify UI)
------------------
1. Sign in to https://app.netlify.com and create a new site from Git.
2. Connect your Git provider and pick the repository.
3. In the "Build settings" set the Build command to `npm run build` and the Publish directory to `dist`.
4. Go to Site settings → Build & deploy → Environment → Environment variables and add the three variables above with their values from EmailJS.
5. Trigger a deploy (Netlify will automatically build on push). After a successful build your site will be available on the Netlify URL.

Steps (Netlify CLI - PowerShell)
-------------------------------
1. Install the Netlify CLI (if you don't have it):

```powershell
npm install -g netlify-cli
```

2. Login and link your repo to a Netlify site (from the repo root):

```powershell
netlify login
netlify init
# or if the site already exists:
# netlify link
```

3. Set environment variables via CLI (replace placeholders):

```powershell
netlify env:set VITE_EMAILJS_SERVICE_ID "your_service_id_here"
netlify env:set VITE_EMAILJS_TEMPLATE_ID "your_template_id_here"
netlify env:set VITE_EMAILJS_PUBLIC_KEY "your_public_key_here"
```

4. Deploy (production):

```powershell
npm run build
netlify deploy --prod --dir=dist
```

Notes & troubleshooting
-----------------------
- The `.env` file in your repo is ignored by Git. Netlify does not read your local `.env` file during builds triggered by Git—add the variables in the Netlify site settings or CLI instead.
- Because EmailJS uses a public key for client-side use, it's safe to expose the public key as `VITE_EMAILJS_PUBLIC_KEY`. Never store private server-side secrets in `VITE_` variables.
- If routing returns 404s for client-side routes, enable an SPA redirect in `netlify.toml` (the file includes a commented example).
- If you need a custom Node version, set it in Netlify UI under "Build & deploy → Environment → Environment variables" or in `netlify.toml` (already includes NODE_VERSION = "18").

If you want, I can also:
- Add a GitHub Action or script to automatically push and trigger Netlify builds.
- Generate the exact Netlify CLI commands for your current EmailJS values (if you paste them here).

