import React from 'react'
import './CSS/LoginSignup.css'
const LoginSignup = () => {
  return (
    <div className='LoginSignup'>
      <div className="LoginSignup-container">
        <h1>Sign Up</h1>
        <div className="LoginSignup-fields">
          <input type="text" placeholder='Your Name'/>
          <input type="email" placeholder='Email Id' />
          <input type="password" placeholder='Enter Password' />
        </div>
        <button>Continue</button>
        <p className='LoginSignup-Login'>Already have an account?<span>  login Here</span></p>
        <div className="LoginSignup-agree">
          <input type="checkbox" name='' id='' />
          <p>By continuing, i agree to the term of use & privacy policy.</p>
        </div>
      </div>
    </div>
  )
}

export default LoginSignup