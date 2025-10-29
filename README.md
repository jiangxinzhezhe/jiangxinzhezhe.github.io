# jiangxinzhezhe.github.io

React + TypeScript + Vite + React Router.  
GitHub Pages SPA fallback is handled by `scripts/postbuild-spa-404.js`.

## Run
```bash
npm install
npm run dev
```

## Build
```bash
npm run build
```

## Deploy
Push to `main`. GitHub Actions (`.github/workflows/deploy.yml`) will publish `dist` to Pages.
