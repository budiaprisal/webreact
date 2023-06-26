import * as React from 'react'
import './register.scss'
import { RegisterBg } from '../../Assets'
import { Input, Password } from '../../Components'

const Register = () => {
  return (
    <div className="main-page">
      <div className="left">
        <img src={RegisterBg} className="bg-image" />
        <p>Left</p>
      </div>
      <div className="right">
        <p className="title">Form Register</p>
        <Input />
        <Password/>
      </div>
    </div>
  )
}
export default Register
