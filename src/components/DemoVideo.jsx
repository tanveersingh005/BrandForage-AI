import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Button } from './ui/button'
import { Play, Pause, RotateCcw, Maximize, Volume2, VolumeX } from 'lucide-react'

const DemoVideo = () => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration] = useState(120) // 2 minutes

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, '0')}`
  }

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying)
  }

  const handleRestart = () => {
    setCurrentTime(0)
    setIsPlaying(true)
  }

  const handleSeek = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const percentage = x / rect.width
    const newTime = Math.floor(percentage * duration)
    setCurrentTime(newTime)
  }

  return (
    <section id="demo-video" className="py-20 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-900 dark:to-gray-800">
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
            See BrandForge AI in Action
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Watch our comprehensive demo to see how BrandForge AI creates stunning ads and optimizes your marketing campaigns.
          </p>
        </motion.div>

                <div className="grid grid-cols-1 xl:grid-cols-4 gap-8">
          {/* Video Player */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="xl:col-span-3"
          >
            <Card className="glass dark:glass-dark shadow-modern overflow-hidden">
              <CardHeader className="pb-0">
                <CardTitle className="text-gray-900 dark:text-white">Product Demo</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                {/* YouTube Video Embed */}
                <div className="relative rounded-t-lg overflow-hidden">
                  <iframe
                    src="https://www.youtube.com/embed/AXTXrUno2ug?si=H9mcKdc1pk3QuxzT"
                    title="Product Demo Video"
                    className="w-full h-[400px] md:h-[600px] lg:h-[520px]"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Video Chapters */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="xl:col-span-1"
          >
            <Card className="glass dark:glass-dark shadow-modern h-fit">
              <CardHeader>
                <CardTitle className="text-gray-900 dark:text-white">Chapters</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                                  {[
                    { time: '0:00', title: 'Welcome to BrandForge AI', duration: '1:45' },
                    { time: '1:45', title: 'AI Ad Generator Demo', duration: '3:20' },
                    { time: '5:05', title: 'Smart Copywriting Tools', duration: '2:55' },
                    { time: '8:00', title: 'Campaign Optimization', duration: '4:15' },
                    { time: '12:15', title: 'Brand Intelligence Features', duration: '3:30' },
                    { time: '15:45', title: 'Getting Started Guide', duration: '2:40' },
                    { time: '18:25', title: 'Best Practices & Tips', duration: '3:15' },
                    { time: '21:40', title: 'Q&A & Support', duration: '1:20' }
                  ].map((chapter, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer transition-colors"
                  >
                    <div className="flex-1 min-w-0">
                      <div className="font-medium text-gray-900 dark:text-white text-sm truncate">{chapter.title}</div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">{chapter.time} - {chapter.duration}</div>
                    </div>
                    <div className="w-2 h-2 bg-primary rounded-full ml-2 flex-shrink-0" />
                  </motion.div>
                ))}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default DemoVideo 