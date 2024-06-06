import { createContext, useEffect, useState } from "react";

import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import auth from "./firebase.config";
import { FacebookAuthProvider } from "firebase/auth/cordova";

export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);


  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const googleSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const githubProvider = new GithubAuthProvider();
  const githubLogin = () =>{
    setLoading(true);
    return signInWithPopup(auth, githubProvider);  
}

const facebookSignin = () => {
    setLoading(true);
    return signInWithPopup(auth, FacebookAuthProvider);
  };
  const updateProfiles = (name, photo) => {
    updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

useEffect(() => {
  const unsubscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser);
      console.log('current user', currentUser);
  });
  return () => {
      return unsubscribe();
  }
}, [])

  const authInfo = {
    user,
    loading,
    createUser,
    googleSignIn,
    facebookSignin,
    signIn,
    updateProfiles,
    logOut,
    githubLogin,
  };

  return (
    <AuthContext.Provider value={authInfo}>
            {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;