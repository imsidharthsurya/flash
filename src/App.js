import {createBrowserRouter,RouterProvider} from "react-router-dom"
import Login from "./components/Login";
import Browse from "./components/Browse";
import {onAuthStateChanged } from "firebase/auth";
import { auth } from "./utils/firebase";
import { useEffect } from "react";
import {useDispatch} from "react-redux"
import { addUser,removeUser } from "./utils/userSlice";
function App() {

  const dispatch=useDispatch();
  const appRouter=createBrowserRouter([
    {
      path:"/",
      element:<Login/>
    },
    {
      path:"/browse",
      element:<Browse/>
    }
  ])

  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in or signedup
        console.log("user auth changed")
        console.log("user obj is: ",user.uid)
        const {uid,email,displayName,photoURL} = user;
        dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}));

        
      } else {
        dispatch(removeUser());
      }
    });
  },[])
    
  return (
      <div className="App">
        <RouterProvider router={appRouter}/>
      </div>
  );
}

export default App;
