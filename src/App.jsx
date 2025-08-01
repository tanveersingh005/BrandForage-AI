import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Testimonials from './components/Testimonials'
import Pricing from './components/Pricing'
import PricingCalculator from './components/PricingCalculator'
import DemoVideo from './components/DemoVideo'
import BlogResources from './components/BlogResources'
import FAQ from './components/FAQ'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'
import AIAdGenerator from './pages/AIAdGenerator'
import SmartCopywriting from './pages/SmartCopywriting'
import CampaignOptimization from './pages/CampaignOptimization'
import BrandIntelligence from './pages/BrandIntelligence'
import AnalyticsDashboard from './pages/AnalyticsDashboard'
import TeamCollaboration from './pages/TeamCollaboration'

function HomePage() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Features />
      <Testimonials />
      <Pricing />
      <PricingCalculator />
      <DemoVideo />
      <BlogResources />
      <FAQ />
      <ContactForm />
      <Footer />
    </div>
  )
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/ai-ad-generator" element={<AIAdGenerator />} />
        <Route path="/smart-copywriting" element={<SmartCopywriting />} />
        <Route path="/campaign-optimization" element={<CampaignOptimization />} />
        <Route path="/brand-intelligence" element={<BrandIntelligence />} />
        <Route path="/analytics-dashboard" element={<AnalyticsDashboard />} />
        <Route path="/team-collaboration" element={<TeamCollaboration />} />
      </Routes>
    </Router>
  )
}

export default App 