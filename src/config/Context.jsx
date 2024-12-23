import React, { createContext, useContext, useEffect, useState } from "react";
import { getAuth, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-auth.js";
import { auth, googleprovider } from "./Firebase";

const AuthContext = createContext();

export const useAuth = () => {
    return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [popup, setPopup] = useState(false);
    
    const handleSignInWithGoogle = async () => {
        try {
            await signInWithPopup(auth, googleprovider);
    } catch (err) {
        console.error(err);
    }
};

    const handleSignUp = async (data) => {
        try {
            await createUserWithEmailAndPassword(auth, data.email, data.password);
            console.log("Account Created!");
            console.log("Form data:", data);
            setPopup(true);
            setTimeout(() => {
                setPopup(false);
        }, 5000);
    } catch (error) {
        console.log(error.message);
    }
};

const handleSignInWithEmailAndPassword = async (email, password) => {
    try {
        await signInWithEmailAndPassword(auth, email, password);
        console.log("logged in successfully");
        setPopup(true);
        setTimeout(() => {
            setPopup(false);
        }, 5000);
    }
    catch (err) {
        console.error("Error signing in:", err);
    }
};

useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
        console.log("Auth State Changed:", user);
        setUser(user);
    });

    return () => unsubscribe(); 
}, []);

    const contextValue = {
        user,
        popup,
        handleSignInWithEmailAndPassword,
        handleSignInWithGoogle,
        handleSignUp,
    };

    return (
        <AuthContext.Provider value={contextValue}>
            {children}
        </AuthContext.Provider>
    );
};
