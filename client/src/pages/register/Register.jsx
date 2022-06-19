import { Link } from 'react-router-dom'
import './register.css'

export const Register = () => {
  return (
    <div className='register'>
        <span className="registerTitle">Register</span>
        <form className='registerForm'>
            <label>Username</label>
            <input type='text' className='registerInput' name='username' placeholder='Enter your username' />
            <label>Email</label>
            <input type='email' className='registerInput' name='email' placeholder='Email' />
            <label>Password</label>
            <input type='password' name='password' className='registerInput' placeholder='Password' />
            <button type='submit' className='registerButton'>
            <Link to='/register' className='link'> <i className=" fa-solid fa-user-plus"></i> Register</Link>
            </button>
        </form>
        <button className='registerLoginButton'>
        <Link to='/login' className='link'><i className=" fa-solid fa-user"></i> Login</Link>
        </button>
    </div>
  )
}
