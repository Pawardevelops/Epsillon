import React from 'react'
import './Input.css'

const Input = (props) => {
  return (
    <div className="inp-cont">
        <label htmlFor={props.name}>{props.name}</label>
        <input type={props.type} />
    </div>
  )
}

export default Input