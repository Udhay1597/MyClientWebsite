import React, { useState } from 'react'
import './home.css' 
import Header from '../../Components/Header/Header.jsx';
import ExploreMenu from '../../Components/ExploreMenu/ExploreMenu.jsx';
import FoodDisplay from '../../Components/FoodDisplay/FoodDisplay.jsx';
import AppDownload from '../../Components/App Download/AppDownload.jsx';

const Home = () => {
  const [category,setCategory] = useState("All")
  return (
    <div>
     
      <Header></Header>
      <ExploreMenu category = {category} setCategory={setCategory}/>
      <FoodDisplay category ={category}/>
      <AppDownload/>
    </div>
  )
}

export default Home