'use client'

import React from 'react'
import { motion } from 'framer-motion'
// import { testifiers } from '@/constants/images'
interface AppearingTextCardProps {
  title: string
  content: string
//   imageSrc: string
//   imageAlt: string
}

const TestimonialCard: React.FC<AppearingTextCardProps> = ({ title, content }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  }

  return (
    <div className="bg-white rounded-lg  overflow-hidden max-w-4xl mx-auto">
      <div className="flex flex-row md:flex-row">
        <div className="md:w-1/2 p-6">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h2 
              className="text-2xl font-bold mb-4 text-gray-800"
              variants={itemVariants}
            >
              {title}
            </motion.h2>
            <motion.p 
              className="text-gray-600"
              variants={itemVariants}
            >
              {content}
            </motion.p>
          </motion.div>
        </div>
        <div className="md:w-1/2 relative h-64 md:h-auto">
          {/* {
            testifiers.map((item) => (
                <div key={item.id}>

                    <Image
                      src={item.imgSrc}
                      alt={imageAlt}
                      layout="fill"
                      objectFit="cover"
                    />
                </div>
            ))
          } */}
        </div>
      </div>
    </div>
  )
}

export default TestimonialCard

