import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Button } from './ui/button'
import { Switch } from './ui/switch'
import { Slider } from './ui/slider'
import { Users, Database, Zap, Shield } from 'lucide-react'

const PricingCalculator = () => {
  const [teamSize, setTeamSize] = useState(5)
  const [storage, setStorage] = useState(10)
  const [isYearly, setIsYearly] = useState(false)
  const [selectedPlan, setSelectedPlan] = useState('starter')

  const plans = {
    starter: {
      name: 'Starter',
      basePrice: 2499,
      maxTeam: 5,
      maxStorage: 10,
      features: ['Basic Analytics', 'Email Support', 'API Access']
    },
    professional: {
      name: 'Professional',
      basePrice: 8499,
      maxTeam: 25,
      maxStorage: 100,
      features: ['Advanced Analytics', 'Priority Support', 'Custom Integrations', 'White-label Options']
    },
    enterprise: {
      name: 'Enterprise',
      basePrice: 24999,
      maxTeam: 999,
      maxStorage: 999,
      features: ['Custom Analytics', '24/7 Phone Support', 'Custom Development', 'Dedicated Account Manager']
    }
  }

  const calculatePrice = (plan) => {
    const basePrice = plans[plan].basePrice
    const yearlyDiscount = isYearly ? 0.2 : 0
    const teamMultiplier = Math.max(1, (teamSize - plans[plan].maxTeam) / 10)
    const storageMultiplier = Math.max(1, (storage - plans[plan].maxStorage) / 50)
    
    let finalPrice = basePrice * teamMultiplier * storageMultiplier
    finalPrice = finalPrice * (1 - yearlyDiscount)
    
    return Math.round(finalPrice)
  }

  const getRecommendedPlan = () => {
    if (teamSize > 20 || storage > 50) return 'enterprise'
    if (teamSize > 5 || storage > 10) return 'professional'
    return 'starter'
  }

  const recommendedPlan = getRecommendedPlan()

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800">
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
            Interactive Pricing Calculator
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Customize your plan based on your team size and storage needs. See real-time pricing updates.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Calculator Controls */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <Card className="glass dark:glass-dark shadow-modern">
              <CardHeader>
                <CardTitle className="text-gray-900 dark:text-white">Customize Your Plan</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Team Size Slider */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      Team Size: {teamSize} members
                    </label>
                    <Users className="w-5 h-5 text-primary" />
                  </div>
                  <Slider
                    value={[teamSize]}
                    onValueChange={(value) => setTeamSize(value[0])}
                    max={100}
                    min={1}
                    step={1}
                    className="w-full"
                  />
                </div>

                {/* Storage Slider */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      Storage: {storage} GB
                    </label>
                    <Database className="w-5 h-5 text-primary" />
                  </div>
                  <Slider
                    value={[storage]}
                    onValueChange={(value) => setStorage(value[0])}
                    max={500}
                    min={1}
                    step={1}
                    className="w-full"
                  />
                </div>

                {/* Billing Toggle */}
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Billing Cycle
                  </span>
                  <div className="flex items-center space-x-4">
                    <span className={`text-sm ${!isYearly ? 'text-gray-900 dark:text-white' : 'text-gray-500 dark:text-gray-400'}`}>
                      Monthly
                    </span>
                    <Switch
                      checked={isYearly}
                      onCheckedChange={setIsYearly}
                      className="data-[state=checked]:bg-primary"
                    />
                    <span className={`text-sm ${isYearly ? 'text-gray-900 dark:text-white' : 'text-gray-500 dark:text-gray-400'}`}>
                      Yearly
                      <span className="ml-1 text-xs text-green-600 dark:text-green-400 font-medium">Save 20%</span>
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Recommended Plan */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="glass dark:glass-dark shadow-modern border-primary/20">
                <CardHeader>
                  <CardTitle className="text-primary flex items-center">
                    <Zap className="w-5 h-5 mr-2" />
                    Recommended Plan
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      {plans[recommendedPlan].name}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      Best suited for your current needs
                    </p>
                    <Button 
                      onClick={() => setSelectedPlan(recommendedPlan)}
                      className="w-full"
                    >
                      Select {plans[recommendedPlan].name}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Card className="glass dark:glass-dark shadow-modern">
                <CardHeader>
                  <CardTitle className="text-gray-900 dark:text-white text-lg">Quick Stats</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* User Choices */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                      <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">{teamSize}</div>
                      <div className="text-xs text-gray-600 dark:text-gray-300">Team Members</div>
                    </div>
                    <div className="text-center p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                      <div className="text-2xl font-bold text-green-600 dark:text-green-400">{storage}GB</div>
                      <div className="text-xs text-gray-600 dark:text-gray-300">Storage</div>
                    </div>
                  </div>
                  
                  {/* Billing Choice */}
                  <div className="text-center p-3 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
                    <div className="text-lg font-bold text-orange-600 dark:text-orange-400">
                      {isYearly ? 'Yearly' : 'Monthly'}
                    </div>
                    <div className="text-xs text-gray-600 dark:text-gray-300">
                      {isYearly ? 'Save 20%' : 'Standard Billing'}
                    </div>
                  </div>

                  {/* Monthly Cost */}
                  <div className="text-center p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                    <div className="text-lg font-bold text-purple-600 dark:text-purple-400">
                      ₹{calculatePrice(recommendedPlan).toLocaleString()}
                    </div>
                    <div className="text-xs text-gray-600 dark:text-gray-300">Monthly Cost</div>
                  </div>



                  {/* Savings Info */}
                  {isYearly && (
                    <div className="text-center p-2 bg-green-50 dark:bg-green-900/20 rounded">
                      <div className="text-sm font-medium text-green-600 dark:text-green-400">
                        Save ₹{(plans[recommendedPlan].basePrice * 12 * 0.2).toLocaleString()} yearly
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>

          {/* Pricing Results */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {Object.entries(plans).map(([planKey, plan]) => (
              <motion.div
                key={planKey}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * Object.keys(plans).indexOf(planKey) }}
                viewport={{ once: true }}
              >
                <Card className={`glass dark:glass-dark shadow-modern transition-all duration-300 ${
                  selectedPlan === planKey ? 'ring-2 ring-primary scale-105' : ''
                }`}>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-gray-900 dark:text-white">{plan.name}</CardTitle>
                      {selectedPlan === planKey && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="w-6 h-6 bg-primary rounded-full flex items-center justify-center"
                        >
                          <Shield className="w-4 h-4 text-white" />
                        </motion.div>
                      )}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {/* Price Display */}
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={`${planKey}-${teamSize}-${storage}-${isYearly}`}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.8 }}
                          transition={{ duration: 0.3 }}
                          className="text-center"
                        >
                                                     <div className="text-3xl font-bold text-gray-900 dark:text-white">
                             ₹{calculatePrice(planKey)}
                            <span className="text-lg text-gray-500 dark:text-gray-400">
                              /{isYearly ? 'year' : 'month'}
                            </span>
                          </div>
                        </motion.div>
                      </AnimatePresence>

                      {/* Features */}
                      <ul className="space-y-2">
                        {plan.features.map((feature, index) => (
                          <motion.li
                            key={index}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="flex items-center text-sm text-gray-600 dark:text-gray-300"
                          >
                            <div className="w-2 h-2 bg-green-500 rounded-full mr-3" />
                            {feature}
                          </motion.li>
                        ))}
                      </ul>

                      {/* Action Button */}
                      <Button
                        onClick={() => setSelectedPlan(planKey)}
                        className={`w-full ${
                          selectedPlan === planKey 
                            ? 'bg-primary hover:bg-primary/90' 
                            : 'bg-gray-900 dark:bg-gray-700 hover:bg-gray-800 dark:hover:bg-gray-600'
                        }`}
                      >
                        {selectedPlan === planKey ? 'Selected' : 'Choose Plan'}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default PricingCalculator 