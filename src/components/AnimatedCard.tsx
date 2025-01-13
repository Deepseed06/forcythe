import React from 'react'

interface AnimatedCardProps {
  title: string
  content: string
}

const AnimatedCard: React.FC<AnimatedCardProps> = ({ title, content }) => {
  return (
    <div className="relative w-full max-w-md mx-auto overflow-hidden">
      <div className="animate-card-glow absolute inset-0 border-2 "></div>
      <div className="relative bg-gradient-to-b bg-bg-gradient m-0.5 p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4 text-white dark:text-white">{title}</h2>
        <p className="text-white dark:text-gray-300">{content}</p>
      </div>
    </div>
  )
}

export default AnimatedCard

