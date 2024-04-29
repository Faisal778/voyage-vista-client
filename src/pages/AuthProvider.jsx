import { FacebookAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import auth from '../../firebase.config';
import { GoogleAuthProvider } from "firebase/auth";

export const AuthContext = createContext(null);

//social media auth providers
const provider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null)

    //user creation
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)

    }

    //user sign in 
    const singInUser = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    }


    //google sign in
    const googleLogin =() =>{
        return signInWithPopup(auth, provider)
    }
    //facebook log in

    const facebookLogin = () => {
        return signInWithPopup(auth, facebookProvider)
    }

    //logout
    const logout = () => {
        setUser(null)
        signOut(auth)
    }

    //observer
    useEffect(() => {
        onAuthStateChanged(auth, (user) =>{
            if (user){
             setUser(user)
            }
        });
    }, [])


    const allValues = {
        createUser,
        singInUser,
        googleLogin,
        logout,
        user,
        facebookLogin

    }
    return (
        <AuthContext.Provider value = {allValues}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;