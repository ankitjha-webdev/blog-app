import { Sidebar } from '../../components/sidebar/Sidebar'
import'./setting.css'
import React from 'react'
import pp from '../../components/sidebar/profile.jpg'
export const Setting = () => {
  return (
    <div className='settings'>
        <div className="settingsWrapper">
           <div className="seetingsTitle">
            <span className="settingsUpdateTitle">Update Your Account   </span>
            <span className="settingsDeleteTitle">Delete Your Account   </span>
           </div>
           <form action="" className='settingsForm'>
            <label htmlFor="">Profile Picture</label>
            <div className="settingsPP">
              <img src={pp}
              className='settingsPPImg'
              alt="" srcset="" />
              <label htmlFor="fileInput">
              <i className="settingsPPIcon fa-solid fa-user"></i>
              </label>
              <input type="file" id="fileInput" style={{display:"none"}}/>
            </div>
            <label htmlFor="">Your Username</label>
            <input type="text" placeholder="Username" className='settingsInput'/>
            <label htmlFor="">Your Email</label>
            <input type="text" placeholder="Email" className='settingsInput'/>
            <label htmlFor="">Your Password</label>
            <input type="Password"  placeholder=' Password ' className='settingsInput'/>
            {/* <label htmlFor="">Confirm Password</label>  
            <input type="text" placeholder="Confirm Password" className='settingsInput'/> */}
            <button className='settingsButton'>Update</button>
           </form>
        </div>
        <Sidebar/>
    </div>
  )
}
