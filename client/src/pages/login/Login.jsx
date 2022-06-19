import './login.css'
import React from 'react'
import { Link } from 'react-router-dom'
export const Login = () => {
  return (
    <div className='login'>
        <span className="loginTitle">Login</span>
        <form className='loginForm'>

            <label>Email</label>
            <input type='email' className='loginInput' name='email' placeholder='Email' />
            <label>Password</label>
            <input type='password' name='password' className='loginInput' placeholder='Password' />
            <button type='submit' className='loginButton'>
              <Link to='/' className='link'><i className=" fa-solid fa-user"></i> Login</Link>
            </button>
        </form>
        <button className='loginRegisterButton'>
            <Link to='/register' className='link'> <i className=" fa-solid fa-user-plus"></i> Register</Link>
        </button>
    </div>
  )
}
