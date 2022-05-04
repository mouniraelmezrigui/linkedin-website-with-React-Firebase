import React, { useEffect, useState } from "react";
import {HiPhotograph} from 'react-icons/hi' 
import {RiVideoFill} from 'react-icons/ri' 
import {BsCalendar2Date} from 'react-icons/bs' 
import Post from "../post-section/Post";

import { postCollectionRef } from '../../firebase.config'
import "./InputOption.css";
import { addDoc, collection, onSnapshot, orderBy, query, Timestamp } from "firebase/firestore";
import Modal from 'react-modal'
import { AiOutlineClose } from 'react-icons/ai'
import { MdArrowDropDown } from 'react-icons/md'
import { BiWorld } from 'react-icons/bi'
import { FcDocument } from 'react-icons/fc'
import { MdCardTravel } from 'react-icons/md'
import { IoIosOptions } from 'react-icons/io'

const InputOption = () => {


  const [input, setInput] = useState('')
  const [inputArea, setInputArea] = useState('')
  const [post, setPost] = useState({})

  const [time, setTime] = useState(0)
  const [timeText, setTimeText] = useState('')

  

  const [posts , setPosts] = useState([]);

// ----------------
  useEffect(() => {
    getPosts();
  }, [post]);

  
  const getPosts = async () => {
    const q = query(postCollectionRef, orderBy('created', 'desc'))
      onSnapshot(q, (querySnapshot) => {
        setPosts(querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        })))
      })
  }; 

// ---------------- 
  // useEffect(() =>{
    // onSnapshot(recipesCollectionRef, snapshot => {
      // setPosts( 
      //   snapshot.docs.map((doc) => (
      //     {
      //       id: doc.id,
      //       data: doc.data()
      //     }
      // )))
    // })
  // }, [])

  const sendPost = async e => {
    e.preventDefault();

    try {
      await addDoc(postCollectionRef, {
        name: 'Mounirael Mezrigui',
        description: 'This is a New test ',
        message: inputArea,
        photoUrl: '',
        created: "Now"
      })
    } catch (err) {
      console.log(err)
    }

    setIsShowing(false)
    setInputArea('')
  }

  const [ isShowing , setIsShowing] = useState(false);
  const showModal = () => {
    setIsShowing(true)
  }
  const closeModal = ()  => {
    setIsShowing(false)
  }

  // ->>>>>>> >>>>>> >>>>>> >>>>>> >>>>>>  Modal  <<<<<< <<<<< <<<<<< <<<<<< <<<<<- 
  Modal.setAppElement('#root')
  const [flag, setFlag] = useState(false)

  const onlySpaces = (str) => str.trim().length === 0

  const disabledBtn = (e) => {
    if (e.length === 0 || onlySpaces(e)) {
      setFlag(true)
    }else {
      setFlag(false)
    }
  }

  // 

  return (
    <div className="home-post-input">
      <div className="inputOption" >
        <div className="feed w-full bg-white cursor-auto">
          <div className="feed__inputContainer py-4 px-4">
            {/*  */}
            <div className="feed__input w-full flex ">
              <img className="w-12 h-12 ml-4 rounded-full" src='https://via.placeholder.com/150' alt=''/>
              <form className="w-[90%] mx-auto">
                <input value={input} onClick={showModal} onChange={(e) => setInput(e.target.value)} className="w-full bg-gray-50 cursor-pointer transition-all text-black hover:bg-gray-100 rounded-full border-2 py-2 focus:outline-none px-4"
                  type="text"
                  placeholder="start post"
                />
                {/* <button onClick={sendPost} type="submit">
                  Send
                </button> */}
                <Modal isOpen={isShowing} onRequestClose={() => closeModal()} 
          className='bg-white  rounded-2xl w-[580px] h-[560px] md:w-[550px] md:h-[480px] fixed right-1/2 md:top-[42%] top-[60%] -translate-y-1/2 translate-x-1/2 shadow-2xl '
          style={ {
            overlay: {
              background: '#000000aa', position: 'fixed', width:'100%', height:'100%',zIndex:'100',
          }, 
            
            } } >
          <div>
            <div className='flex justify-between items-center border-b-[#eee] border-b-[1px] px-4 py-2 z-[5000]'>
              <div className='text-lg'>Create Post</div>
              <button onClick={() => setIsShowing(false)} className=' text-lg '><AiOutlineClose /></button>
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
              <textarea onChange={(e) => {disabledBtn(e.target.value); setInputArea(e.target.value)  }} className='text-black resize-none px-4 py-2 focus:outline-none w-full ' placeholder='what that you want to talk about? .......'>
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
              <button disabled={flag} className='bg-[#0a66c2] px-5 py-2 rounded-lg text-white transition-all duration-300 hover:bg-[#0a44a8] text-xl btn-post'  onClick={sendPost} type='submit'>نشر</button>
            </div>
          </div>
        </Modal>
                
              </form>
            </div>
            <ul className="flex justify-between mt-4 w-full">
              <li className="w-1/5 py-4 text-gray-900 justify-center hover:bg-gray-100 transition-all rounded-xl flex items-center cursor-pointer">
                <HiPhotograph className="text-[#70b5f9] text-xl"/>
                <span className="mr-2">Image</span>
              </li>
              <li className="w-1/5 py-4 text-gray-900 justify-center hover:bg-gray-100 transition-all rounded-xl flex items-center cursor-pointer">
                <RiVideoFill className="text-[#7fc15e] text-xl" />
                <span className="mr-2">Video</span>
              </li>
              <li className="w-1/5 py-4 text-gray-900 justify-center hover:bg-gray-100 transition-all rounded-xl flex items-center cursor-pointer">
                <BsCalendar2Date className="text-[#e7a33e] text-xl"/>
                <span className="mr-2">Occcasion</span>
              </li>
              <li className="w-1/5 py-4 text-gray-900 justify-center hover:bg-gray-100 transition-all rounded-xl flex items-center cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" className="mercado-match text-[#fc9295] text-xl" width="24" height="24" focusable="false">
                  <path d="M21 3v2H3V3zm-6 6h6V7h-6zm0 4h6v-2h-6zm0 4h6v-2h-6zM3 21h18v-2H3zM13 7H3v10h10z"></path>
                </svg>
                <span className="mr-2">Write article</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {
        posts.map((p) => (
          <Post key={p.id} 
            name={p.name} description={p.description} 
            message={p.message} photoUrl={p.photoUrl} created= {p.created}
          />
        ))
      }
    </div>
  );
};

export default InputOption;