Portfolio – XELPAXU

Modern, minimal, and performance-oriented personal portfolio showcasing projects, skills, and contact information. Built with React, Vite, and Tailwind CSS.

Features

Home

Top navigation with anchor links to key sections.

Tagline, social links, and a call-to-action button.

Projects

Interactive project cards with previews and GitHub links.

Hover animations and smooth transitions.

Contact

Simple, elegant section with email and social links.

Styling & UX

Tailwind CSS for scalable, utility-first styling.

Smooth hover animations and transitions.

Desktop-first design (mobile responsiveness coming soon).

Performance

Vite for instant builds and optimized production output.

Tech Stack

Build Tooling: Vite

UI/Styling: Tailwind CSS

Framework: React

Icons & UI: React Icons

Deployment: Vercel

Project Structure
.
├─ public/                 # Static assets (images, previews, favicon, etc.)
├─ src/
│  ├─ components/          # Reusable UI components
│  ├─ sections/            # Page sections (Home, Projects, Contact, etc.)
│  ├─ App.jsx              # Main app component
│  ├─ main.jsx             # React entry point
│  └─ index.css            # Global styles
├─ package.json
├─ tailwind.config.js
├─ vite.config.js
└─ dist/                   # Production build output

Prerequisites

Node.js 18+ (recommended)

Getting Started

Install dependencies:

npm install


Run in development:

npm run dev


Then open the local URL printed by Vite.

Build for production:

npm run build


Preview the production build locally:

npm run preview

Key Files to Explore

src/components/ – Reusable UI pieces (buttons, cards, etc.)

src/sections/ – Page sections such as Home, Projects, and Contact

src/App.jsx – Main application structure

tailwind.config.js – Tailwind configuration and theme customization

vite.config.js – Vite build settings
