import React from 'react'
import { PlayIcon } from 'lucide-react'
type Props={
    text:string;
    showPlay:boolean;
}
const Button = ({text, showPlay} :Props) => {
  return (
      <div className='border-2 hover:border-main  relative w-32 h-12 cursor-pointer border-grey-100 border-dashed rounded-full'>
        <div className='flex'>
        {
            showPlay ? (
                <div className='bg-white w-32 h-12 rounded-full text-black text-center 
        font-semibold p-2 space-x-2 absolute -top-2.5 -right-2.5 text-md inline-flex items-center hover:text-white hover:bg-main justify-center'>
            {text}<PlayIcon size={16} fill={'#ffff'} className='ml-1.5'/></div>
        
            ):(
                <div className='bg-white w-32 h-12 rounded-full text-black text-center 
        font-semibold p-2 space-x-2 absolute -top-2.5 -right-2.5 text-md inline-flex items-center hover:text-white hover:bg-main justify-center'>
            {text}</div>
        
            )
        }
        </div>
    </div>
  )
}

export default Button