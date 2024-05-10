import React, { useRef, useState } from 'react'
import Header from './Header'
import { validation } from '../utils/validate'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { auth } from '../utils/firebase'
import { useDispatch } from 'react-redux'
import { addUser, removeUser } from '../utils/userSlice'
import { IMG_BACKGROUND } from '../utils/constant'


const Login = () => {
  const [isSingIn, setIsSignIn] = useState(true)
  const name = useRef()
  const email = useRef()
  const password = useRef()
  const [errorMessage, setErrorMessage] = useState(null)
  const dispatch = useDispatch()

  const submitButton = () => {
    const message = validation(email.current.value, password.current.value)
    setErrorMessage(message)
    if(message) return;
    if(!isSingIn){
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed up 
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value, photoURL: "https://example.com/jane-q-user/profile.jpg"
            
          }).then(() => {
            const { uid, email, displayName } = auth.currentUser;
            dispatch(addUser({uid:uid, email:email, displayName:displayName}))
            // console.log(user)

          }).catch((error) => {
            // An error occurred
            // ...
          });
          // console.log(user)
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode+"-"+errorMessage)
        });
    } else{
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          // console.log(user)
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode+"-"+errorMessage)
        });

    }
    
  }
  const isToggleButton = () => {
    setErrorMessage('')
    setIsSignIn(!isSingIn)
  }

  return (
    <div className='loginBackgroung'>
      <Header />
      {/* <div className=' absolute '>
        <img className='' src={IMG_BACKGROUND} alt='back' />
      </div> */}

      <div className=' flex justify-center items-center mt-[50px]'>

        <form onSubmit={(e) => e.preventDefault()} className= '  bg-black flex flex-col p-10 gap-3 bg-opacity-80 w-[300px]'>

          <h1 className=' text-white font-bold text-xl'>{isSingIn ? "Sign In" : "Sign Up"}</h1>

          {!isSingIn && <input ref={name} className=' py-1 px-2 bg-gray-600' type='text' placeholder='Full Name' />}

          <input ref={email} className=' py-1 px-2 bg-gray-600' type='email' placeholder='Email' />

          <input ref={password} className=' py-1 px-2 bg-gray-600' type='password' placeholder='Password' />

          <p className=' text-red-700'>{errorMessage}</p>

          <button className=' py-1 px-2 bg-red-700 text-white rounded-lg' onClick={submitButton}>{isSingIn ? "Sign In" : "Sign Up"}</button>

          <p className='py-1 px-2 text-white cursor-pointer' onClick={isToggleButton}>{isSingIn ? "New To NetFlix? Sign In Now" : "Already registered Sign Ip Now"}</p>

        </form>

      </div>

    </div>
  )
}

export default Login