import React from 'react'
import {signOut } from "firebase/auth";
import {auth} from "../utils/firebase"
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
  const navigate=useNavigate();
  const user=useSelector((store)=>store.user);
  const handleSignout=()=>{
    signOut(auth).then(() => {
      console.log("signout successfull");
      navigate("/")
    }).catch((error) => {
      // An error happened.
    });
  }
  return (
    <div className='flex justify-between w-screen z-50 py-3 absolute bg-gradient-to-b from-black'>
        <img className='w-48 ml-10' src='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png' alt='netflix-logo'/>
    
        {user!=null && <div className='flex mr-10 items-center'>
            <img src={user.photoURL} className='w-10 h-10' alt='user image'/>
            <button className='font-bold text-white' onClick={handleSignout}>Sign Out</button>

          </div>
        } 
    </div>

  )
}

export default Header