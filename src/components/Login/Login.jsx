/* eslint-disable no-unused-vars */
import google from '../../assets/google.png'
import facebook from '../../assets/Fb.jpg'
import insta from '../../assets/Instagram.jpg'
import eye from '../../assets/eye-low-vision-solid.svg'
import './Login.css'
import React, { useContext, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider'
const Login = () => {
    // use Auth
    const { googleSignIn, resetPassword, signIN } = useContext(AuthContext)

    // some state 
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')
    const emailRef = useRef();
    // Login_Function
    const handleSubmit = (event) => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        // validation 
        setError('')
        setSuccess('')

        signIN(email, password)
            .then(result => {
                const currentUser = result.user;
                console.log(currentUser);
                form.reset();
                if (!currentUser.emailVerified) {
                    alert('please First verified your email')
                    return;
                }
                setSuccess('Login Successful')
                

            })
            .catch(error => {
                setError(error.message)
            })


    }
    // ResetPassword_Function
    const handleResetPassword = () => {
        const email = emailRef.current.value;
        if (!email) {
            alert('Enter Your Email')
        }
        resetPassword(email)
            .then(() => {
                alert('check your email')
            })
    }
    // GoogleSignIn_Function
    const handleGoogleSignIn = () => {
        googleSignIn()
    }
    // Show & Hide Password_Function
    const handleShowPassword = () => {
        const password = document.getElementById('password')
        password.type === "password" ? password.type = "text" : password.type = "password";
    }
    return (
        <div className='loginContainer'>
            <div className='loginSubContainer'>
                <span className='borderline'></span>
                <form onSubmit={handleSubmit}>
                    <h2 className='loginTittle'>Login</h2>
                    <input placeholder='Your Email' ref={emailRef} type="email" name="" id="email" /><br /><br />
                    <input placeholder='Your Password' type="password" name="" id="password" /><img onClick={handleShowPassword} className='eye' src={eye} /><br /><br />
                    <small onClick={handleResetPassword} className='ForgetPassword'>Forget Password</small>
                    <p><small>New User? <Link to="/register">Register</Link></small></p>
                    <button >Login</button><br />
                    <hr />
                    <p><small>Login With Social Media</small></p>
                    <div className='imgContainer'>
                        <img onClick={handleGoogleSignIn} className='google' src={google} alt="" />
                        <img className='facebook' src={facebook} alt="" />
                        <img className='instagram' src={insta} alt="" />
                    </div>
                </form>
                <div>
                    <p className='success'>{success}</p>
                    <p className='error'>{error}</p>
                </div>
            </div>
        </div>
    );
};

export default Login;