import Header from "./Header";
import { useState,useRef } from "react";
import { validateData } from "../utils/validate";
import {createUserWithEmailAndPassword,signInWithEmailAndPassword,updateProfile} from "firebase/auth"
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import {addUser} from "../utils/userSlice"
import { BG_IMAGE, USER_AVATAR } from "../utils/constants";

const Login=()=>{

    const dispatch=useDispatch();
    const email=useRef(null);
    const password=useRef(null);
    const name=useRef(null);
    const [loginStatus,setLoginStatus]=useState(true);
    const [formError,setFormError]=useState("");
    const toggleLogin=()=>{
        setLoginStatus(!loginStatus);
    }
    const handleLogin=()=>{
        if(!loginStatus && name.current.value==""){
                setFormError("Please Enter Name");
        }else{
            // console.log("login is clicked");
            const validateError=validateData(email.current.value,password.current.value);
            if(validateError==null){
                setFormError(null);
                //when valide email, name and password now we can go with login and signup
                if(!loginStatus){
                    //signup case
                    
                    createUserWithEmailAndPassword(auth,email.current.value,password.current.value)
                    .then((userCredential) => {
                        // Signed up 
                        const user = userCredential.user;
                        updateProfile(auth.currentUser, {
                            displayName: name.current.value,photoURL: USER_AVATAR
                          }).then(() => {
                            // Profile updated!
                            // console.log("signup success user is ",user);
                            const {uid,email,displayName,photoURL} = auth.currentUser;
                            dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}));
                            // console.log("Profile display name updated")
                          }).catch((error) => {
                            // An error occurred
                            setFormError(error);
                          });
                        
                    })
                    .catch((error) => {
                        const errorCode = error.code;
                        const errorMessage = error.message;
                        setFormError(errorCode+" "+errorMessage)
                        // console.log("error is: ",errorCode,errorMessage);
                    });
                }else{
                    //login case
                    signInWithEmailAndPassword(auth, email.current.value,password.current.value)
                    .then((userCredential) => {
                        // Signed in 
                        const user = userCredential.user;
                        console.log("sign in success: ",user);
                        // ...
                    })
                    .catch((error) => {
                        const errorCode = error.code;
                        const errorMessage = error.message;
                        setFormError(errorCode+" "+errorMessage);
                    });
                }
                
            } else{//not valid mail or password
                setFormError(validateError);
            }
        }
        console.log(formError)
    }
    return (
        <div>
            <Header/>
            <img className="h-screen w-full object-cover absolute z-10" src={BG_IMAGE} alt="bg-image"/>
            
                <form onSubmit={(e)=>e.preventDefault()} className="h-[75%] bg-opacity-80 md:w-4/12 absolute inline-block px-10 py-4 text-white bg-black z-40 my-[20%] md:my-[7%] mx-auto top-0 left-0 bottom-0 right-0">
                    <h1 className="text-3xl font-bold py-8">{loginStatus?"Sign In":"Sign Up"}</h1>
                    {!loginStatus && <input ref={name} className="bg-opacity-40 text-white w-full rounded-lg my-2 border border-gray-500 p-3 bg-black" type="text" placeholder="Your Name"/>}
                    <input ref={email} className="bg-opacity-40 text-white w-full rounded-lg my-2 border border-gray-500 p-3 bg-black" type="text" placeholder="Email"/>
                    <input ref={password} className="bg-opacity-40 text-white w-full rounded-lg my-2 border border-gray-500 p-3 bg-black" type="password" placeholder="Password"/>
                    
                    <p className="font-bold text-red-500">{formError}</p>
                    <button onClick={handleLogin} className="w-full rounded-lg my-2 border border-gray-500 p-3 bg-red-600 font-bold">{loginStatus?"Sign In":"Sign Up"}</button>

                    <p className="my-3 text-gray-300">{loginStatus?"New to Netflix? ":"Already a Member? "}<span onClick={toggleLogin} className="font-bold cursor-pointer text-white">{loginStatus?"Sign up now.":"Sign in now."}</span></p>
                </form>
            
        </div>
        
    )
}

export default Login;