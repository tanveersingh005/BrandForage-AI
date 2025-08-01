import React from 'react'
import { motion } from 'framer-motion'
import { Button } from '../components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card'
import { ArrowRight, PenTool, Zap, Target, BarChart3, Play, Check } from 'lucide-react'
import { Link } from 'react-router-dom'
import ThemeToggle from '../components/ThemeToggle'

const SmartCopywriting = () => {
  const features = [
    {
      icon: PenTool,
      title: "AI-Powered Writing",
      description: "Generate compelling copy that resonates with your target audience using advanced natural language processing."
    },
    {
      icon: Zap,
      title: "Instant Generation",
      description: "Create ad copy, social media posts, and marketing content in seconds with just a few keywords."
    },
    {
      icon: Target,
      title: "Brand Voice Consistency",
      description: "Maintain your unique brand voice across all content with AI that learns your style and tone."
    },
    {
      icon: BarChart3,
      title: "Performance Optimization",
      description: "Get AI-powered suggestions to improve conversion rates and engagement metrics."
    }
  ]

  const benefits = [
    "Save 90% of writing time",
    "Generate unlimited copy variations",
    "Professional-quality content",
    "Brand-consistent messaging",
    "Multi-platform optimization",
    "Real-time performance tracking"
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950">
      {/* Navigation */}
      <motion.nav 
        className="fixed top-0 left-0 right-0 z-50 glass dark:glass-dark border-b border-gray-200/20 dark:border-gray-700/20 shadow-glass"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="text-2xl font-bold text-primary dark:text-white no-underline">
              BrandForge AI
            </Link>
            <div className="flex items-center space-x-4">
              <ThemeToggle />
              <Link to="/" className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-emerald-400 px-3 py-2 rounded-md text-sm font-medium transition-colors no-underline">
                Back to Home
              </Link>
              <Button size="sm" onClick={() => document.getElementById('pricing').scrollIntoView({ behavior: 'smooth' })}>
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left"
            >
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white leading-tight mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600">
                  Smart Copywriting
                </span>
                <br />
                <span>Write Compelling Content with AI</span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0">
                Transform your content creation with AI-powered copywriting. Generate persuasive ad copy, social media posts, and marketing content that converts.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button size="lg" className="group" onClick={() => document.getElementById('demo').scrollIntoView({ behavior: 'smooth' })}>
                  Try Smart Copywriting
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="outline" size="lg" className="group">
                  <Play className="mr-2 h-4 w-4" />
                  Watch Demo
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8">
                <div className="aspect-video bg-gradient-to-br from-green-100 to-blue-100 dark:from-green-900/20 dark:to-blue-900/20 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <PenTool className="w-16 h-16 text-green-600 dark:text-green-400 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Smart Copywriting</h3>
                    <p className="text-gray-600 dark:text-gray-300">Write compelling content with AI</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Powerful AI Writing Features
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Everything you need to create compelling content with artificial intelligence.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="relative"
              >
                <Card className="h-full glass dark:glass-dark shadow-modern">
                  <CardHeader className="text-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <feature.icon className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600 dark:text-gray-400 text-center">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section id="demo" className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              See Smart Copywriting in Action
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Watch how our AI creates compelling copy in seconds with just a few keywords.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <Card className="glass dark:glass-dark shadow-modern overflow-hidden">
              <CardContent className="p-0">
                <div className="aspect-video bg-gradient-to-br from-green-600 to-blue-600 flex items-center justify-center relative overflow-hidden">
                  <motion.div
                    animate={{ 
                      background: [
                        "linear-gradient(45deg, #10B981, #3B82F6)",
                        "linear-gradient(45deg, #3B82F6, #8B5CF6)",
                        "linear-gradient(45deg, #8B5CF6, #10B981)"
                      ]
                    }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0"
                  />
                  <motion.div 
                    className="text-white text-center relative z-10"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                  >
                    <motion.div
                      animate={{ y: [0, -10, 0] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <PenTool className="w-16 h-16 mx-auto mb-4" />
                    </motion.div>
                    <motion.h3 
                      className="text-2xl font-bold mb-2"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: 0.6 }}
                    >
                      Smart Copywriting Demo
                    </motion.h3>
                    <motion.p 
                      className="text-lg opacity-90"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 0.9 }}
                      transition={{ duration: 0.6, delay: 0.8 }}
                    >
                      Building Your Stunning Copy
                    </motion.p>
                  </motion.div>
                  <motion.div
                    animate={{ 
                      x: [0, 120, 0],
                      y: [0, -30, 0]
                    }}
                    transition={{ 
                      duration: 4, 
                      repeat: Infinity, 
                      ease: "easeInOut" 
                    }}
                    className="absolute top-6 right-6 w-3 h-3 bg-white/25 rounded-full"
                  />
                  <motion.div
                    animate={{ 
                      x: [0, -100, 0],
                      y: [0, 40, 0]
                    }}
                    transition={{ 
                      duration: 5, 
                      repeat: Infinity, 
                      ease: "easeInOut",
                      delay: 1.5
                    }}
                    className="absolute bottom-6 left-6 w-4 h-4 bg-white/20 rounded-full"
                  />
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Why Choose Smart Copywriting?
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                Transform your content creation workflow with AI-powered tools that deliver results.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-3"
                  >
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <Card className="glass dark:glass-dark shadow-modern">
                <CardHeader>
                  <CardTitle className="text-2xl text-gray-900 dark:text-white">Get Started Today</CardTitle>
                  <CardDescription className="text-gray-600 dark:text-gray-400">
                    Start creating compelling content with AI in minutes
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">₹1,999</div>
                    <div className="text-gray-600 dark:text-gray-400">per month</div>
                  </div>
                  <Button className="w-full" size="lg" onClick={() => document.getElementById('pricing').scrollIntoView({ behavior: 'smooth' })}>
                    Start Free Trial
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Simple Pricing
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Choose the perfect plan for your AI copywriting needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: "Starter",
                price: "₹1,999",
                description: "Perfect for small businesses",
                features: ["Up to 100 pieces/month", "Basic AI features", "Email support", "Standard templates"]
              },
              {
                name: "Professional",
                price: "₹5,999",
                description: "Ideal for growing teams",
                features: ["Unlimited content", "Advanced AI features", "Priority support", "Custom templates", "Analytics"]
              },
              {
                name: "Enterprise",
                price: "₹19,999",
                description: "For large organizations",
                features: ["Everything in Pro", "Custom AI models", "24/7 support", "White-label options", "API access"]
              }
            ].map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="relative"
              >
                <Card className={`h-full glass dark:glass-dark shadow-modern ${index === 1 ? 'border-primary shadow-lg' : ''}`}>
                  {index === 1 && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-primary text-white px-4 py-1 rounded-full text-sm font-medium">
                        Most Popular
                      </div>
                    </div>
                  )}
                  <CardHeader className="text-center">
                    <CardTitle className="text-2xl text-gray-900 dark:text-white">{plan.name}</CardTitle>
                    <CardDescription className="text-gray-600 dark:text-gray-300">
                      {plan.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <div className="mb-6">
                      <div className="text-3xl font-bold text-gray-900 dark:text-white">{plan.price}</div>
                      <div className="text-gray-500 dark:text-gray-400">per month</div>
                    </div>
                    <ul className="space-y-3 text-left">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-3">
                          <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                          <span className="text-gray-700 dark:text-gray-300 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <div className="p-6 pt-0">
                    <Button className="w-full" size="lg" onClick={() => window.open('https://brandforge.ai/signup', '_blank')}>
                      {index === 1 ? 'Start Free Trial' : 'Get Started'}
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default SmartCopywriting 