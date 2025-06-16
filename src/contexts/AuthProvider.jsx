import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase.init";

const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user,setUser]= useState(null);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signInUser =(email,password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password);
  };

  useEffect(()=>{
    const unSubscribe = onAuthStateChanged(auth,(currentUser)=>{
      setUser(currentUser);
      setLoading(false)
      console.log('User in the auth state change',currentUser);
    })
    return ()=>{
      unSubscribe
    }
  },[])
  const authInfo = {
    loading,
    user,
    createUser,
    signInUser
  };
 return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;

};

export default AuthProvider;
