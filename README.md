# Soto Grande Baguio Hotel — Frontend Portfolio

A responsive hotel discovery and reservation interface built during OJT. It presents Soto Grande Baguio's rooms, facilities, gallery, location, reviews, and a complete booking flow using local mock data.

> Portfolio scope: this is a frontend-only demonstration. It has no backend, database, authentication, payment gateway, or live email submission. Reservation and contact actions show in-browser mock feedback only; no personal information is sent or stored.

## Highlights

- Responsive React single-page application with client-side routing
- Room and facility discovery, image carousels, mock availability, and booking summary screens
- Contact and booking form validation with demo-only success states
- Centralized theme tokens for color, typography, elevation, and focus states
- Accessible improvements: semantic buttons, meaningful image labels, keyboard-visible focus, and corrected React DOM attributes
- Repository hygiene through a scoped `.gitignore` and removal of unused prototype components

## Stack

- React 18 with Vite
- React Router
- React Bootstrap, Bootstrap, and Material UI
- Swiper for galleries
- Sass for component and screen styles

## Run locally

```bash
npm install
npm start
```

Open [http://localhost:3000](http://localhost:3000). The preview command serves the production build at [http://localhost:4173](http://localhost:4173).

## Production check

```bash
npm run build
npm run serve
```

## Project structure

```text
src/
  components/  # reusable interface pieces
  contexts/    # static mock content used by the frontend
  images/      # local visual assets
  screens/     # routed application pages
  styles/      # shared design tokens and global theme
```

## Theme maintenance

Edit [`src/styles/theme.css`](src/styles/theme.css) to change the portfolio's palette or type scale. Use the `--color-*` and `--font-size-*` variables in component Sass instead of introducing literal color or font-size values.

## Notes for future backend work

When a backend is introduced, replace only the mock data modules and submission handlers with API calls. Keep credentials in local `.env` files (which are ignored) and expose only non-secret, client-safe environment values.
