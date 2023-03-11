import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar2.css'

const CustomNav = (props) => {
  return (
    <>
        <div className="navbar">
            <div className="logo">{props.header}</div>
            <ul className='nav-mid'>
                <li><Link to={"/"} >{props.link1}</Link></li>
                <li><Link to={"/about"}>{props.link2}</Link></li>
                <li><Link to={"/shop"}>{props.link3}</Link></li>
                <li><Link to={"/blog"}>{props.link4}</Link></li>
                <li><Link to={"/contacts"}>{props.link5}</Link></li>
                <li><Link to={"/cart"}>{props.link6}</Link></li>
            </ul>
        </div>
    </>
  )
}

export default CustomNav