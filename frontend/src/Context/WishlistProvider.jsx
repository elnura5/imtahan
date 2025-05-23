import React, { createContext, useState } from 'react'


const WishlistContext=createContext()
function WishlistProvider({children}) {
    const local=localStorage.getItem("wishlist")
const [wish, setwish] = useState( local ? JSON.parse(local): [])


  return (
    <WishlistContext.Provider>
        
    {children}
    </WishlistContext.Provider>
  )
}

export default WishlistProvider