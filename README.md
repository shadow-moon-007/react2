# GBS Workspace POC

A frontend-only React 19, TypeScript and Vite prototype for the GBS department intranet.

## Getting started

```sh
npm install
npm run dev
```

## Project layout

```text
src/
  components/
    organization/  Reusable GBS organization cards and people rows
    ui/            Shared interface primitives (avatar, badge, headers)
  data/            GBS dummy data used by the mock service layer
  pages/           Route-level page components
  services/        Async mock services and authentication abstraction
  App.tsx          Application shell and route table
  styles.css       Global styles and design tokens
  types.ts         Shared TypeScript models
  main.tsx         React entry point
```

The service methods in `src/services/api.ts` are the UI's data boundary. Replace their implementations with backend API calls when the separate service is available; keep the page and component layer independent of seed data.

This POC uses mock authentication and in-memory data. It has no backend or persistence.

## Scripts

- `npm run dev` — start the local Vite server
- `npm run build` — type-check and create a production build
- `npm run preview` — serve the production build locally
