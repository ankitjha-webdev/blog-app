import './home.css'
import { Header } from '../../components/header/Header'
import { Posts } from '../../components/posts/Posts'
import { Sidebar } from '../../components/sidebar/Sidebar'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Context } from '../../context/Context'
import { useContext } from 'react'
 const Home = () => {
  const [posts, setPosts] = useState([])
  const {user } = useContext(Context)

  useEffect(() =>{
    const fetchPosts = async () =>{
      const res= await axios.get("http://localhost:8985/api/posts/")
      console.log(res.data)
      // setPosts(res.data)
    }
    fetchPosts()
  },[])
  return (
    <>
      <Header />
    <div className='home'>
      <Posts/>
      <Sidebar/>
      
    </div>
    </>
  )
}
export default Home
