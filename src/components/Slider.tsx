import React from 'react'
import InfiniteSlider from './InfiniteSlider'
import { items } from '@/constants/images'
const Slider = () => {
  return (
    <div>
        <div className=' text-5xl text-center '>Success in <span className='text-[#60a6e7]'>Motion</span> - Our clients &apos; journey</div>
        <InfiniteSlider items={items} speed={15} direction="right"/>
      <InfiniteSlider items={items} speed={15} direction="left"/>
    </div>
  )
}

export default Slider