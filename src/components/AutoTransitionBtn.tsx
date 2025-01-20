'use client'

import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import TestimonialCard from './TestimonialCard'
import { buttons } from '@/constants/images'
import Image from 'next/image'


const AutoTransitionCard: React.FC = () => {
  const [activeButton, setActiveButton] = useState(buttons[0].id)
  const [cardPosition, setCardPosition] = useState({ top: 0, left: 0 })
  const containerRef = useRef<HTMLDivElement>(null)
  const cardRef = useRef<HTMLDivElement>(null)
  const CARD_WIDTH = 600 // Fixed card width

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveButton((current) => {
        const nextIndex = buttons.findIndex((button) => button.id === current) + 1
        return buttons[nextIndex % buttons.length].id
      })
    }, 10000) // Change every 3 seconds

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const activeButtonElement = document.getElementById(`button-${activeButton}`)
    const feature4ButtonElement = document.getElementById('button-4')
    const feature5ButtonElement = document.getElementById('button-5')
    if (activeButtonElement && feature4ButtonElement && feature5ButtonElement && containerRef.current) {
      const containerRect = containerRef.current.getBoundingClientRect()
      const buttonRect = activeButtonElement.getBoundingClientRect()
      const feature4Rect = feature4ButtonElement.getBoundingClientRect()
      const feature5Rect = feature5ButtonElement.getBoundingClientRect()

      let left = buttonRect.left - containerRect.left

      // Adjust position for Feature 4 and 5
      if (activeButton === 4) {
        left = feature4Rect.right - containerRect.left - CARD_WIDTH
      } else if (activeButton === 5) {
        left = feature5Rect.right - containerRect.left - CARD_WIDTH
      }

      // Ensure the card doesn't go beyond the container's left edge
      left = Math.max(0, left)

      // Ensure the card doesn't go beyond the container's right edge
      const maxLeft = containerRect.width - CARD_WIDTH
      left = Math.min(left, maxLeft)

      setCardPosition({ 
        top: buttonRect.bottom + window.scrollY + 16, 
        left: left + containerRect.left
      })
    }
  }, [activeButton])

  return (
    <div className="max-w-4xl mx-auto p-8" ref={containerRef}>
      <div className="flex overflow-hidden relative border border-main rounded-full  items-center  justify-center mb-4">
        {buttons.map((button) => (
          <motion.button
            key={button.id}
            id={`button-${button.id}`}
            className={`px-4 py-2 mx-2 text-sm font-medium transition-colors ${
              activeButton === button.id
                ? 'bg-blue-500 text-white'
                : 'bg-transparent text-gray-700 hover:bg-gray-300'
            }`}
            onClick={() => setActiveButton(button.id)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Image src={button.label} alt={button.title} width={120} height={120}/>
          </motion.button>
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={activeButton}
          ref={cardRef}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="bg-white rounded-lg shadow-lg  absolute mt-4"
          style={{ 
            top: cardPosition.top, 
            left: cardPosition.left, 
            width: `${CARD_WIDTH}px`,
         
          }}
        >
          <TestimonialCard
          title={`${buttons.find((b) => b.id === activeButton)?.title}`}
          imageSrc={`${buttons.find((b) => b.id === activeButton)?.imageSrc}`}
          content={`${buttons.find((b) => b.id === activeButton)?.content}`}
          imageAlt={`${buttons.find((b) => b.id === activeButton)?.title}`}
          footer={`${buttons.find((b) => b.id === activeButton)?.footer}`}
/>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

export default AutoTransitionCard




