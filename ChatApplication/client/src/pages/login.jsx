import { useStateProvider } from "@/context/StateContext";
import { firebaseAuth } from "@/utils/FirebaseConfig";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import axios from 'axios';
import { FcGoogle } from "react-icons/fc";
import { CHECK_USER_ROUTE } from "@/utils/ApiRoutes";
import { reducerCases } from "@/context/constants";

function login() {
  const router = useRouter();
  
  const [{userInfo,newUser}, dispatch] = useStateProvider();

  useEffect(() => {
    if(userInfo?.id && !newUser) router.push("/");
  },[userInfo, newUser]);

  const handlelogin = async () => {
    const provider = new GoogleAuthProvider();
    const {
      user:{ displayName: name, email, photoUrl: profileImage },
    } = await signInWithPopup(firebaseAuth, provider).catch((err) =>{
      if (err.code === 'auth/cancelled-popup-request') {
        console.log('Popup request was cancelled.');
        // You can also notify the user, or reattempt the sign-in
    } else {
        console.error('An error occurred during sign-in:', err.message);
    }
    // Return early or throw to avoid proceeding with a canceled sign-in
    return;
    });
    try{
      if(email){
        const { data } = await axios.post(CHECK_USER_ROUTE, { email });
        
        if(!data.status) {
          dispatch({type: reducerCases.SET_NEW_USER, newUser: true});
          dispatch({
            type:reducerCases.SET_USER_INFO,
            userInfo:{
              name,
              email,
              profileImage,
              status:"",
            },
          })
          router.push("/onboarding");
        } else {
          const {id, name, email, profilePicture:profileImage, status} = data.data;
          dispatch({
            type:reducerCases.SET_USER_INFO,
            userInfo:{
              id,
              name,
              email,
              profileImage,
              status,
            },
          });
          router.push("/");
        }
      }
    }catch(err){
      console.log(err);
      if (err.response) {
        // Server responded with a status other than 2xx
        console.error('Error response from server:', err.response.data);
    } else if (err.request) {
        // No response from server
        console.error('No response received:', err.request);
    } else {
        // Other error
        console.error('Error setting up request:', err.message);
    }
    }
    
  };
  return <div className = "flex justify-center items-center bg-panel-header-background h-screen w-screen flex-col gap-6">
    <div className="flex items-center justify-center gap-2 text-white">
      <Image src="/saarthi.gif" alt="Saarthi" height={300} width={300} />
      <span className="text-7xl">Saarthi</span>
    </div>
    <button className="flex items-center justify-center gap-7 bg-search-input-container-background p-5 rounded-lg" 
    onClick={handlelogin}>
      <FcGoogle className="text-4xl" />
      <span className="text-white text-2xl">Login with Google</span>
    </button>
    </div>
}

export default login;
