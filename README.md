# Tyres2Go - Premium Tyre & Auto Services Website

Modern, fully responsive React TypeScript website for Tyres2Go - Christchurch's trusted tyre and automotive service provider.

## 🎨 Brand Colors

- **Primary Red**: #E31E24
- **Primary Yellow**: #FDB913
- Red & Yellow gradients throughout

## ✨ Features

- **Modern Tech Stack**: React 19 + TypeScript + Vite
- **Responsive Design**: Mobile-first approach with Tailwind CSS v4
- **Smooth Animations**: Framer Motion for engaging user experience
- **SEO Ready**: React Helmet Async for meta tags
- **Fast Performance**: Optimized with Vite build tool
- **6 Locations**: Full coverage across Christchurch & Canterbury
- **MTA Certified**: Professional automotive services

## 📦 Tech Stack

- **Frontend**: React 18+ with TypeScript
- **Build Tool**: Vite 7
- **Styling**: Tailwind CSS
- **Routing**: React Router v6
- **Icons**: Lucide React
- **Forms**: React Hook Form
- **Linting**: ESLint with TypeScript support

## 🏗️ Project Structure

```
src/
├── components/
│   ├── common/          # Reusable UI components (Button, Card)
│   ├── layout/          # Layout components (Header, Footer)
│   ├── tyres/           # Tyre-specific components
│   └── auto/            # Auto service components
├── pages/               # Page components (Home, Tyres, AutoServices, etc.)
├── hooks/               # Custom React hooks
├── utils/               # Utility functions
├── types/               # TypeScript type definitions
└── assets/              # Images and static assets
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd tyres2gorevamp
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint to check code quality

## 📱 Pages

- **Home** (`/`) - Landing page with hero section and service overview
- **Tyres** (`/tyres`) - Browse and search tyre catalog
- **Auto Services** (`/auto-services`) - View available auto services
- **About** (`/about`) - Company information and team
- **Contact** (`/contact`) - Contact form and location information

## 🎨 Styling

The project uses Tailwind CSS with a custom configuration including:
- Custom color palette (primary and secondary colors)
- Custom utility classes for buttons, cards, and sections
- Responsive design breakpoints
- Custom font families (Poppins for headings, Inter for body)

## 🎯 Recent Updates

### Comprehensive Website Overhaul (January 2025)
- ✅ **Complete Content Integration**: Merged Tyres2Go and JT Automotive services
- ✅ **24+ Automotive Services**: Full JT Automotive service catalog with descriptions
- ✅ **12+ Tyre Services**: Complete tyre service offerings
- ✅ **6 Locations**: All Christchurch and Canterbury locations with full details
- ✅ **Enhanced Pages**: Home, About, Contact, Tyres, and Auto Services fully populated
- ✅ **Tyre Guidance**: "When to Replace Your Tyres" educational content
- ✅ **Company Values**: Merged values and "Why Choose Us" sections
- ✅ **Contact Integration**: Separate phone numbers for Tyres2Go and JT Automotive
- ✅ **MTA Certification**: Prominently displayed across all pages
- ✅ **Mobile Service**: 7-day availability highlighted throughout

See `IMPLEMENTATION_SUMMARY.md` for complete details.

## 📝 To Do

- [ ] Add Google Maps integration to Contact page
- [ ] Add real images and professional photography
- [ ] Add booking system functionality
- [ ] Integrate with backend API
- [ ] Add tyre search by vehicle registration
- [ ] Add online payment system
- [ ] Implement customer portal
- [ ] Add blog/news section

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is proprietary and confidential.

## 📞 Contact

### Tyres2Go
- Website: www.tyres2go.net.nz
- Email: info@tyres2go.net.nz
- Phone: 03 341 7675
- Services: Tyres, Wheel Alignment, Mobile Service

### JT Automotive
- Website: www.jtauto.co.nz
- Phone: 03 341 7674
- Email: jtautomotiveltd@yahoo.co.nz
- Services: WOF, Auto Repairs, Vehicle Servicing

### Main Location
477 Blenheim Road, Sockburn, Christchurch 8042  
Mon-Fri: 8am-5pm | Sat: 9am-3pm | Sun: Closed

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
