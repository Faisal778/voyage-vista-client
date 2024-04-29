import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import auth from '../../firebase.config';

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null)

    //user creation
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)

    }

    //
    const singInUser = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
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
        singInUser
    }
    return (
        <AuthContext.Provider value = {allValues}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;