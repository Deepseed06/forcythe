'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Button from './Button'
import Image from 'next/image'
import LogoImg from '../../public/images/logo.svg'
import { DropdownMenuBtn } from './Dropdown'


const Navbar = () => {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = Math.min(window.scrollY / totalHeight, 1)
      setScrollProgress(progress)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const backgroundColor = `${scrollProgress > 0.1 ? `rgba(255, 255, 255,0.09)` : `rgba(255, 255, 255, ${scrollProgress*0.1})`}`
  const textColor = scrollProgress > 0.5 ? 'text-gray-300' : 'text-white'

  return (
    <nav 
      className={`
        fixed top-0 left-0 right-0 z-50 
        transition-all duration-300 ease-in-out
        backdrop-blur-md
      `}
      style={{ backgroundColor }}
    >
      <div className="max-w-7xl  mx-auto px-4 py-6 sm:px-8 lg:py-6 lg:px-32">
        <div className="flex items-center justify-between h-16">
        <div className='flex'>
        <div className="flex items-center">
            <Link href="/" className={`font-bold text-xl ${textColor}`}>
              <Image src={LogoImg} width={130} height={130} alt=''/>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-20 flex items-baseline ">
              {['About', 'Services', 'Portfolio', 'Studio', 'Foundation'].map((item) => (
                <Link 
                  key={item} 
                  href={item === 'Home' ? '/' : `/${item.toLowerCase()}`} 
                  className={`px-3 py-2 rounded-md text-[16px] font-medium ${textColor} hover:bg-white/20 transition-colors duration-300`}
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
        </div>
             <DropdownMenuBtn/>
              <div className='hidden md:block'><Button text='Book a Call' showPlay={false}/></div>
        </div>
      </div>

     
    </nav>
  )
}

export default Navbar

