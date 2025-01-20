'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

interface AppearingTextCardProps {
  title: string
  content: string
  imageSrc: string
  imageAlt: string
  footer: string
}


const TestimonialCard: React.FC<AppearingTextCardProps> = ({ title, content, imageSrc,imageAlt,footer }) => {
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
    <div className="bg-main  rounded-lg  overflow-hidden w-full">
      <div className="w-full flex flex-row md:flex-row">
        <div className="md:w-1/2 p-8 ">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h2 
              className="text-2xl font-bold mb-4 text-white"
              variants={itemVariants}
            >
              {title}
            </motion.h2>
            <motion.p 
              className="text-white font-bold"
              variants={itemVariants}
            >
              {content}
            </motion.p>
            <motion.p 
              className="text-white mt-6 font-bold"
              variants={itemVariants}
            >
              {footer}
            </motion.p>
          </motion.div>
        </div>
        <div className="md:w-1/2  relative h-96  w-full md:h-auto">
       

                    <Image
                      src={imageSrc}
                      alt={imageAlt}
                      layout="fill"
                      objectFit="cover"
                    />
        </div>
      </div>
    </div>
  )
}

export default TestimonialCard

