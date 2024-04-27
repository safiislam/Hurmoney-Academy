/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../firebase/firebase.config";
import axios from "axios";

export const AuthContext = createContext()
const provider = new GoogleAuthProvider();

const auth = getAuth(app)
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loader, setLoader] = useState(false)


    const signIn = (email, password) => {
        setLoader(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const logIn=(email,password)=>{
        setLoader(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    const logOut = () => {
        setLoader(true)
        return signOut(auth)
    }
    const updatePro = ({ name, url }) => {
        setLoader(true)
        return (updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: url
        }))
    }
    const googleSignIn = () => {
        setLoader(true)
        return signInWithPopup(auth, provider)
    }
    useEffect(() => {
        // setLoader(true)
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            if(currentUser){
                setLoader(true)
                axios.post('https://summry-camp-school-server.vercel.app/jwt',{email:currentUser?.email} )
                // axios.post('http://localhost:5000/jwt',{email:currentUser?.email} )
                .then(data=>{
                    localStorage.setItem('access-token',data.data.token)
                    setUser(currentUser)
                    setLoader(false)
                })
            }
            else{
                setUser(null)
                localStorage.removeItem('access-token')
            }

            
            
            
        })
        return () => {
            return unsubscribe()
        }
    }, [])

    const authInfo = {
        user,
        signIn,
        logOut,
        loader,
        googleSignIn,
        updatePro,
        logIn,
        setLoader
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;