import './login.css'
import React from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../../context/Context'
import axios from 'axios'
export const Login = () => {
  const userRef = React.useRef()
  const passwordRef = React.useRef()
  const {dispatch, isFetching} = React.useContext(Context)
  const handleSubmit =  async (e) => {
    e.preventDefault()
    dispatch({type: 'LOGIN_START'})
    try {
      const res = await axios.post("http://localhost:8985/api/auth/login", {
        username: userRef.current.value,
        password: passwordRef.current.value
      })  
      dispatch({type: 'LOGIN_SUCCESS', payload: res.data})
    } catch (error) {
      dispatch({type: 'LOGIN_FAILED'})
    }
  }
  return (
    <div className='login'>
        <span className="loginTitle">Login</span>
        <form className='loginForm' onSubmit={handleSubmit}>

            <label>Username</label>
            <input type='text' className='loginInput' ref={userRef} name='text' placeholder='Enter your username' />
            <label>Password</label>
            <input type='password' name='password' ref={passwordRef} className='loginInput' placeholder='Password' />
            <button type='submit' className='loginButton' disabled={isFetching}>
              <i className=" fa-solid fa-user"></i> Login
            </button>
        </form>
        <button className='loginRegisterButton'>
            <Link to='/register' className='link'> <i className=" fa-solid fa-user-plus"></i> Register</Link>
        </button>
    </div>
  )
}
