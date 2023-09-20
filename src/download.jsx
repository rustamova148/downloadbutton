import React from 'react'
import { NavLink } from 'react-router-dom'
import PDF from "../src/pdf/sened.pdf"
const Download = () => {
  return (
    <button><NavLink to={PDF} target='_blank' className='nav-link' download>Yüklə</NavLink></button> 
  )
}

export default Download