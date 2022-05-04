import React, { useState } from 'react'
import Modal from 'react-modal'
import { AiOutlineClose } from 'react-icons/ai'
import { MdArrowDropDown } from 'react-icons/md'
import { BiWorld } from 'react-icons/bi'
import me from '../../images/me.jpg'
import { HiPhotograph } from 'react-icons/hi'
import { RiVideoFill } from 'react-icons/ri'
import { FcDocument } from 'react-icons/fc'
import { MdCardTravel } from 'react-icons/md'
import { IoIosOptions } from 'react-icons/io'

const ModalAA = (props) => {
Modal.setAppElement('#root')
const [flag, setFlag] = useState(false)

// function onlySpaces(str) {
//   return str.trim().length === 0;
// }
const onlySpaces = (str) => str.trim().length === 0

const disabledBtn = (e) => {
  if (e.length === 0 || onlySpaces(e)) {
    setFlag(true)
  }else {
    setFlag(false)
  }
}

return (
  <Modal isOpen={props.isShowing} onRequestClose={() => props.closeModal()} 
        className='bg-white  rounded-2xl w-[580px] h-[560px] md:w-[550px] md:h-[480px] fixed right-1/2 md:top-[42%] top-[60%] -translate-y-1/2 translate-x-1/2 shadow-2xl '
        style={ {
          overlay: {
            background: '#000000aa', position: 'fixed', width:'100%', height:'100%',zIndex:'100',
        }, 
          
          } } >
        <div>
          <div className='flex justify-between items-center border-b-[#eee] border-b-[1px] px-4 py-2 z-[5000]'>
            <div className='text-lg'>Post</div>
            <button onClick={() => props.setIsShowing(false)} className=' text-lg '><AiOutlineClose /></button>
          </div>
          <div className='flex items-center pt-4 px-4'>
            <img className='w-10 rounded-full' src='https://via.placeholder.com/150' alt=''/>
            <div className='mx-2'>
              <h3>Mounirael Mezrigui</h3>
              <button className='flex items-center justify-between border-slate-400 border-[1px] rounded-2xl px-2 py-2 my-1 transition-all hover:bg-gray-200 hover:border-slate-600'>
                <BiWorld />
                Any person
                <MdArrowDropDown />
              </button>
            </div>
          </div>

          <div className='h-[180px] mt-4 flex mb-2'>
            <textarea onChange={(e) => disabledBtn(e.target.value)} className='text-black resize-none px-4 py-2 focus:outline-none w-full ' placeholder=' ؟ Discussion.......'>
            </textarea>
          </div>

          <div className='flex justify-between items-center w-[92%] mx-auto '>
            <div className='border-l-2 flex justify- items-center w-[50%] text-xl text-gray-600'>
              <div className='hover:bg-gray-200 cursor-pointer transition-all duration-300 w-10 h-10 ml-2 rounded-full'>
              <HiPhotograph  className='w-full h-full p-2'/>
              </div>
              <div className='hover:bg-gray-200 cursor-pointer transition-all duration-300 w-10 h-10 ml-2 rounded-full'>
              <RiVideoFill className='w-full h-full p-2' />
              </div>
              <div className='hover:bg-gray-200 cursor-pointer transition-all duration-300 w-10 h-10 ml-2 rounded-full'>
              <FcDocument className='w-full h-full p-2' />
              </div>
              <div className='hover:bg-gray-200 cursor-pointer transition-all duration-300 w-10 h-10 ml-2 rounded-full'>
              <MdCardTravel  className='w-full h-full p-2'/>
              </div>
              <div className='hover:bg-gray-200 cursor-pointer transition-all duration-300 w-10 h-10 ml-2 rounded-full'>
              <IoIosOptions  className='w-full h-full p-2'/>
              </div>
            </div>
            <button disabled={flag} className='bg-[#0a66c2] px-5 py-2 rounded-lg text-white transition-all duration-300 hover:bg-[#0a44a8] text-xl btn-post'  onClick={props.sendPost} type='submit'>Publishing</button>
          </div>
        </div>
      </Modal>
)
}

export default ModalAA