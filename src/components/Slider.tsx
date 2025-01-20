import React from 'react'
import InfiniteSlider from './InfiniteSlider'
import { items } from '@/constants/images'
import AnimatedText from './AnimatedText'
const Slider = () => {
  return (
    <div>
      <AnimatedText speed={50} className='text-3xl px-4 lg:text-5xl text-center' 
      text="Success in Motion - Our clients'journey"
       highlightColor="text-[#60a6e7]"
       highlightWords={["Motion"]}
      />
        <div className=' '></div>
        <InfiniteSlider items={items} speed={15} direction="right"/>
      <InfiniteSlider items={items} speed={15} direction="left"/>
    </div>
  )
}

export default Slider