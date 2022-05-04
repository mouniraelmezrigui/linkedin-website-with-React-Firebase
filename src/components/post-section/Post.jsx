import React, { useState } from "react";
// import InputOption from "../InputOption";
import "./Post.css";
import { IoIosOptions, IoMdArrowDropdown } from 'react-icons/io'
import { AiFillLike } from 'react-icons/ai'
import { BsEmojiHeartEyesFill, BsLightbulbFill } from "react-icons/bs";

const Post = (props) => {
  const {name , description, message, photoUrl, created} = props
  const [showOp, setShowOp] = useState(false)
  const showOption = () => {
    setShowOp(!showOp)
  }
  return (
    <div className="post ">
      <div className="flex justify-between">
        <div className="post__header">
          <img className="w-12 rounded-full ml-2" src='https://via.placeholder.com/150' alt='' />
          <div className="post__info">
            <h2>{name}</h2>
            <p>{description}</p>
              <p className="flex justify-between w-28">  {created} • done
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"  fill="currentColor" className="mercado-match" width="16" height="16" focusable="false">
                <path d="M8 1a7 7 0 107 7 7 7 0 00-7-7zM3 8a5 5 0 011-3l.55.55A1.5 1.5 0 015 6.62v1.07a.75.75 0 00.22.53l.56.56a.75.75 0 00.53.22H7v.69a.75.75 0 00.22.53l.56.56a.75.75 0 01.22.53V13a5 5 0 01-5-5zm6.24 4.83l2-2.46a.75.75 0 00.09-.8l-.58-1.16A.76.76 0 0010 8H7v-.19a.51.51 0 01.28-.45l.38-.19a.74.74 0 01.68 0L9 7.5l.38-.7a1 1 0 00.12-.48v-.85a.78.78 0 01.21-.53l1.07-1.09a5 5 0 01-1.54 9z"></path>
              </svg>
              </p>
          </div>
        </div>
        <div className='w-10 h-10 p-2 relative'>
        <IoIosOptions onClick={showOption} className="h-full w-full cursor-pointer"/>
        <div className={`bg-white shadow-md border-2 py-4 px-2 w-32 -mr-12 rounded-lg hidden`}>
          <button className="hover:bg-gray-100 transition-all py-2 px-1 rounded-2xl w-full">Updated post</button>
          <button className="hover:bg-gray-100 transition-all py-2 px-1 rounded-2xl w-full">Delete post</button>
        </div>
        </div>
      </div>

      <div className="post__body">
        <p>{message}</p>
      </div>

      <div className="text-gray-500 text-xs flex items-center mt-3 mb-3 justify-between">
        <div className="flex hover:underline cursor-pointer">
          <img className="ml-0.5" src="https://static-exp1.licdn.com/sc/h/d310t2g24pvdy4pt1jkedo4yb"  alt=''/>
          <img className="ml-0.5" src="https://static-exp1.licdn.com/sc/h/5thsbmikm6a8uov24ygwd914f"  alt=''/>
          <img className="ml-1" src="https://static-exp1.licdn.com/sc/h/7fx9nkd7mx8avdpqm5hqcbi97" alt='' />
          <span className="ml-4">47 </span>
        </div>
        <div className="text-left hover:underline cursor-pointer">
          <span className=""> 26 comments</span>
        </div>
      </div>
      {/*  */}
      <div className="post__buttons">
      <ul className="flex justify-between w-full pt-4 text-center border-t-[1px] relative">
        <li className="li-post-opertions li-post-opertions-first">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor"  width="24" height="24" focusable="false">
            <path d="M19.46 11l-3.91-3.91a7 7 0 01-1.69-2.74l-.49-1.47A2.76 2.76 0 0010.76 1 2.75 2.75 0 008 3.74v1.12a9.19 9.19 0 00.46 2.85L8.89 9H4.12A2.12 2.12 0 002 11.12a2.16 2.16 0 00.92 1.76A2.11 2.11 0 002 14.62a2.14 2.14 0 001.28 2 2 2 0 00-.28 1 2.12 2.12 0 002 2.12v.14A2.12 2.12 0 007.12 22h7.49a8.08 8.08 0 003.58-.84l.31-.16H21V11zM19 19h-1l-.73.37a6.14 6.14 0 01-2.69.63H7.72a1 1 0 01-1-.72l-.25-.87-.85-.41A1 1 0 015 17l.17-1-.76-.74A1 1 0 014.27 14l.66-1.09-.73-1.1a.49.49 0 01.08-.7.48.48 0 01.34-.11h7.05l-1.31-3.92A7 7 0 0110 4.86V3.75a.77.77 0 01.75-.75.75.75 0 01.71.51L12 5a9 9 0 002.13 3.5l4.5 4.5H19z"></path>
          </svg>
          <span className="mr-1">Like</span>
        </li>
        {/*  */}
        <div className="hidden div-emogy shadow-xl border-2 duration-300 transition-all">
          <AiFillLike className="w-[30%] text-blue-800 text-[28px] translateY"/>
          <BsEmojiHeartEyesFill className="w-[30%] text-red-600 text-[28px] translateY2"/>
          <BsLightbulbFill className="w-[30%] text-[28px] text-yellow-500 translateY3 delay"/>
        </div>
        {/*  */}
        <li className="li-post-opertions">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" className="mercado-match" width="24" height="24" focusable="false">
            <path d="M7 9h10v1H7zm0 4h7v-1H7zm16-2a6.78 6.78 0 01-2.84 5.61L12 22v-4H8A7 7 0 018 4h8a7 7 0 017 7zm-2 0a5 5 0 00-5-5H8a5 5 0 000 10h6v2.28L19 15a4.79 4.79 0 002-4z"></path>
          </svg>
        <span className="mr-1">comment</span>
        </li>
        <li className="li-post-opertions">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" className="mercado-match" width="24" height="24" focusable="false">
            <path d="M23 12l-4.61 7H16l4-6H8a3.92 3.92 0 00-4 3.84V17a4 4 0 00.19 1.24L5.12 21H3l-.73-2.22A6.4 6.4 0 012 16.94 6 6 0 018 11h12l-4-6h2.39z"></path>
          </svg>
          <span className="mr-1">Shere</span>
        </li>
        <li className="li-post-opertions">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" className="mercado-match" width="24" height="24" focusable="false">
            <path d="M21 3L0 10l7.66 4.26L16 8l-6.26 8.34L14 24l7-21z"></path>
          </svg>
          <span className="mr-1">send</span>
        </li>
    </ul>
    </div>
      {/* For Input Comments */}
      <div className="flex mt-4">
        <img className="w-10 rounded-full  h-10" src='https://via.placeholder.com/150' alt=''/>
        <div className="w-full flex justify-between items-center ">
          <input className="w-[90%] text-sm h-full focus:outline-none mx-auto px-2 border-2 rounded-full" type='text' placeholder="add comment" />
          <p className="cursor-pointer">&#128512;</p>
        </div>
      </div>
      <p className="flex items-center mb-8 mt-2 text-gray-600 text-sm cursor-pointer ">All <IoMdArrowDropdown className="mr-2 font-bold text-lg mb-1"/></p>
      {/* The Comments */}
      <div>
        <div className="flex">
          <img className="w-10 h-10 rounded-full ml-2 cursor-pointer effect-name" src='https://via.placeholder.com/150' alt='' />
          <div className="bg-gray-100 rounded-l-lg rounded-b-lg px-4 pt-1 pb-4">
            <div className="post__info">
              <h2 className="cursor-pointer hover:text-sky-600 hover:font-bold hover:underline ">Mounirael Mezrigui</h2>
              <p>Frontend Developer</p>
              <p className="flex justify-between w-28"> 1 hour •done </p>
            </div>
            <p className="px-4">Welcome In My Site I Hope You Will Enjony</p>
            <p className="mr-4 mt-4">
              <img className="cursor-pointer ml-1 w-[24px]" src="https://static-exp1.licdn.com/sc/h/7fx9nkd7mx8avdpqm5hqcbi97" alt=""/> 
            </p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Post