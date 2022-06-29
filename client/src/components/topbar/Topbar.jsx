import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../../context/Context';
import './Topbar.css';
export const Topbar = () => {
    const {user, dispatch} = useContext(Context);

    const handleLogout = () => {
        dispatch({type: 'LOGOUT'});
    }
    return (
        <div className='top'>
            <div className="topLeft">
                <i className="topIcon fa-brands fa-facebook"></i>
                <i className="topIcon fa-brands fa-twitter"></i>
                <i className="topIcon fa-brands fa-instagram"></i>
            </div>
            <div className="topCenter">
                <ul className="topList">
                    <li className="topListItem">
                        
                        <Link to='/' className='link'><i className="topIcon fa-solid fa-home"></i>Home </Link>
                    </li>
                    <li className="topListItem">
                        {/* about icon */}
                        <Link to='/about' className='link'><i className="topIcon fa-solid fa-user"></i>About </Link>
                    </li>
                    <li className="topListItem">
                        {/* contact icon */}
                        <Link to='/contact' className='link'><i className="topIcon fa-solid fa-envelope"></i>Contact </Link>
                    </li>
                    <li className="topListItem">
                        {/* write icon */}
                        <Link to='/write' className='link'><i className="topIcon fa-solid fa-pencil-alt"></i>Write </Link>
                    </li>
                    <li className="topListItem" onClick={handleLogout}>
                        {/* logout icon */}
                        {user && "Logout"}
                    </li>
                </ul>
            </div>
            <div className="topRight">
                {/* {
                user ? <Link to='/' className='link'><i className="topIcon fa-solid fa-user"></i>{logoutIcon}</Link> :
            
            <img src="https://i.picsum.photos/id/1010/5184/3456.jpg?hmac=7SE0MNAloXpJXDxio2nvoshUx9roGIJ_5pZej6qdxXs"
            className='topImage'
             alt="" srcset="" />
            } */}
            <span className='username'>{user.username}</span>
                {
                    user ? (
                        <img src={user.profilePic}
                            className='topImage'
                            alt=""/>
                            
                    ) : (
                        <ul className='topList'>
                            <li className="topListItem">
                                <Link to='/login' className='link'><i className="topIcon fa-solid fa-user"></i>Login </Link>
                            </li>
                            <li className="topListItem">
                                <Link to='/register' className='link'><i className="topIcon fa-solid fa-user-plus"></i>Register </Link>
                            </li>
                        </ul>
                    )
                    
                }
                
                <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
            </div>
        </div>
    )
}
