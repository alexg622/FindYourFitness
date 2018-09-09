import React from "react"
import { Link } from 'react-router-dom'
import '../styles/Navbar.css'

const Navbar = ({ marginTop }) => {

  return(
    <div className="wow fadeIn delay-2s navbar-container">
      <Link to="/"><div className="navbar-title">FIND YOUR FITNESS</div></Link>
      <div className="navbar-categories">
        <Link to="/"><div className="navbar-category">HOME</div></Link>
          <Link to={{pathname: "/strength", state: {margin: marginTop}}}><div className="home-category">STRENGTH</div></Link>
          <Link to={{pathname: "/cardio", state: {margin: marginTop}}}><div className="home-category">CARDIO</div></Link>
          <Link to={{pathname: "/weightLoss", state: {margin: marginTop}}}><div className="navbar-category">WEIGHT LOSS</div></Link>
        <div className="navbar-category">NUTRITION</div>
        <Link to="/"><div className="navbar-category">ABOUT</div></Link>
      </div>
    </div>
  )
}


export default Navbar
