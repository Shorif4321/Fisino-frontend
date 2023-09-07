/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { createContext, useEffect, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../firebase.init';

const auth = getAuth(app);
export const WebController = createContext();

const Context = ({ children }) => {
    const google = new GoogleAuthProvider();
    const github = new GithubAuthProvider();
    const [userInfo, setUserInfo] = useState({});
    const [loader, setLoader] = useState(true);

    const createAccount = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const loginIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    const resetPassword = (email) => {
        return sendPasswordResetEmail(auth, email)
    }
    useEffect(() => {
        const Logged = onAuthStateChanged(auth, (user) => {
            setUserInfo(user);
            setLoader(false);
        })
        return () => {
            Logged();
        }
    }, []);
    const logOut = () => {
        signOut(auth)
            .then(() => { }).catch(error => console.log(error.message))
    }
    const verify = () => {
        sendEmailVerification(auth.currentUser)
            .then(() => { alert('We Sent Verification Email in Your Account') })
    }
    const googleLog = () => {
        return signInWithPopup(auth, google)
    }
    const githubLog = ()=> {
        return signInWithPopup(auth, github)
    }

    const Information = { createAccount, loginIn, resetPassword, userInfo, loader, logOut, verify, googleLog, githubLog };
    return (
        <WebController.Provider value={Information}>
            {children}
        </WebController.Provider>
    );
};

export default Context;