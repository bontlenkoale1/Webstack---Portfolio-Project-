import React from 'react'
import './CSS/LoginSignup.css'

const LoginSignup = () => {
    return (
        <div className='loginsignup'>
            <div className="loginsignup-container">
                <h1>Sign Up</h1>
                <div className="loginsignup-fields">
                    <form>
                        <label for="name">Enter your name:</label>
                     <input type="text" placeholder='Your Name' name="name" id="name" required />
                     <label for="email">Enter your email address:</label>
                     <input type="email" placeholder='Your Email Address' />
                     <label for="password">Enter your your password:</label>
                     <input type="password" placeholder='Password' />
                     <label for="password">Enter your password:</label>
                     <input type="password" placeholder='Confirm Password' />
                     <button type="submit">Continue</button>
                     </form>
                </div>
                <p className="loginsignup-login">
                    Already Have An Account?
                    <span>Login Here</span>
                </p>
                <div className="loginsignup-agree">
                    <input type="checkbox" name='' id='' />
                <p>By Continuing, I agree to the terms of use & privacy policy </p>
                </div>
            </div>
        </div>
    )
}

export default LoginSignup