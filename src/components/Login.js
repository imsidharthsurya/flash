import Header from "./Header";
import { useState } from "react";

const Login=()=>{

    const [loginStatus,setLoginStatus]=useState(true);
    const toggleLogin=()=>{
        setLoginStatus(!loginStatus);
    }
    return (
        <div>
            <Header/>
            <img className="absolute z-10" src="https://assets.nflxext.com/ffe/siteui/vlv3/ff5587c5-1052-47cf-974b-a97e3b4f0656/065df910-dec3-46ae-afa8-7ad2b52dce40/IN-en-20240506-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="bg-image"/>
            
                <form onSubmit={(e)=>e.preventDefault()} className="h-[75%] bg-opacity-80 w-4/12 absolute inline-block px-10 py-4 text-white bg-black z-40 my-[7%] mx-auto top-0 left-0 bottom-0 right-0">
                    <h1 className="text-3xl font-bold py-8">{loginStatus?"Sign In":"Sign Up"}</h1>
                    {!loginStatus && <input className="bg-opacity-40 text-white w-full rounded-lg my-2 border border-gray-500 p-3 bg-black" type="text" placeholder="Your Name"/>}
                    <input className="bg-opacity-40 text-white w-full rounded-lg my-2 border border-gray-500 p-3 bg-black" type="email" placeholder="Email"/>
                    <input className="bg-opacity-40 text-white w-full rounded-lg my-2 border border-gray-500 p-3 bg-black" type="password" placeholder="Password"/>
                    <button className="w-full rounded-lg my-2 border border-gray-500 p-3 bg-red-600 font-bold">{loginStatus?"Sign In":"Sign Up"}</button>

                    <p className="my-3 text-gray-300">{loginStatus?"New to Netflix? ":"Already a Member? "}<span onClick={toggleLogin} className="font-bold cursor-pointer text-white">{loginStatus?"Sign up now.":"Sign in now."}</span></p>
                </form>
            
        </div>
        
    )
}

export default Login;