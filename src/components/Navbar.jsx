import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Navbar.css'

const Navbar = () => {
  return(
    <div className="navbar-container">
      <Link to="/"><div className="navbar-title">FIND YOUR FITNESS</div></Link>
      <div className="navbar-categories">
        <Link to="/"><div className="navbar-category">HOME</div></Link>
        <Link to="/strength"><div className="navbar-category">STRENGTH</div></Link>
        <div className="navbar-category">CARDIO</div>
        <div className="navbar-category">WEIGHT LOSS</div>
        <div className="navbar-category">NUTRITION</div>
        <Link to="/"><div className="navbar-category">ABOUT</div></Link>
      </div>
    </div>
  )
}

export default Navbar
