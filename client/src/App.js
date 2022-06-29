import React from 'react';
import { useContext } from 'react';
import { Route, Routes } from "react-router";
import { Topbar } from "./components/topbar/Topbar";
import { Context } from './context/Context';
import { About } from './pages/about/About';
import  Home  from './pages/home/Home';
import { Login } from './pages/login/Login';
import { Register } from "./pages/register/Register";
import { Setting } from './pages/settings/Setting';
import { Single } from './pages/single/Single';
import { Write } from './pages/write/Write';


function App() {
  const {user} = useContext(Context);
  // const user = false

  return (
    <div className="App">
     <Topbar />
      <Routes>
          <Route path='/' exact
           element={<Home />} 
           />
          <Route path='/register' element={user ? <Home /> : <Register />} />
          <Route path='/login' element={user ? <Home/> : <Login/>} />
          <Route path='/write' element={user ? <Write/> : <Register/>} />
          <Route path='/setting' element={user ? <Setting/> : <Register/>} />
          <Route path='/about' element={user ? <About/> : <Register/>} />
          <Route path='/post/:postId' element={<Single/>} />
        </Routes>
    </div>
  );
}

export default App;
