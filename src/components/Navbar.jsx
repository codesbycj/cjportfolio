import React from 'react'

export const Navbar = () => {
  return (
    <div className='w-full bg-black px-20 py-5 text-white flex justify-between'>
        <div className='flex items-center gap-4'>
            <div className='w-4 h-4 rounded-full bg-green-600 animate-pulse'></div>
            <p className='font-bold'>Gabokeke is Available</p>
        </div>

        <p className='font-bold'>Menu</p>
    </div>
  )
}
