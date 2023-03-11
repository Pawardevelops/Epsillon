import React, { useState } from 'react'
// import Input from './DataSets/Input'
import '../components/DataSets/Input.css'
import './Register.css'

const Register = () => {

  const [uname,SetUname] = useState();
  const [pass,SetPass] = useState();

  const storeVal = () => {
    localStorage.setItem('userData',JSON.stringify({name: uname,password: pass}));
    alert(uname+"  "+pass)
  }


  return (
    <>
      <div className="form-cont">
        <form action="">
        <label htmlFor="username" onChange={(e) => SetUname(e.target.value)}>username</label>
        <input type="text" />
        <label htmlFor="password" onChange={(e) => SetPass(e.target.value)}>password</label>
        <input type="password" />
          <button onClick={() => storeVal()}>Submit</button>
        </form>
      </div>
    </>
  )
}

export default Register