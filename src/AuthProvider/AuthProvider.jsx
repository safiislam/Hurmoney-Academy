import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext()
const provider = new GoogleAuthProvider();

const auth = getAuth(app)
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loader, setLoader] = useState(true)


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
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setLoader(false)
            setUser(currentUser)
            console.log(currentUser)
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
        logIn
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;