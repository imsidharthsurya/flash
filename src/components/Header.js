import React,{ useEffect } from 'react'
import {signOut,onAuthStateChanged } from "firebase/auth";
import {auth} from "../utils/firebase"
import { useNavigate } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import { addUser,removeUser } from "../utils/userSlice";
import {NETFLIX_LOGO} from "../utils/constants"
const Header = () => {
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const user=useSelector((store)=>store.user);
  const handleSignout=()=>{
    signOut(auth).then(() => {
      console.log("signout successfull");
    }).catch((error) => {
      // An error happened.
      navigate("/error")
    });
  }

  useEffect(()=>{
    const unsubscribe=onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in or signedup
        console.log("user auth changed")
        console.log("user obj is: ",user.uid)
        const {uid,email,displayName,photoURL} = user;
        dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}));
        navigate("/browse");
        
      } else {
        dispatch(removeUser());
        navigate("/")
      }
    });

    return ()=>unsubscribe();
  },[])


  return (
    <div className='flex justify-between w-screen z-50 py-3 absolute bg-gradient-to-b from-black'>
        <img className='w-48 ml-10' src={NETFLIX_LOGO} alt='netflix-logo'/>
    
        {user!=null && <div className='flex mr-10 items-center'>
            <img src={user.photoURL} className='w-10 h-10' alt='user image'/>
            <button className='font-bold text-white' onClick={handleSignout}>Sign Out</button>

          </div>
        } 
    </div>

  )
}

export default Header