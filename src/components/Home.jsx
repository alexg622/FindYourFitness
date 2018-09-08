import React from 'react'
import '../styles/Home.css'
class Home extends React.Component {

  render(){
    return(
      <div className="home-container">
        <div className="home-splash-container">
          <div className="home-navbar">
            <div className="home-title">FIND YOUR FITNESS</div>
            <div className="home-categories">
              <div className="home-category">HOME</div>
              <div className="home-category">STRENGTH</div>
              <div className="home-category">CARDIO</div>
              <div className="home-category">WEIGHT LOSS</div>
              <div className="home-category">ABOUT</div>
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
           is consitency. Here you can find programs that
           you can stay consistent with to build strength,
           lose weight, and improve your health through easy
           to follow workout routines that only take 5-10 minutes
           of your time each day.
         </div>
       </div>
    </div>
    )
  }
}

export default Home
