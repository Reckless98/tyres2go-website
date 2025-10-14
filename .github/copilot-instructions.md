# Tyres2Go - Comprehensive Auto & Tyre Services Website

## Project Overview
This is a modern React TypeScript website for Tyres2Go, providing:
- **Tyre Sales & Services** - Full range of tyre brands and services
- **Automotive Repairs** - Complete mechanical and electrical services (formerly JT Auto, now merged)

## Technology Stack
- **Frontend Framework**: React 18+
- **Language**: TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Routing**: React Router v6
- **State Management**: React Context API / Zustand (if needed)
- **Forms**: React Hook Form
- **UI Components**: Headless UI / Radix UI
- **Icons**: React Icons or Lucide React

## Project Structure
```
src/
├── components/          # Reusable UI components
│   ├── common/         # Shared components (Button, Card, etc.)
│   ├── layout/         # Layout components (Header, Footer, Sidebar)
│   ├── tyres/          # Tyre-specific components
│   └── auto/           # Auto service-specific components
├── pages/              # Page components
│   ├── Home.tsx
│   ├── Tyres.tsx
│   ├── AutoServices.tsx
│   ├── About.tsx
│   └── Contact.tsx
├── hooks/              # Custom React hooks
├── utils/              # Utility functions
├── types/              # TypeScript type definitions
├── styles/             # Global styles and Tailwind config
├── assets/             # Images, fonts, etc.
└── App.tsx            # Main app component
```

## Development Guidelines
- Use functional components with TypeScript
- Follow React best practices and hooks patterns
- Implement responsive design mobile-first
- Use Tailwind CSS utility classes for styling
- Keep components small and focused
- Use proper TypeScript typing throughout
- Implement proper error handling
- Follow accessibility best practices (WCAG 2.1)

## Features to Implement
- [ ] Homepage with hero section showcasing both services
- [ ] Tyre search and catalog
- [ ] Auto service booking system
- [ ] Contact forms
- [ ] Responsive navigation
- [ ] Service location information
- [ ] Testimonials/Reviews section
- [ ] Mobile-friendly design

## Code Style
- Use ES6+ features
- Prefer arrow functions
- Use destructuring where appropriate
- Follow consistent naming conventions (camelCase for variables, PascalCase for components)
- Add JSDoc comments for complex functions
