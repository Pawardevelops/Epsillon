import React from 'react'
import './Sidebar.css'

const Sidebar_m = ({func}) => {
  return (
    <>
        <div className="sidebar-cont">
            <button onClick={() => func("All")} className='sidebar-btn'>All</button>
            <button onClick={() => func("red")} className='sidebar-btn'>Red</button>
            <button onClick={() => func("green")} className='sidebar-btn'>Green</button>
            <button onClick={() => func("blue")} className='sidebar-btn'>Blue</button>
            <button onClick={() => func("yellow")} className='sidebar-btn'>Yellow</button>
            {/* <button onClick={() => func("men")} className='sidebar-btn'>women</button> */}
        </div>
    </>
  )
}

export default Sidebar_m