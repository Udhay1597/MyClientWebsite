import React from 'react'
import Navbar from './Components/Navbar.jsx'

import {Routes, Route} from 'react-router-dom'
import Home from './Pages/Home/Home.jsx'
import Footer from './Components/Footer/Footer.jsx'
const App = () => {
  return (
  <>
     <div className='app'>
       <Navbar/>
       <Home></Home>
       <Routes> 
       <Route path='/Home' element= {<Home/>}/>
       <Route path='/cart' element= {<cart/>}/>
       <Route path='/placeorder' element= {<placeorder/>}/>
      </Routes>
    </div>
    <Footer/>
  </>
   
  )
}

export default App
