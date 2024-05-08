import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";
export const StoreContext = createContext(null)

const StoreContextProvider = (props) => {

    const[cartItems,setcartItems] =useState({})

    const addtocart = (itemId)=>{
           if(!cartItems[itemId]) 
           {
            setcartItems((prev)=>({...prev,[itemId]:1}))
           }

           else
           {
            setcartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
           }

    }
    
    const removefromcart =(itemId)=>{
        setcartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }

    useEffect(()=>{
        console.log(cartItems);
    },[cartItems])

    const contextValue ={
          food_list, 
          cartItems, 
          setcartItems,
          addtocart,
          removefromcart

    }
    return (
        <StoreContext.Provider value ={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider