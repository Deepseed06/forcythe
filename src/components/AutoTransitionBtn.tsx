'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import starkLogo from '../../public/images/stacai.svg' 
import stacaiLogo from '../../public/images/stacai.svg' 
import exeLogo from '../../public/images/ExecutivePros Logo.svg' 
import iwariaLogo from '../../public/images/iwaria.svg' 
import BeapreneurLogo from '../../public/images/Beaupreneur.svg' 
import TestimonialCard from './TestimonialCard'

interface ButtonData {
  id: number
  label: string;
  content: string
  title:string;
}
 
const buttons:ButtonData[] = [
    { id: 1, 
      title:"Starks Associate", 
      label: starkLogo, 
      content: 'Discover the amazing capabilities of Feature 1.' 
    },
    { id: 2, title:"ExecutivePros", label: exeLogo, content: 'Explore the innovative aspects of Feature 2.' },
    { id: 3, title:"Stai AI", label: stacaiLogo, content: 'Learn about the powerful functionality of Feature 3.' },
    { id: 4, title:"Iwaria", label: iwariaLogo, content: 'Experience the cutting-edge technology of Feature 4.' },
    { id: 5, title:"Beaupreneur", label: BeapreneurLogo, content: 'Unlock new possibilities with Feature 5.' },
  ]
const AutoTransitioningButtons: React.FC = () => {
  const [activeButton, setActiveButton] = useState(buttons[0].id)
  const [cardPosition, setCardPosition] = useState({ top: 0,  left: 0 })

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveButton((current) => {
        const nextIndex = buttons.findIndex((button) => button.id === current) + 1
        return buttons[nextIndex % buttons.length].id
      })
    }, 8000) // Change every 3 seconds


    return () => clearInterval(interval)
  }, [])
  useEffect(() => {
    const activeButtonElement = document.getElementById(`div-${activeButton}`)
    if (activeButtonElement) {
      const rect = activeButtonElement.getBoundingClientRect()
      setCardPosition({ top: rect.bottom + window.scrollY + 16, left: rect.left })

    }
  }, [activeButton])

  return (
    <main className="max-w-5xl mx-auto p-4">
      <div className="flex overflow-hidden border border-main rounded-full  items-center  justify-center mb-4">
        {buttons.map((button) => (
          <motion.div
            key={button.id}
            id={`div-${button.id}`}
            className={`px-4 py-4 flex  justify-center w-full h-[50px]  flex-1 text-sm font-medium transition-colors items-center ${
              activeButton === button.id
                ? 'bg-blue-500 text-white'
                : 'bg-transparent text-gray-700 hover:bg-gray-300'
            }`}
            onClick={() => setActiveButton(button.id)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Image src={button.label} width={100} height={100} alt=''/>
          </motion.div>
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={activeButton}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="bg-white rounded-lg shadow-lg p-6 absolute"
          style={{ top: cardPosition.top, left: cardPosition.left  }}
        >
            <TestimonialCard
            title={`${buttons.find((b) => b.id === activeButton)?.title}`}
            // imageSrc={`${buttons.find((b) => b.id === activeButton)?.label}`}
            content={`${buttons.find((b) => b.id === activeButton)?.content}`}
            // imageAlt={`${buttons.find((b) => b.id === activeButton)?.title}`}
            />
        </motion.div>
      </AnimatePresence>
    </main>
  )
}

export default AutoTransitioningButtons

