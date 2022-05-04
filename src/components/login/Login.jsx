import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { auth } from '../../firebase.config'
import sign from '../../images/login-img.svg'
import { increse, selectUser, register, getUserName } from '../redux/userSlice'

const Login = () => {
  const [email, setEmail] = useState('')
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const user = useSelector(state => state.user)

  const [profilePic, setProfilePic] = useState('')
  const dispatch = useDispatch()

  const onSubmit = (e) => {
    e.preventDefault()
  }

  const registerNow =  () => {


    if(username) {
      dispatch(register(email, password) )
      dispatch(getUserName(username))
    }

    // console.log(userName)
    // const user = await createUserWithEmailAndPassword(auth, email, password);
    // user.then(
      // dispatch(signIn({
      //   email: email,
      //   displayName: username,
      //   password: password,
      //   photoURL: profilePic
      // }))
    // )
      // .catch(err => alert(err))
  }

  return (
    <div className='pt-28 bg-white'>
      <div className="container w-[80%] mx-auto">
        <div className='flex md:flex-row flex-col md:justify-between justify-center items-end w-[94%] mx-auto '>
          <div className="md:w-[55%] w-[100%] ">
            <img src={sign} alt='' />
          </div>
          {/*  */}
          <div className="md:w-[40%] w-[100%] pt-4 flex flex-col mr-20px items-end" >
            <h2 className='md:text-[42px] text-[30px] pb-8 text-left font-light text-slate-800'>Welcome to your professional community</h2>

            <form onSubmit={onSubmit} className="w-[80%] flex flex-col items-end">
              <input className='w-full h-10 mb-4 p-5  outline-none rounded border-gray-400  border-2 focus:border-blue-700 ' type='text' 
              placeholder="User Name" defaultValue={username} onChange={e => setUsername(e.target.value)} />
              <input
                className="w-full h-10 mb-4 p-5  outline-none rounded border-gray-400  border-2 focus:border-blue-700 " type="email"
                placeholder="Email" defaultValue={email} onChange={e => setEmail(e.target.value)} />
              <input
                className="w-full h-10 mb-4 p-5 outline-none rounded border-gray-400  border-2 focus:border-blue-700" type="password"
                placeholder="Password" defaultValue={password} onChange={e => setPassword(e.target.value)}
              />
              <a className="text-sm pl-2" href="/">
                ? Forgot Password{" "}
              </a>
              <button
                type="submit" disabled
                className="w-full py-4 bg-sky-600 text-white rounded-full mt-4 transition-all hover:bg-sky-700"
              >
                Sign in
              </button>
              <div className="w-full h-[1px] bg-slate-300 my-2"></div>
              <div className="flex justify-between w-full items-center">
                <button onClick={registerNow}
                  className="w-[60%] py-2 bg-sky-600 text-white rounded-full mt-1 transition-all hover:bg-sky-700 "
                >
                  Register Now
                </button>
                <span className="w-[30%]">Register Now </span>
              </div>
            </form>

          </div>
        </div>
      </div>

    </div>
  )
}

export default Login