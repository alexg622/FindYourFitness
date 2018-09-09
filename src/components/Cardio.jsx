import React from 'react'
import Navbar from './Navbar'
import '../styles/strength.css'
import '../styles/strength_two.css'
import '../styles/cardio.css'

class Cardio extends React.Component{

  componentDidMount(){
    if(this.props.location.state !== undefined) {
      document.querySelector('.strength-nav-container')
      .style.marginTop = String(this.props.location.state.margin) + "px"
    }
  }

  render(){

    return(
      <div className="strength-container">
        <div className="strength-nav-container">
          <Navbar marginTop={this.props.location.state.margin}/>
        </div>
        <div className="strength-calendar-container">
          <div className="strength-calendar-header">
            <div className="strength-calendar-header-title">GET YOUR CARDIO</div>
            <div className="strength-calendar-header-text">"YOUR DESIRE TO CHANGE MUST BE GREATER THAN YOUR DESIRE TO STAY THE SAME"</div>
          </div>
          <div className="week-box week-one">
            <div className="box monday">
              <div className="day">Mon</div>
              <div className="workout-container rest">
                14 Minute Run
              </div>
            </div>
            <div className="box tuesday">
              <div className="day">Tue</div>
              <div className="workout-container rest">
                 6 Minute Run
              </div>
            </div>
            <div className="box wednesday">
              <div className="day">Wed</div>
              <div className="workout-container rest">
                14 Minute Run
              </div>
            </div>
            <div className="box thursday">
              <div className="day">Thu</div>
              <div className="workout-container rest">
                6 Minute Run
              </div>
            </div>
            <div className="box friday">
              <div className="day">Fri</div>
              <div className="workout-container rest">
                14 Minute Run
              </div>
            </div>
            <div className="box saturday">
              <div className="day">Sat</div>
              <div className="workout-container rest">
                Rest
              </div>
            </div>
            <div className="box saturday">
              <div className="day">Sun</div>
              <div className="workout-container rest">
                Rest
              </div>
            </div>
          </div>
          <div className="week-box week-three">
            <div className="box monday">
              <div className="day">Mon</div>
              <div className="workout-container rest">
                14 Minute Run
              </div>
            </div>
            <div className="box tuesday">
              <div className="day">Tue</div>
              <div className="workout-container rest">
                 6 Minute Run
              </div>
            </div>
            <div className="box wednesday">
              <div className="day">Wed</div>
              <div className="workout-container rest">
                14 Minute Run
              </div>
            </div>
            <div className="box thursday">
              <div className="day">Thu</div>
              <div className="workout-container rest">
                6 Minute Run
              </div>
            </div>
            <div className="box friday">
              <div className="day">Fri</div>
              <div className="workout-container rest">
                14 Minute Run
              </div>
            </div>
            <div className="box saturday">
              <div className="day">Sat</div>
              <div className="workout-container rest">
                Rest
              </div>
            </div>
            <div className="box saturday">
              <div className="day">Sun</div>
              <div className="workout-container rest">
                Rest
              </div>
            </div>
          </div>
          <div className="week-box week-one">
            <div className="box monday">
              <div className="day">Mon</div>
              <div className="workout-container rest">
                14 Minute Run
              </div>
            </div>
            <div className="box tuesday">
              <div className="day">Tue</div>
              <div className="workout-container rest">
                 6 Minute Run
              </div>
            </div>
            <div className="box wednesday">
              <div className="day">Wed</div>
              <div className="workout-container rest">
                14 Minute Run
              </div>
            </div>
            <div className="box thursday">
              <div className="day">Thu</div>
              <div className="workout-container rest">
                6 Minute Run
              </div>
            </div>
            <div className="box friday">
              <div className="day">Fri</div>
              <div className="workout-container rest">
                14 Minute Run
              </div>
            </div>
            <div className="box saturday">
              <div className="day">Sat</div>
              <div className="workout-container rest">
                Rest
              </div>
            </div>
            <div className="box saturday">
              <div className="day">Sun</div>
              <div className="workout-container rest">
                Rest
              </div>
            </div>
          </div>
          <div className="week-box week-four">
            <div className="box monday">
              <div className="day">Mon</div>
              <div className="workout-container rest">
                14 Minute Run
              </div>
            </div>
            <div className="box tuesday">
              <div className="day">Tue</div>
              <div className="workout-container rest">
                 6 Minute Run
              </div>
            </div>
            <div className="box wednesday">
              <div className="day">Wed</div>
              <div className="workout-container rest">
                Rest
              </div>
            </div>
            <div className="box thursday">
              <div className="day">Thu</div>
              <div className="workout-container rest">
                Rest
              </div>
            </div>
            <div className="box friday">
              <div className="day">Fri</div>
              <div className="workout-container rest">
                Rest
              </div>
            </div>
            <div className="box saturday">
              <div className="day">Sat</div>
              <div className="workout-container rest">
                Rest
              </div>
            </div>
            <div className="box saturday">
              <div className="day">Sun</div>
              <div className="workout-container rest">
                Rest
              </div>
            </div>
          </div>
        </div>
        <div className="strength-background-image"></div>
        <div className="strength-instructions">
          <div className="strength-instructions-title">INSTRUCTIONS</div>
          <div className="strength-instructions-paragraph">
            Start off slow and gradually increase how far you can run
            on your 14 minute and 6 minute run days. Slowly build up to
            being able to run two miles in 14 minutes and one mile in
            6 minutes. Depending on where you are coming from it may seem
            like a hard goal to reach, but if you stay consistent you will
            be able to reach your goals in no time. Below are instructions to
            having proper running form as well as mobility exercises to improve
            your running stride and prevent injuries. If running is not an option for you
            go swimming, cycling, or hop on the elliptical for 14 minutes one day and 6 minutes
            the next. The cardio routines will be updated from month to month. Just like with
            strength training its always good to take five days off at the end of the month so
            that you can come into the next month much stronger.
          </div>
        </div>
        <div className="spacing-image"></div>
        <div style={{marginTop: "100px"}}className='strength-title-exercises'>RUNNING HOW TO</div>
        <div className="strength-links-container">
          <div id="1" className='strength-link'>
            <iframe title="iframe" src="https://www.youtube.com/embed/fQ7ewHFw_I8" FrameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
            <div className="strength-link-exercise">Proper Running Form</div>
          </div>
          <div id="2" className='strength-link'>
            <iframe title="iframe" src="https://www.youtube.com/embed/nPHfEnZD1Wk" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
            <div className="strength-link-exercise">Dynamic Warmup</div>
          </div>
        </div>
        <div className="cardio-background-image"></div>
        <div className="cardio-ending-quote">
          "IF IT DOESN'T CHALLENGE YOU, IT WON'T CHANGE YOU"
        </div>
      </div>
    )
  }
}

export default Cardio
