import React, { useState } from 'react'
import './Shop.css'
import { Sidebar } from 'react-feather'
import Sidebar_m from './Sidebar_m'
import ShopContent from './ShopContent'

const Shop = () => {

  const [filter,setFilter] = useState("All");

  const getFilter = (e) => {
    setFilter(e);
  }

  return (
    <>
      <div className="shop-cont">
        <Sidebar_m func={(e) => getFilter(e)} />
        <ShopContent fil={filter} />
      </div>
    </>
    
  )
}

export default Shop