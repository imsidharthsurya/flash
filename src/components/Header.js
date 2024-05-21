import React,{ useEffect } from 'react'
import {signOut,onAuthStateChanged } from "firebase/auth";
import {auth} from "../utils/firebase"
import { useNavigate } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import { addUser,removeUser } from "../utils/userSlice";
import {LANG_DATA, NETFLIX_LOGO} from "../utils/constants"
import { toggleSearch } from '../utils/gptSlice';
import { changeLanguage } from '../utils/configSlice';
const Header = () => {
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const user=useSelector((store)=>store.user);
  const searchgpt=useSelector((store)=>store.gpt.showSearch)
  const handleSignout=()=>{
    signOut(auth).then(() => {
      console.log("signout successfull");
    }).catch((error) => {
      // An error happened.
      navigate("/error")
    });
  }

  //to select language value & dispatch action to update the redux store
  const selectLanguage=(e)=>{
    // console.log(e.target.value);//language value selected
    dispatch(changeLanguage(e.target.value))
  }

  //handle search toggle search and mainContainer
  const handleSearch=()=>{
    dispatch(toggleSearch());
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
    <div className='flex flex-col md:flex-row items-center md:justify-between w-screen z-50 py-3 absolute bg-gradient-to-b from-black'>
        <img className='w-48 md:ml-10' src={NETFLIX_LOGO} alt='netflix-logo'/>
    
        {user!=null && <div className='flex mr-2 ml-2 mt-2 md:mt-0 md:ml-0 md:mr-10 justify-between'>
          {searchgpt && <select onChange={selectLanguage} className='p-2 bg-red-600 text-white mr-4 rounded-md'>
            {LANG_DATA.map((lang)=>{
              return <option value={lang.value}>{lang.name}</option>
            })}
          </select>}
          <button onClick={handleSearch} className='bg-red-600 text-white px-4 py-2 rounded-md mr-4'>{searchgpt?"Home":"Search"}</button>
            <img src={user.photoURL} className='hidden md:inline-block w-10 h-10' alt='user image'/>
            <button className='font-bold text-white' onClick={handleSignout}>Sign Out</button>

          </div>
        } 
    </div>

  )
}

export default Header