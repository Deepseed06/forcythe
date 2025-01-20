'use client'
import AutoTransitioningButtons from '@/components/AutoTransitionBtn'
import HeroSection from '@/components/HeroSection'
import Slider from '@/components/Slider'
import React, { useEffect } from 'react'

const page = () => {
  return (
    <div className="min-h-screen dark:bg-gray-900 py-12 ">
      
      <HeroSection/>
      <Slider/>
      <AutoTransitioningButtons/>
    </div>
  )
}

export default page