import React from 'react'
import { BsArrowLeft } from 'react-icons/bs'
import hiring from '../../images/linkedln-hiring.png'
import Footer from './Footer'
import './feedSection.css'

const FeedSection = () => {
  return (
    <div className='bg-white py-4 px-4 rounded-lg w-[340px] feed'>
      <h2 className='font-medium pb-6 text-lg text-right'>Add</h2>
      <div className='flex flex-col '>
        {/* fixed left-24 top-24 */}
        <div className='pb-8'>
          <div className='flex mb-2'>
            <img src='https://via.placeholder.com/150' className='rounded-full w-10 cursor-pointer' alt='' />
            <div className='flex flex-col mr-4 relative'>
              <h4 className='text-sm transition-all hover:underline hover:text-blue-600'>Mounirael Mezrigui</h4>
              <h6 className='text-gray-500 text-xs'>Frontend Developer</h6>
            </div>
          </div>
            <button className='py-[8px] px-[24px] rounded-xl border-2 transition-all duration-200 hover:bg-gray-300 border-gray-400 hover:border-gray-500'>Follow</button>
        </div>
        {/*  */}
        <div className='pb-8'>
          <div className='flex mb-2'>
            <img src='https://via.placeholder.com/150' className='rounded-full w-10 cursor-pointer' alt='' />
            <div className='flex flex-col mr-4 relative'>
              <h4 className='text-sm transition-all hover:underline hover:text-blue-600'>Mounirael Mezrigui</h4>
              <h6 className='text-gray-500 text-xs'>Frontend Developer</h6>
            </div>
          </div>
            <button className='py-[8px] px-[24px] rounded-xl border-2 transition-all duration-200 hover:bg-gray-300 border-gray-400 hover:border-gray-500'> Follow</button>
        </div>
        {/*  */}
        <div className='pb-8'>
          <div className='flex mb-2'>
            <img src='https://via.placeholder.com/150' className='rounded-full w-10 cursor-pointer' alt='' />
            <div className='flex flex-col mr-4 relative'>
              <h4 className='text-sm transition-all hover:underline hover:text-blue-600'>Mounirael Mezrigui</h4>
              <h6 className='text-gray-500 text-xs'>Frontend Developer</h6>
            </div>
          </div>
            <button className='py-[8px] px-[24px] rounded-xl border-2 transition-all duration-200 hover:bg-gray-300 border-gray-400 hover:border-gray-500'>Follow</button>
        </div>

        <button className='flex items-center transition-all duration-300 hover:bg-gray-200 w-[160px] pr-4 py-2 rounded-lg mb-8'>Recommendations<BsArrowLeft className='mr-1 text-lg'/></button>
        <img className='rounded-lg cursor-pointer' src={hiring} alt='' />
        <Footer />
      </div>
    </div>
  )
}

export default FeedSection