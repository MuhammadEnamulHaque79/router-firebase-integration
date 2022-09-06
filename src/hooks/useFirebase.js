import {useEffect, useState } from "react"
import app from "../firebase.init";
import { getAuth,GoogleAuthProvider,onAuthStateChanged,signInWithPopup, signOut} from "firebase/auth";

const auth=getAuth(app);

const useFirebase=()=>{
    const googleProvider = new GoogleAuthProvider();
    const[user,setUser]=useState({});

   const signInWithGoogle=()=>{
        
        signInWithPopup(auth, googleProvider)
        .then((result)=>{
            const user=result.user;
            setUser(user);
            console.log(user);
        })
        .catch((error)=>{
            console.error(error);
        });

    };
    // return[user,setUser];

    const handleSignOut=()=>{
        signOut(auth)
        .then(()=>{

        })
        .catch(()=>{

        })
    }
    useEffect( ()=>{
        onAuthStateChanged(auth,(user)=>{
            setUser(user);
    
        });
    },[]);

    return {user,
        handleSignOut,
        signInWithGoogle
    };
};

export default useFirebase;