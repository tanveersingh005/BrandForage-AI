import React from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { ArrowRight, Play } from "lucide-react";
// import user from "../assets/user.png";
import user2 from "../assets/user2.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200 dark:bg-emerald-500/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-200 dark:bg-blue-500/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-pink-200 dark:bg-purple-500/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
                <motion.span
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  Forge Your Brand
                </motion.span>
                <br />
                <motion.span
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"
                >
                  With AI-Powered
                </motion.span>
                <br />
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                >
                  Marketing Tools
                </motion.span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-6 text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto lg:mx-0"
            >
              Create stunning ads, generate compelling copy, and optimize campaigns with AI. BrandForge AI helps marketers build stronger brands and drive better results.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button size="lg" className="group" onClick={() => document.getElementById('pricing').scrollIntoView({ behavior: 'smooth' })}>
                Start Free Trial
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" className="group" onClick={() => document.getElementById('demo-video').scrollIntoView({ behavior: 'smooth' })}>
                <Play className="mr-2 h-4 w-4" />
                Watch Demo
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="mt-8 flex items-center justify-center lg:justify-start space-x-6 text-sm text-gray-500 dark:text-gray-400"
            >
              <div className="flex items-center space-x-2">
                <div className="flex -space-x-1">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&fit=crop&crop=face&auto=format&q=80"
                    alt="User 1"
                    className="w-8 h-8 rounded-full border-2 border-white object-cover"
                    loading="lazy"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64&h=64&fit=crop&crop=face&auto=format&q=80"
                    alt="User 2"
                    className="w-8 h-8 rounded-full border-2 border-white object-cover"
                    loading="lazy"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=64&h=64&fit=crop&crop=face&auto=format&q=80"
                    alt="User 3"
                    className="w-8 h-8 rounded-full border-2 border-white object-cover"
                    loading="lazy"
                  />
                  <img
                    src={user2}
                    alt="User"
                    className="w-8 h-8 rounded-full border-2 border-white object-cover"
                    loading="lazy"
                  />
                </div>
                <span>Join 10,000+ teams</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="flex space-x-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <svg
                      key={i}
                      className="w-4 h-4 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span>4.9/5 rating</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative w-full h-[500px] rounded-2xl shadow-2xl overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-800 dark:via-gray-700 dark:to-gray-800">
              {/* Enhanced Mock Dashboard UI */}
              <motion.div 
                className="absolute inset-4 bg-white dark:bg-gray-800 rounded-xl shadow-lg"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                {/* Browser Window Controls */}
                <motion.div 
                  className="p-4 border-b border-gray-200"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  <div className="flex items-center space-x-2">
                    <motion.div 
                      className="w-3 h-3 bg-red-400 rounded-full"
                      animate={{ 
                        y: [0, -3, 0],
                        scale: [1, 1.1, 1]
                      }}
                      transition={{ 
                        duration: 2, 
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                      whileHover={{ scale: 1.2 }}
                    ></motion.div>
                    <motion.div 
                      className="w-3 h-3 bg-yellow-400 rounded-full"
                      animate={{ 
                        y: [0, -3, 0],
                        scale: [1, 1.1, 1]
                      }}
                      transition={{ 
                        duration: 2, 
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 0.5
                      }}
                      whileHover={{ scale: 1.2 }}
                    ></motion.div>
                    <motion.div 
                      className="w-3 h-3 bg-green-400 rounded-full"
                      animate={{ 
                        y: [0, -3, 0],
                        scale: [1, 1.1, 1]
                      }}
                      transition={{ 
                        duration: 2, 
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1
                      }}
                      whileHover={{ scale: 1.2 }}
                    ></motion.div>
                  </div>
                </motion.div>
                
                {/* Navigation Header */}
                <motion.div 
                  className="p-4 border-b border-gray-100"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex space-x-3">
                      <motion.div 
                        className="h-8 bg-blue-100 rounded-lg w-20"
                        initial={{ width: 0 }}
                        animate={{ width: "5rem" }}
                        transition={{ duration: 0.8, delay: 1 }}
                      ></motion.div>
                      <motion.div 
                        className="h-8 bg-green-100 rounded-lg w-16"
                        initial={{ width: 0 }}
                        animate={{ width: "4rem" }}
                        transition={{ duration: 0.8, delay: 1.2 }}
                      ></motion.div>
                      <motion.div 
                        className="h-8 bg-purple-100 rounded-lg w-24"
                        initial={{ width: 0 }}
                        animate={{ width: "6rem" }}
                        transition={{ duration: 0.8, delay: 1.4 }}
                      ></motion.div>
                    </div>
                    <motion.div 
                      className="w-10 h-10 bg-blue-500 rounded-lg"
                      animate={{ 
                        y: [0, -2, 0],
                        rotate: [0, 2, 0]
                      }}
                      transition={{ 
                        duration: 3, 
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    ></motion.div>
                  </div>
                </motion.div>
                
                {/* Content Area */}
                <div className="p-6">
                  {/* Stats Cards */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <motion.div 
                      className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg p-4 text-white"
                      initial={{ opacity: 0, y: 20, scale: 0.8 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{ duration: 0.6, delay: 1.6 }}
                      whileHover={{ scale: 1.05, y: -5 }}
                    >
                      <motion.div 
                        className="text-2xl font-bold"
                        animate={{ 
                          scale: [1, 1.05, 1],
                          opacity: [0.8, 1, 0.8]
                        }}
                        transition={{ 
                          duration: 3, 
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      >2,847</motion.div>
                      <div className="text-blue-100 text-sm">Active Users</div>
                    </motion.div>
                    <motion.div 
                      className="bg-gradient-to-r from-green-500 to-green-600 rounded-lg p-4 text-white"
                      initial={{ opacity: 0, y: 20, scale: 0.8 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{ duration: 0.6, delay: 1.8 }}
                      whileHover={{ scale: 1.05, y: -5 }}
                    >
                      <motion.div 
                        className="text-2xl font-bold"
                        animate={{ 
                          scale: [1, 1.05, 1],
                          opacity: [0.8, 1, 0.8]
                        }}
                        transition={{ 
                          duration: 3, 
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: 1
                        }}
                                              >₹12.4L</motion.div>
                      <div className="text-green-100 text-sm">Revenue</div>
                    </motion.div>
                    <motion.div 
                      className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg p-4 text-white"
                      initial={{ opacity: 0, y: 20, scale: 0.8 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{ duration: 0.6, delay: 2 }}
                      whileHover={{ scale: 1.05, y: -5 }}
                    >
                      <motion.div 
                        className="text-2xl font-bold"
                        animate={{ 
                          scale: [1, 1.05, 1],
                          opacity: [0.8, 1, 0.8]
                        }}
                        transition={{ 
                          duration: 3, 
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: 2
                        }}
                      >98%</motion.div>
                      <div className="text-purple-100 text-sm">Uptime</div>
                    </motion.div>
                  </div>
                  
                  {/* Chart Placeholder */}
                  <motion.div 
                    className="bg-gray-50 rounded-lg p-4 mb-4"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 2.2 }}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <motion.div 
                        className="h-4 bg-gray-200 rounded w-24"
                        initial={{ width: 0 }}
                        animate={{ width: "6rem" }}
                        transition={{ duration: 0.8, delay: 2.6 }}
                      ></motion.div>
                      <motion.div 
                        className="h-4 bg-gray-200 rounded w-16"
                        initial={{ width: 0 }}
                        animate={{ width: "4rem" }}
                        transition={{ duration: 0.8, delay: 2.8 }}
                      ></motion.div>
                    </div>
                    <div className="space-y-2">
                      <motion.div 
                        className="h-3 bg-gray-200 rounded w-full"
                        initial={{ width: 0 }}
                        animate={{ 
                          width: "100%",
                          opacity: [0.7, 1, 0.7]
                        }}
                        transition={{ 
                          duration: 0.8, 
                          delay: 3,
                          opacity: {
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }
                        }}
                      ></motion.div>
                      <motion.div 
                        className="h-3 bg-gray-200 rounded w-3/4"
                        initial={{ width: 0 }}
                        animate={{ 
                          width: "75%",
                          opacity: [0.7, 1, 0.7]
                        }}
                        transition={{ 
                          duration: 0.8, 
                          delay: 3.2,
                          opacity: {
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 0.5
                          }
                        }}
                      ></motion.div>
                      <motion.div 
                        className="h-3 bg-gray-200 rounded w-5/6"
                        initial={{ width: 0 }}
                        animate={{ 
                          width: "83.333333%",
                          opacity: [0.7, 1, 0.7]
                        }}
                        transition={{ 
                          duration: 0.8, 
                          delay: 3.4,
                          opacity: {
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 1
                          }
                        }}
                      ></motion.div>
                      <motion.div 
                        className="h-3 bg-gray-200 rounded w-1/2"
                        initial={{ width: 0 }}
                        animate={{ 
                          width: "50%",
                          opacity: [0.7, 1, 0.7]
                        }}
                        transition={{ 
                          duration: 0.8, 
                          delay: 3.6,
                          opacity: {
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 1.5
                          }
                        }}
                      ></motion.div>
                    </div>
                  </motion.div>
                  
                  {/* Recent Activity */}
                  <div className="space-y-3">
                    <motion.div 
                      className="flex items-center space-x-3"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 3.8 }}
                    >
                      <motion.div 
                        className="w-2 h-2 bg-green-500 rounded-full"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity, delay: 4 }}
                      ></motion.div>
                      <motion.div 
                        className="h-3 bg-gray-200 rounded w-3/4"
                        initial={{ width: 0 }}
                        animate={{ width: "75%" }}
                        transition={{ duration: 0.8, delay: 4 }}
                      ></motion.div>
                    </motion.div>
                    <motion.div 
                      className="flex items-center space-x-3"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 4.2 }}
                    >
                      <motion.div 
                        className="w-2 h-2 bg-blue-500 rounded-full"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity, delay: 4.4 }}
                      ></motion.div>
                      <motion.div 
                        className="h-3 bg-gray-200 rounded w-1/2"
                        initial={{ width: 0 }}
                        animate={{ width: "50%" }}
                        transition={{ duration: 0.8, delay: 4.4 }}
                      ></motion.div>
                    </motion.div>
                    <motion.div 
                      className="flex items-center space-x-3"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 4.6 }}
                    >
                      <motion.div 
                        className="w-2 h-2 bg-purple-500 rounded-full"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity, delay: 4.8 }}
                      ></motion.div>
                      <motion.div 
                        className="h-3 bg-gray-200 rounded w-5/6"
                        initial={{ width: 0 }}
                        animate={{ width: "83.333333%" }}
                        transition={{ duration: 0.8, delay: 4.8 }}
                      ></motion.div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
              
              {/* Floating Elements */}
              <motion.div
                className="absolute top-8 right-8 bg-white rounded-lg shadow-lg p-4 max-w-xs border border-gray-200"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2, duration: 0.5 }}
              >
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">Task Completed</p>
                    <p className="text-xs text-gray-500">Project milestone achieved</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="absolute bottom-8 left-8 bg-white rounded-lg shadow-lg p-3 border border-gray-200"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5, duration: 0.5 }}
              >
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                  <span className="text-xs font-medium text-gray-700">Analytics</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
