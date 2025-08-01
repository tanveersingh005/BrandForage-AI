import React from 'react'
import { motion } from 'framer-motion'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react'

const Footer = () => {
  const footerLinks = {
    product: [
      { name: 'AI Ad Generator', href: '#features' },
      { name: 'Smart Copywriting', href: '#features' },
      { name: 'Campaign Analytics', href: '#features' },
      { name: 'Brand Intelligence', href: '#features' },
    ],
    company: [
      { name: 'About', href: '#' },
      { name: 'Blog', href: '#' },
      { name: 'Careers', href: '#' },
      { name: 'Press', href: '#' },
    ],
    support: [
      { name: 'Help Center', href: 'https://help.brandforge.ai' },
      { name: 'Contact', href: 'mailto:hello@brandforge.ai' },
      { name: 'Status', href: 'https://status.brandforge.ai' },
      { name: 'Community', href: 'https://community.brandforge.ai' },
    ],
    legal: [
      { name: 'Privacy', href: 'https://brandforge.ai/privacy' },
      { name: 'Terms', href: 'https://brandforge.ai/terms' },
      { name: 'Security', href: 'https://brandforge.ai/security' },
      { name: 'Cookies', href: 'https://brandforge.ai/cookies' },
    ],
  }

  const socialLinks = [
    { icon: Facebook, href: 'https://www.facebook.com/admybrand/', label: 'Facebook' },
    { icon: Twitter, href: 'https://x.com/ADmyBRAND', label: 'Twitter' },
    { icon: Instagram, href: 'https://www.instagram.com/ADmyBRAND', label: 'Instagram' },
    { icon: Linkedin, href: 'www.linkedin.com/in/ADmyBRAND', label: 'LinkedIn' },
  ]

  return (
    <footer className="bg-gray-900 dark:bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <h3 className="text-2xl font-bold mb-4">BrandForge AI</h3>
            <p className="text-gray-400 mb-6 max-w-md">
              AI-powered marketing tools that help you create stunning ads, generate compelling copy, 
              and optimize campaigns for better results.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3 text-gray-400">
                <Mail className="w-4 h-4" />
                <span>hello@brandforge.ai</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <Phone className="w-4 h-4" />
                <span>+91 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <MapPin className="w-4 h-4" />
                <span>New Delhi , India</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 glass dark:glass-dark rounded-lg flex items-center justify-center hover:bg-emerald-500 transition-colors shadow-glass"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-4 capitalize">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors no-underline"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Newsletter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-12 pt-8 border-t border-gray-800"
        >
          <div className="max-w-md">
            <h4 className="text-lg font-semibold mb-4">Stay up to date</h4>
            <p className="text-gray-400 mb-4">
              Get the latest updates on new features and product announcements.
            </p>
            <div className="flex space-x-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-gray-800 border-gray-700 text-white placeholder-gray-400"
              />
              <Button size="sm">
                Subscribe
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-8 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-gray-400 text-sm">
            © 2025 SaaSify. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
              Cookie Policy
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer 