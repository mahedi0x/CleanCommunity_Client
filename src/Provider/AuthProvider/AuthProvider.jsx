import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../../firebase/firebase.config";
import { GoogleAuthProvider } from "firebase/auth";
import Swal from 'sweetalert2';

export const AuthContext = createContext();
const auth = getAuth(app);


const provider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(true);


    const createUser = (email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signInUser = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    const forgotPassword = (email) =>{
       return sendPasswordResetEmail(auth, email);
    }

    const createUserByGoogle = () =>{
        return signInWithPopup(auth, provider);
    }

    const updateUser = (updatedData) =>{
        updateProfile(auth.currentUser, updatedData);
    }

    const SignOutUser = () =>{
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) =>{
            setUser(currentUser);
            setLoading(false);
        });
        return () =>{
            unsubscribe();
        }
    }, []);



    const loginToast = () =>{
        Swal.fire({
            title: "Login Successful! 🎉",
            text: "Welcome back!",
            icon: "success",
            confirmButtonText: "Continue",
            customClass: {
                // Updated classes:
                confirmButton: "bg-green-700 text-white font-semibold hover:bg-green-800",
              },
        });          
    };
    const registerToast = () =>{
        Swal.fire({
        title: "Successfully Registered!",
        text: `Thank You ! `,
        icon: "success",
        confirmButtonText: "Continue",
        });
    }

    const logOutToast = () =>{
        Swal.fire({
        title: "Log Out Successful!",
        text: `Thank You!`,
        icon: "success",
        confirmButtonText: "Continue",
        });
    }
    // const BookConsultation = (name) =>{
    //     Swal.fire({
    //     title: "Successfully Booked!",
    //     text: `Thank You, ${name} !`,
    //     icon: "success",
    //     confirmButtonText: "Continue",
    //     });
    // }


   const authData = {
    createUser,
    signInUser,
    forgotPassword,
    createUserByGoogle,
    SignOutUser,
    updateUser,
    user,
    setUser,
    loading,
    setLoading,
    loginToast,
    registerToast,
    logOutToast,
    email, 
    setEmail
   };

    return <AuthContext value={authData}>
        {children}
    </AuthContext>
};

export default AuthProvider;