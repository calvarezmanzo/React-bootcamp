import React from 'react'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'

export const Loading = () => {
  return (
    <div className='h-screen w-full  flex items-center justify-center'>
        <AiOutlineLoading3Quarters className="animate-spin text-blue-500 text-6xl mb-4"/>
    </div>
  )
}
