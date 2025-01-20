"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { motion } from "framer-motion"

interface AnimatedTypewriterProps {
  text: string
  speed?: number
  className?: string
  highlightColor?: string
  highlightWords?: string[]
}

const AnimatedText: React.FC<AnimatedTypewriterProps> = ({
  text,
  speed = 100,
  className = "",
  highlightColor = "text-t",
  highlightWords = [],
}) => {
  const [displayedText, setDisplayedText] = useState("")

  useEffect(() => {
    let currentIndex = 0
    const interval = setInterval(() => {
      if (currentIndex <= text.length) {
        setDisplayedText(text.slice(0, currentIndex))
        currentIndex++
      } else {
        clearInterval(interval)
      }
    }, speed)

    return () => clearInterval(interval)
  }, [text, speed])

  const renderText = () => {
    return text.split(" ").map((word, index) => {
      const isDisplayed = displayedText.length >= text.indexOf(word) + word.length
      const shouldHighlight = highlightWords.includes(word)
      return (
        <span
          key={index}
          className={`${shouldHighlight && isDisplayed ? highlightColor : ""} ${isDisplayed ? "opacity-100" : "opacity-0"} transition-opacity duration-200`}
        >
          {word}{" "}
        </span>
      )
    })
  }

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className={className}>
      {renderText()}
    </motion.div>
  )
}

export default AnimatedText

