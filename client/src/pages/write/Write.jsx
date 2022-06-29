import "./write.css"
import React from 'react'
export const Write = () => {
  return (
    <div className='write'>
        <img src="https://i.postimg.cc/cHhjnHyX/https-postimg-cc-mt3-VWXT8.jpg"
        className="writeImg"
        alt="" />
        <form className="writeForm">
            <div className="writeFormGroup">
                <label htmlFor="fileInput">
                <i className="writeIcon fa-solid fa-folder-plus"></i>
                </label>
                <input type="file" className="writeFormControl" id="fileInput" style={{display:"none"}}/>
                <input type="text" className="writeInput" id="writeTitle" autoFocus={true} placeholder="Title" />
            </div>
            <div className="writeFormGroup">
                <textarea className="writeInput writeText" type="text" id="writeContent" placeholder="Write your story..........."></textarea>
            </div>
          <button className="writeSubmit">Publish</button>
        </form>
    </div>
  )
}
