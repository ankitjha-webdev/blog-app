import React from 'react'

export const About = () => {
  return (
    // about page component
    <div className='about'>
      {/* about page blog app*/}
      <div className='about-blog'>
        <h1>About Blog App</h1>
        <p>
          This is a simple blog app that I built using React.js.
        </p>
        <p>
          It is a single page application that allows users to create, read,
          update, and delete blog posts.
        </p>
        <p>
          The app is built using the following technologies:  
        </p>
        <ul>
          <li>React.js</li>
          <li>Express.js</li>
          <li>Node.js</li>
          <li>MongoDB</li>
          <li>Bootstrap</li>
        </ul>

        <p>
          The app is deployed on Heroku.  

        </p>
        </div>
      {/* end about page blog app*/}
    </div>
  )
}
