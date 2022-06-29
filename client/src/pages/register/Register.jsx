import { useState } from 'react'
import { Link } from 'react-router-dom'
import './register.css'
import axios from 'axios'

export const Register = () => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false)
   try {
    const res=await axios.post('http://localhost:8985/api/auth/register', {
    username,
    email,
    password,
   });
   res.data && window.location.replace('/login');
   } catch (error) {
    setError(true)
   }
  };
  return (
    <div className='register'>
        <span className="registerTitle">Register</span>
        <form className='registerForm' onSubmit={handleSubmit} >
            <label>Username</label>
            <input  type='text' onClick={e=>setUsername(e.target.value)} className='registerInput' name='username' placeholder='Enter your username' />
            <label>Email</label>
            <input type='email' onChange={e =>setEmail(e.target.value)} className='registerInput' name='email' placeholder='Email' />
            <label>Password</label>
            <input type='password' onChange={e=>setPassword(e.target.value)} name='password' className='registerInput' placeholder='Password' />
            <button className='registerButton' type='submit'>Register</button>
        </form>
        <button className='registerLoginButton'>
        <Link to='/login' className='link'><i className=" fa-solid fa-user"></i> Login</Link>
        </button>
        {error && <p className='error'>Username or email already exists</p>}
        {/* {error && <span>Username or email already exists</span>} */}

    </div>
  )
}
