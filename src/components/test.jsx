import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { useAuth } from "../config/Context";
import * as yup from "yup";
import '../index.css';
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { MdAlternateEmail } from 'react-icons/md';
import { BiSolidLockAlt } from 'react-icons/bi';
import { GoAlertFill, GoVerified } from 'react-icons/go';
import { AiOutlineEye, AiOutlineEyeInvisible, AiOutlineUser } from 'react-icons/ai';
import Transition from '../components/Transition';
import { useEffect } from 'react';

const schema = yup.object({
    firstName: yup.string().required("First Name is required"), // Added messages
    lastName: yup.string().required("Last Name is required"),
    email: yup.string().email("Invalid email").required("Email is required"), // Added email validation
    password: yup.string().min(6, "Password must be at least 6 characters").required("Password is required"), // Added min length
}).required();

export default function Test() {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    const [visible, setVisible] = useState(false);
    const { handleSignInWithGoogle, handleSignUp, popup } = useAuth(); // Corrected function name
    const [showTransition, setShowTransition] = useState(true);
    const [signUpError, setSignUpError] = useState(null); // State for sign-up errors

    useEffect(() => {
        window.scrollTo(0, 0);
        const timeout = setTimeout(() => {
            setShowTransition(false);
        }, 3000);
        return () => clearTimeout(timeout);
    }, []);

    const onSubmit = async (data) => {
        setSignUpError(null); // Clear previous errors
        try {
            await handleSignUp(data); // Call the sign-up function from context
        } catch (error) {
            console.error("Sign up error:", error);
            setSignUpError(error.message); // Set the error message in state
        }
    };

    const handleVisibility = () => {
        setVisible(prevStat => !prevStat);
    };

    return (
        <div className="Form-container">
            {showTransition && <Transition />}
            <form className="form" onSubmit={handleSubmit(onSubmit)}> {/* Corrected onSubmit handler */}
                <div className="flex-column">
                    <label>First Name</label>
                </div>
                <div className="inputForm">
                    <span><AiOutlineUser /></span>
                    <input {...register("firstName")} placeholder="Enter Your First Name" className="input" />
                </div>
                {errors.firstName && <p className="alert"><GoAlertFill /> {errors.firstName.message} <GoAlertFill /></p>} {/* Display error message */}

                <div className="flex-column">
                    <label>Last Name</label>
                </div>
                <div className="inputForm">
                    <span><AiOutlineUser /></span>
                    <input {...register("lastName")} className="input" placeholder="Enter Your Last Name" />
                </div>
                {errors.lastName && <p className="alert"><GoAlertFill /> {errors.lastName.message} <GoAlertFill /></p>}

                <div className="flex-column">
                    <label>Email</label>
                </div>
                <div className="inputForm">
                    <span><MdAlternateEmail /></span>
                    <input type="email" {...register("email")} placeholder="Enter Your Email" className="input" />
                </div>
                {errors.email && <p className="alert"><GoAlertFill /> {errors.email.message} <GoAlertFill /></p>}

                <div className="flex-column">
                    <label>Password</label>
                </div>
                <div className="inputForm">
                    <span><BiSolidLockAlt /></span>
                    <input type={visible ? "text" : "password"} {...register("password")} placeholder="Enter Your Password" className="input" />
                    <span className="Eye" onClick={handleVisibility}>{visible ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}</span>
                </div>
                {errors.password && <p className="alert"><GoAlertFill /> {errors.password.message} <GoAlertFill /></p>}

                {signUpError && <p className="alert" style={{color: 'red'}}><GoAlertFill /> {signUpError} <GoAlertFill /></p>} {/* Display sign-up error */}

                <button className="button-submit" type="submit">Sign Up</button>

                <p className="p">Already have an account?
                    <Link to='/login'><span className="span">Login</span></Link>
                </p>
                <p className="p line">Or</p>

                <div className="flex-row">
                    <button className="btn google" onClick={handleSignInWithGoogle}>
                        <FcGoogle /> Sign In with Google
                    </button>
                </div>
            </form>
            {popup && (
                <div className="popup">
                    <GoVerified /><p> Welcome! You have successfully signed up</p>
                </div>
            )}
        </div>
    );
}