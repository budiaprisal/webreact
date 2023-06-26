import React from 'react'
import './input.scss'

const Input = () => {
  return (
    <div className="input-wrapper">
      <p className="label">Username</p>
      <input className="input" placeholder="Form Input" />
    </div>
  )
}

export default Input
