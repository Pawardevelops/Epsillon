import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Navbar.css'
import { Search } from 'react-feather'
import { Heart } from 'react-feather'
import { ShoppingBag } from 'react-feather'


const Navbar = (props) => {

  let navigate = useNavigate();

  const goHome = () => {
      navigate("/")
  }

  return (
    <>
        <div className="navbar">
            <div className="logo" onClick={() => goHome()}>{props.header}</div>
            <ul className='nav-mid'>
                <li><Link to={"/"} >{props.link1}</Link></li>
                <li><Link to={"/about"}>{props.link2}</Link></li>
                <li><Link to={"/shop"}>{props.link3}</Link></li>
                <li><Link to={"/blog"}>{props.link4}</Link></li>
                <li><Link to={"/contacts"}>{props.link5}</Link></li>
                <li><Link to={"/cart"}>{props.link6}</Link></li>
            </ul>
            <ul className="nav-end">
              <li className='login'><Link to={"/login"}>{props.login}</Link></li>
              <li className='nav-icons'><Search /></li>
              <li className='nav-icons'><Heart /></li>
              <li className='nav-icons'><ShoppingBag /></li>
            </ul>
        </div>
    </>
  )
}

export default Navbar