# BrandForge AI – Modern SaaS Landing Page

A stunning, interactive, and responsive SaaS landing page for **BrandForge AI** – an AI-powered marketing tool. Built with React.js, Tailwind CSS, shadcn/ui, Framer Motion, and React Router DOM, featuring modern 2025 design trends, glassmorphism, and a full component system.

---

## 🚀 Features

- **Modern 2025 Design**: Glassmorphism, gradients, and premium visual hierarchy
- **Responsive**: Mobile-first, flawless on all devices
- **Interactive Animations**: Framer Motion for smooth entrance, hover, and micro-interactions
- **Theme Toggle**: Light/dark mode with persistent preference
- **Dedicated Feature Pages**: Each main feature has its own animated page (React Router DOM)
- **Bonus Sections**: Interactive Pricing Calculator, Demo Video, Blog/Resources
- **Component Library**: 8+ reusable components (Button, Card, Modal, Switch, Accordion, Input, Badge, Alert, Separator, Slider, Loading)
- **Form Handling**: Contact form with validation and loading states
- **Performance Optimized**: Lazy loading, optimized images, and fast UX
- **Accessible**: Focus management, keyboard navigation, and ARIA best practices

---

## 🛠️ Tech Stack

- **React.js** – Frontend framework
- **Tailwind CSS** – Utility-first CSS framework
- **shadcn/ui** – High-quality React components
- **Framer Motion** – Animation library
- **React Router DOM** – Client-side routing
- **Lucide React** – Icon library
- **Google Fonts (Inter)** – Modern, readable typography

---

## 📁 Project Structure

```
src/
├── components/
│   ├── ui/           # shadcn/ui components (Button, Card, Modal, etc.)
│   ├── Navbar.jsx    # Navigation bar with theme toggle
│   ├── Hero.jsx      # Hero section
│   ├── Features.jsx  # Features grid (links to feature pages)
│   ├── Pricing.jsx   # Pricing cards
│   ├── PricingCalculator.jsx # Interactive pricing calculator
│   ├── Testimonials.jsx # Testimonials grid
│   ├── DemoVideo.jsx # Product demo video section
│   ├── BlogResources.jsx # Blog/resources section
│   ├── FAQ.jsx       # FAQ accordion
│   ├── ContactForm.jsx # Contact form with validation
│   └── Footer.jsx    # Footer with links and newsletter
├── pages/            # Dedicated feature pages
│   ├── AIAdGenerator.jsx
│   ├── SmartCopywriting.jsx
│   ├── CampaignOptimization.jsx
│   ├── BrandIntelligence.jsx
│   ├── AnalyticsDashboard.jsx
│   └── TeamCollaboration.jsx
├── data/             # Dummy data files
│   ├── features.js
│   ├── pricing.js
│   ├── testimonials.js
│   └── faq.js
├── lib/
│   └── utils.js      # Utility functions
├── App.jsx           # Main app with routing
├── index.js          # Entry point
└── index.css         # Global styles, Tailwind, shadcn/ui variables
```

---

## 🌟 Main Features & Sections

### Hero Section
- Compelling headline, subtext, animated CTAs, and hero image/mock dashboard

### Features Section
- 6+ AI marketing features, each with icon, image, and "Learn More" button
- Features:
  - **AI Ad Generator**: Create stunning ads in seconds with AI
  - **Smart Copywriting**: Generate persuasive copy for all channels
  - **Campaign Optimization**: AI-driven insights and A/B testing
  - **Brand Intelligence**: Track mentions, sentiment, and competitors
  - **Analytics Dashboard**: Real-time analytics and custom reports
  - **Team Collaboration**: Shared workspaces and role-based permissions
- Each feature links to a dedicated animated page

### Pricing Section
- 3 pricing tiers (Starter, Professional, Enterprise) in Indian Rupees (₹)
- Monthly/yearly toggle, animated price transitions

### Interactive Pricing Calculator
- Customize plan by team size and storage, see real-time price updates
- Plan comparison, savings info, and quick stats

### Testimonials
- Customer reviews with avatars, names, roles, and ratings

### Demo Video
- Embedded YouTube demo with chapter navigation

### Blog & Resources
- 6+ articles, category filter, and modern card layout

### FAQ
- Collapsible accordion with common questions and answers

### Contact Form
- Validated form with loading and success states

### Footer
- Company info, product/support/legal links, social icons, and newsletter signup

---

## 🎨 Design System

- **Color Palette**: Blue/purple gradients, glassmorphism, dark/light mode
- **Typography**: Inter font, clear hierarchy, modern weights
- **Icons**: Lucide React, minimal line icons
- **Glassmorphism**: Backdrop blur, frosted glass cards and nav
- **Animations**: Entrance, hover, floating, and scroll-triggered

---

## 📝 Example Data

### Features
- See `src/data/features.js` for full list and descriptions

### Pricing
- See `src/data/pricing.js` for monthly/yearly plans and features

### Testimonials
- See `src/data/testimonials.js` for customer reviews

### FAQ
- See `src/data/faq.js` for common questions

---

## 🚦 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```
2. **Start the development server:**
   ```bash
   npm start
   ```
3. **Open your browser:**
   Navigate to `http://localhost:3000`

---

## 📦 Available Scripts

- `npm start` – Start development server
- `npm run build` – Build for production
- `npm test` – Run tests
- `npm eject` – Eject from Create React App

---

## 🔧 Customization

- **Colors**: Edit Tailwind and shadcn/ui variables in `src/index.css`
- **Content**: Update data files in `src/data/` for features, pricing, testimonials, FAQ
- **Images**: Place your own images in `src/assets/` and import as needed
- **Animations**: Adjust Framer Motion settings in each component

---

## 📱 Responsive Breakpoints
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

---

## 🔮 Bonus Features
- **Interactive Pricing Calculator**
- **Demo Video/Animation**
- **Blog/Resources Section**
- **Advanced Animations (Framer Motion)**
- **Theme Toggle (Light/Dark Mode)**
- **Dedicated Feature Pages (React Router DOM)**

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

---

Built with ❤️ using React, Tailwind CSS, shadcn/ui, and Framer Motion for BrandForge AI 