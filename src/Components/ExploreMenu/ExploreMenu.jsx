import React from 'react'
import './ExploreMenu.css'
import {menu_list} from '../../assets/assets'

const ExploreMenu = () => {
  return (
    <div className='explore-menu' id='explore-menu'>
        <h1>Discover paints online, make your world colorful</h1>
        <p className='explore-menu-text'>Enter our virtual paint haven, where colors await your choice with a tap. Say goodbye to queues and aisles, shop paints online and transform your space effortlessly</p>
        <div className="explore-menu-list">
          {menu_list.map((item,index)=>{
            return( 
                <div key={index} className='explore-menu-list-item'>
                    <img src={item.menu_image} alt="" />
                    {/* <p>{item.menu_name}</p> */}
                </div>
            )
          })}
        </div>
    </div>
  )
}

export default ExploreMenu
