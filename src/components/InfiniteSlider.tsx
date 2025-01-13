'use client'

import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'

interface SliderItem {
  content: string
}

interface InfiniteSliderProps {
  items: SliderItem[]
  speed: number
  direction: 'left' | 'right'
}

const InfiniteSlider: React.FC<InfiniteSliderProps> = ({ items, speed, direction }) => {
  const [loopItems, setLoopItems] = useState<SliderItem[]>([])
  const sliderRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setLoopItems([...items, ...items])
  }, [items])

  useEffect(() => {
    if (sliderRef.current) {
      const slider = sliderRef.current
      let animationId: number

      const animate = () => {
        if (direction === 'left') {
          if (slider.scrollLeft >= slider.scrollWidth / 2) {
            slider.scrollLeft = 0
          } else {
            slider.scrollLeft += 1
          }
        } else {
          if (slider.scrollLeft <= 0) {
            slider.scrollLeft = slider.scrollWidth / 2
          } else {
            slider.scrollLeft -= 1
          }
        }
        animationId = requestAnimationFrame(animate)
      }

      animationId = requestAnimationFrame(animate)

      return () => cancelAnimationFrame(animationId)
    }
  }, [direction])

  return (
    <div className="w-full overflow-hidden">
      <div
        ref={sliderRef}
        className="flex"
        style={{
          width: `${100 * loopItems.length}px`,
          animation: `scroll-${direction} ${speed}s linear infinite`,
        }}
      >
        {loopItems.map((item, index) => (
          <div
            key={index}
            className="flex-shrink-0  max-w-[500px] h-[350px] bg-bg-gradient dark:bg-gray-800 shadow-md flex items-center justify-center text-center text-black "
          >
            <Image src={item.content} 
            objectFit='contain' alt=''
            className=''
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default InfiniteSlider

