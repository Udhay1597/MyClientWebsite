import React, { useContext, useState } from 'react'
import './FoodItem.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext';
const FoodItem = ({id,name,price,description,image}) => {
  
    const {cartItems,addtocart,removefromcart} = useContext(StoreContext);


  return (
    <div className='food-item'>
         <div className="food-item-img-container">
          <img className='food-item-image' src={image} alt="" />
          {!cartItems[id]
          ? <img className='add' onClick={()=> addtocart(id)} src={assets.add_icon_white} alt="" srcset="" />
          : <div className="food-item-counter">
            <img onClick={()=>removefromcart(id)}  src={assets.remove_icon_red} alt="" />
            <p>{cartItems[id]}</p>
            <img onClick={()=>addtocart(id)}  src={assets.add_icon_green} alt="" />
            </div>

          }
         </div>
         <div className="food-items-info">
             <div className="food-item-name-rating">
                <p>{name}</p>
                <img src={assets.rating_starts} alt="" />
              </div>
             <p className='food-items-desc'>{description}</p>
              <p className="food-items-price">₹{price}</p>
          </div> 
    </div>
  )
}

export default FoodItem
