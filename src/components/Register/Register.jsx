/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import './Register.css'
import eye from '../../assets/eye-low-vision-solid.svg';
import { AuthContext } from '../Provider/AuthProvider';
import { sendEmailVerification } from 'firebase/auth';

const Register = () => {
    // use auth
    const { createUser } = useContext(AuthContext)

    // some state 
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        // validation 
        setError('')
        setSuccess('')

        createUser(email, password)
            .then(result => {
                const currentUser = result.user;
                form.reset();
                console.log(currentUser);
                sentVerification(currentUser)
                return;
            })
            setSuccess('user register successful')
            .catch(error => {
                setError(error.message)
            })
    }
    // Sent A Email Verification_Function
    const sentVerification = (currentUser) => {
        sendEmailVerification(currentUser)
            .then(() => {
                alert('Email verification sent!')
            })
    }

    // Show & Hide Password_Function
    const handleShowPassword = () => {
        const password = document.getElementById('password')
        password.type === "password" ? password.type = "text" : password.type = "password";
    }
    return (
        <div className='registerContainer'>
            <div className='registerSubContainer'>
                <form onSubmit={handleSubmit}>
                    <h2 className='registerTittle'>Register</h2>
                    <input placeholder='Your Name' type="text" name="" id="" /><br /><br />
                    <input placeholder='Your Email' type="email" name="" id="email" /><img onClick={handleShowPassword} className='Eye' src={eye} /><br /><br />
                    <input placeholder='Your Password' type="password" name="" id="password" /><br /><br />
                    <p><small>Already Have An Account? <Link to="/login">Login</Link></small></p>
                    <button>Register</button><br />
                </form>
                <div>
                    <p className='success'>{success}</p>
                    <p className='error'>{error}</p>
                </div>
            </div>
        </div>
    );
};

export default Register;