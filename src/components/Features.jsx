import React from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import { Button } from './ui/button'
import { features } from '../data/features'

const Features = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  }

  const featureImages = [
    // AI Ad Generator
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop&crop=center&auto=format&q=80",
    // Smart Copywriting
    "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=300&fit=crop&crop=center&auto=format&q=80",
    // Campaign Optimization
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop&crop=center&auto=format&q=80",
    // Brand Intelligence
    "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop&crop=center&auto=format&q=80",
    // Analytics Dashboard - NEW IMAGE
    "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=300&fit=crop&crop=center&auto=format&q=80",
    // Team Collaboration - NEW IMAGE
    "https://images.unsplash.com/photo-1503676382389-4809596d5290?w=400&h=300&fit=crop&crop=center&auto=format&q=80"
  ]

  return (
    <section id="features" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Forge Your Brand with AI
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Everything you need to create, optimize, and scale your marketing campaigns with artificial intelligence.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={cardVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="h-full overflow-hidden group cursor-pointer glass dark:glass-dark border-gray-200/20 dark:border-gray-700/20 hover:shadow-modern hover:border-primary/30 transition-all duration-300 flex flex-col">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={featureImages[index]}
                    alt={feature.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute top-4 left-4 w-12 h-12 bg-white/90 rounded-lg flex items-center justify-center shadow-lg">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-all duration-300"></div>
                </div>
                <div className="flex flex-col flex-1">
                  <CardHeader className="pb-4 flex-1">
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                    <CardDescription className="text-gray-600 dark:text-gray-400">
                      {feature.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="mt-auto">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="w-full group hover:bg-primary hover:text-white transition-all duration-200 border-primary/20 hover:border-primary animate-pulse-slow"
                                          onClick={() => {
                      if (feature.title === "AI Ad Generator") {
                        window.location.href = '/ai-ad-generator';
                      } else if (feature.title === "Smart Copywriting") {
                        window.location.href = '/smart-copywriting';
                      } else if (feature.title === "Campaign Optimization") {
                        window.location.href = '/campaign-optimization';
                      } else if (feature.title === "Brand Intelligence") {
                        window.location.href = '/brand-intelligence';
                      } else if (feature.title === "Analytics Dashboard") {
                        window.location.href = '/analytics-dashboard';
                      } else if (feature.title === "Team Collaboration") {
                        window.location.href = '/team-collaboration';
                      } else {
                        document.getElementById('demo-video').scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    >
                      Learn More
                      <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Button>
                  </CardContent>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="glass dark:glass-dark rounded-2xl shadow-modern p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Ready to forge your brand with AI?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Join thousands of marketers already using BrandForge AI to create stunning ads and optimize campaigns.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-primary text-white px-8 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors" onClick={() => document.getElementById('pricing').scrollIntoView({ behavior: 'smooth' })}>
                Start Free Trial
              </button>
              <button className="border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-8 py-3 rounded-lg font-medium hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors" onClick={() => document.getElementById('demo-video').scrollIntoView({ behavior: 'smooth' })}>
                Schedule Demo
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Features 