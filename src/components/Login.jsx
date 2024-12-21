import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import '../index.css';
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { MdAlternateEmail } from 'react-icons/md';
import { BiSolidLockAlt } from 'react-icons/bi';
import { GoAlertFill, GoVerified } from 'react-icons/go';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { useAuth } from "../config/Context";

const schema = yup.object({
    email: yup.string().required(),
    password: yup.string().required(),
}).required();

export default function Login() {
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(schema)
    });

    const [visible, setVisible] = useState(false);
    const { handleSignInWithEmailAndPassword, handleSignInWithGoogle, user, popup } = useAuth();
    const [loginError, setLoginError] = useState(null);

    useEffect(() => {
        if (user && user.email !== 'admin@gmail.com') {
            navigate('/');
        }
    }, [user, navigate]);

    const handleVisibility = () => {
        setVisible(prevStat => !prevStat);
    };

    const ADMIN_EMAIL = 'admin@gmail.com'; 
    const ADMIN_PASSWORD = 'admin123'; 

    const onSubmit = async (data) => {
        setLoginError(null);

        if (data.email === ADMIN_EMAIL && data.password === ADMIN_PASSWORD) {
            console.log("Admin Login Successful");
            navigate('/admin');
            console.log("Navigation called");
            return;
        }

        try {
            await handleSignInWithEmailAndPassword(data);
            reset()
        } catch (error) {
            setLoginError(error.message);
            console.error("Login Error:", error);
        }
    };

    return (
        <div className="Form-container" id="login-container">
            <form className="form" id="login-form" onSubmit={handleSubmit(onSubmit)}>
                <div className="flex-column">
                    <label>Email </label>
                </div>
                <div className="inputForm">
                    <span>
                        <MdAlternateEmail />
                    </span>
                    <input
                        type="email"
                        {...register("email", { required: "Email Address is required" })}
                        aria-invalid={errors.email ? "true" : "false"}
                        placeholder="Enter Your Email"
                        className="input"
                    />
                </div>
                {errors.email?.type === 'required' && (
                    <p className="alert"><GoAlertFill /> Email is required <GoAlertFill /></p>
                )}

                <div className="flex-column">
                    <label>Password </label>
                </div>
                <div className="inputForm">
                    <span>
                        <BiSolidLockAlt />
                    </span>
                    <input
                        type={visible ? "text" : "password"}
                        {...register("password", { required: "Password is required" })}
                        aria-invalid={errors.password ? "true" : "false"}
                        placeholder="Enter Your Password"
                        className="input"
                    />
                    <span className="Eye" onClick={handleVisibility}>
                        {visible ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
                    </span>
                </div>
                {errors.password?.type === 'required' && (
                    <p className="alert"><GoAlertFill /> Password is required <GoAlertFill /></p>
                )}

                <button className="button-submit" type="submit">Log In</button>
                <p className="p">Doesn't have an account?
                    <Link to="/signup">
                        <span className="span">Sign Up</span>
                    </Link>
                </p>
                <p className="p line">Or</p>

                <div className="flex-row">
                    <button className="btn google" onClick={handleSignInWithGoogle}>
                        <FcGoogle />Sign In with Google
                    </button>
                </div>

                {popup && (
                    <div className="popup">
                        <GoVerified /> <p> Welcome Back!</p>
                    </div>
                )}
                {loginError && <p style={{ color: 'red' }}>{loginError}</p>}
            </form>
        </div>
    );
}   