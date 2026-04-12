# Little Lemon — Meta Front-End Developer Capstone Project

This repository contains the Little Lemon restaurant landing page and reservation flow built as part of the Meta Front-End Developer Capstone course on Coursera.

The app is built with Next.js, React, TypeScript, and Tailwind CSS.

## Features

- Responsive landing page with sections for About, Menu, Testimonials, and Contact
- Reservation page with a client-side validated booking form
- Open Graph metadata for social sharing and mobile-friendly viewport support
- Accessible form feedback and validation states
- Unit tests for validation logic and form behavior

## Getting Started

### Install dependencies

```bash
npm install
```

### Run locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for production

```bash
npm run build
```

### Run tests

```bash
npm test
```

### Run tests in watch mode

```bash
npm run test:watch
```

## Project Structure

- `app/` — Next.js routes and pages
- `app/components/` — reusable UI components
- `app/components/ReservationForm.utils.ts` — shared form validation helper
- `app/components/ReservationForm.test.tsx` — unit tests for the reservation form
- `vitest.config.ts` — test runner configuration
- `test/setup.ts` — test setup for jest-dom matchers

## Notes

This project follows the requirements of the Meta Front-End Developer Capstone course and includes responsive styling, SEO-friendly metadata, and client-side form validation.
