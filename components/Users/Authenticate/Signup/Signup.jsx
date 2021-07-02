import { useRef } from 'react';
import styles from './Signup.module.css';
import NavLink from 'next/link';

const SignUp = props => {
    const emailRef = useRef();
    const passwordRef = useRef();

    const submitFormHandler = (event) => {
        event.preventDefault();

        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        const reqBody = {
            email : email,
            password : password,
            returnSecureToken : true
        }
        const data = JSON.stringify(reqBody);
        console.log(data);
        signUp(data);
    }

    const signUp = async (formData) => {
        const res = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAOXb4C0jvnF_vSnf6JCUGk_0JmZ1_Lo4Q',{
            method : 'POST',
            body : formData,
            headers : {
                "Content-Type" : "application/json"
            }
        });

        const data = await res.json();
        console.log(data);
    }

    return (
        <div className={styles['sign-up']}>
            <div className={styles['card']}>
                <form onSubmit={submitFormHandler} className={styles['form-controls']}>
                    <div className={styles['form-control']}>
                        <label>Email</label>
                        <input type="text" ref={emailRef} />
                    </div>
                    <div className={styles['form-control']}>
                        <label>Password</label>
                        <input type="password" ref={passwordRef} />
                    </div>
                    <div className={styles['actions']}>
                        <button type="submit">Sign Up</button>
                    </div>
                </form>
                <div className={styles['login']}>
                    <span className={styles['login-label']}>Already have an account?</span>
                    <button className={styles['btn-login']}><NavLink href="/login">Login</NavLink></button>
                </div>
            </div>
        </div>
    );
}

export default SignUp;