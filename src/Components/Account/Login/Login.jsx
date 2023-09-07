/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import googleIcon from '../../../assets/google.svg';
import githubIcon from '../../../assets/github.svg';
import { WebController } from '../../../ParentContext/Context';

const Login = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    const { loginIn, resetPassword, googleLog, githubLog } = useContext(WebController);
    const navigate = useNavigate();
    const [error, setError] = useState('');

    const loginAccount = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        loginIn(email, password)
            .then(result => {
                const user = result.user;
                form.reset();
                navigate('/');
            }).catch(error => setError(error.message))

    }
    const forgotPassword = () => {
        const email = document.getElementById('email').value;
        resetPassword(email)
            .then(() => {
                alert('We Sent Password Reset Link in Your Email')
            }).catch(error => setError(error.message))
    }
    const google = () => {
        googleLog()
        .then(result => {
            const user = result;
            navigate('/')
        }).catch(error => setError(error.message))
    }
    const github = () => {
        githubLog()
        .then(result => {
            const user = result.user;
            navigate('/')
        }).catch(error => setError(error.message))
    }


    return (
        <div className="register py-5">
            <div className='container py-5'>
                <div className="box px-4 pb-4 pt-3 bg-white bg-opacity-85 rounded-3 shadow border border-dark width-50-responsive mx-auto mt-5">
                    <h3 className='text-center pb-4 text-body-emphasis'>Sign In Your Account</h3>
                    <form className="row g-3" onSubmit={loginAccount}>
                        <div className="col-12">
                            <label htmlFor="email" className="form-label fw-semibold">Email</label>
                            <input type="email" name='email' required className="form-control border-1px rounded-0 bg-opacity-75 bg-white" id="email" />
                        </div>
                        <div className="col-12">
                            <label htmlFor="password" className="form-label fw-semibold">Password</label>
                            <input type="password" name='password' required className="form-control border-1px rounded-0 bg-opacity-75 bg-white" id="password" />
                            <small className='text-danger fw-semibold'></small>
                        </div>
                        <small className='text-danger fw-semibold'>{error}</small>
                        <div className="d-flex justify-content-between"><Link to='/account' className='text-decoration-none text-primary fw-semibold'>Create New Account ?</Link> <p className='text-primary fw-semibold pointer' onClick={forgotPassword}>Forgot Your Password?</p></div>
                        <div className="col-12 text-center">
                            <button type="submit" id='submit' className="btn btn-dark btn-200px rounded-0">Sign In</button>
                        </div>
                        <h5 className='text-center text-secondary m-0 pt-3'>Or You Can Sign In Account Using</h5>
                        <div className="thirdParty d-flex flex-column flex-lg-row justify-content-center align-items-center pb-4 pt-1">

                            <button onClick={google} className='btn mx-2 my-1 border-1px shadow-sm'><img src={googleIcon} alt="Google" /> Sign Up With Google</button>
                            <button onClick={github} className='btn mx-2 my-1 border-1px btn-dark shadow-sm'><img src={githubIcon} alt="GitHub" /> Sign Up With GitHub</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;