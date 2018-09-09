import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Home.css'

class Home extends React.Component {
  constructor(){
    super()
    this.scrollToAbout = this.scrollToAbout.bind(this)
  }

  componentDidMount(){

  }

  scrollToAbout(){
    let finalImage = document.querySelector('.home-final-image')
    let about = document.querySelector('.home-about-container')
    window.scrollTo({top: ((about.scrollHeight) + about.scrollHeight/2), behavior: 'smooth'})
  }

  render(){
    return(
      <div className="home-container">
        <div className="home-splash-container">
          <div className="home-navbar">
            <Link to="/"><div className="home-title">FIND YOUR FITNESS</div></Link>
            <div className="home-categories">
              <Link to="/"><div className="home-category">HOME</div></Link>
              <Link to="/strength"><div className="home-category">STRENGTH</div></Link>
              <div className="home-category">CARDIO</div>
              <div className="home-category">WEIGHT LOSS</div>
              <div className="home-category">NUTRITION</div>
              <div onClick={this.scrollToAbout} className="home-category">ABOUT</div>
            </div>
          </div>
          <div className="home-words">
            <div className="home-words-one">THROUGH CONSISTENCY</div>
            <div className="home-words-two">AND HARD WORK YOU</div>
            <div className="home-words-two">WILL REACH YOUR</div>
            <div className="home-words-two">GOALS</div>
          </div>
        </div>
       <div className="home-about-container">
         <div className="home-about-title">ABOUT</div>
         <div className="home-about-text">
           Fitness doesn't have to be complicated.
           It doesn't have to take hours of your
           day for you to reach your goals. All it takes
           is a little work every day. The key to results
           is consitency. Here you can find programs updated weekly that
           you can stay consistent with to build strength,
           lose weight, and improve your health through easy
           to follow workout routines that only take 5-10 minutes
           of your time each day. Working out a little each day
           rather than a lot a few days per week will help
           build habbits that will never be broken.
         </div>
       </div>
       <div className="home-final-image"></div>
       <div className="home-last-words-container">
         <div className="home-last-words">
           "If you can make it through hell. Then you can live in heaven"
         </div>
         <div className="home-quote-author">— Alex Gonzalez</div>
       </div>
    </div>
    )
  }
}

export default Home
