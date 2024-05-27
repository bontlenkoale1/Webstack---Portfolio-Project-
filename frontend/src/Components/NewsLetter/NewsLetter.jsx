import React from 'react'
import './NewsLetter.css'

const NewsLetter = () => {
  return (
    <div className='newsletter'>
      <h1>Get Exclusive Offers On Your Email</h1>
      <p>Sign Up Now!</p>
      <div>
        <input type="email" placeholder='Enter Your Email Address' />
        <button>SIGN UP</button>
      </div>
    </div>
  )
}

export default NewsLetter
