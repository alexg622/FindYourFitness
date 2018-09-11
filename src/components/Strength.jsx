import React from 'react'
import Navbar from './Navbar'
import '../styles/strength.css'
import '../styles/strength_two.css'


class Strength extends React.Component{

  componentDidMount(){
    if(this.props.location.state !== undefined) {
      document.querySelector('.strength-nav-container')
      .style.marginTop = String(this.props.location.state.margin) + "px"
    }
  }

  showVideo(e){
    let placeHolder = e.target.parentNode.id
    console.log(parseInt(placeHolder));
    console.log(e.target.parentNode.parentNode);
    if(parseInt(placeHolder) % 2 !== 0) {
      if([...e.target.parentNode.children[0].classList].includes('display-none')) {
        e.target.parentNode.children[0].classList.remove('display-none')
        e.target.parentNode.parentNode.children[parseInt(placeHolder)].children[0].classList.remove('display-none')
      } else {
        e.target.parentNode.children[0].classList.add('display-none')
        e.target.parentNode.parentNode.children[parseInt(placeHolder)].children[0].classList.add('display-none')
      }
    } else {
      if([...e.target.parentNode.children[0].classList].includes('display-none')) {
        e.target.parentNode.children[0].classList.remove('display-none')
        e.target.parentNode.parentNode.children[parseInt(placeHolder)-2].children[0].classList.remove('display-none')
      } else {
        e.target.parentNode.children[0].classList.add('display-none')
        e.target.parentNode.parentNode.children[parseInt(placeHolder)-2].children[0].classList.add('display-none')
      }
    }
  }

  render(){

    return(
      <div className="strength-container">
        <div className="strength-nav-container">
          <Navbar marginTop={this.props.location.state.margin} />
        </div>
        <div className="strength-calendar-container">
          <div className="strength-calendar-header">
            <div className="strength-calendar-header-title">FIND YOUR STRENGTH</div>
            <div className="strength-calendar-header-text">"YOUR DESIRE TO CHANGE MUST BE GREATER THAN YOUR DESIRE TO STAY THE SAME"</div>
          </div>
          <div className="week-box week-one">
            <div className="box monday">
              <div className="day">Mon</div>
              <div className="workout-container">
                <div className="strength-workout">
                  <div className="workout workout-strength">5 reps bench press</div>
                  <div className="workout workout-strength">5 reps pull ups</div>
                </div>
                <div className="endurance-workout">
                  <div className="contain-times-three">
                    <div className="circuit-text">
                        <div>Circuit:</div>
                        <div className="times-three"></div>
                    </div>
                  </div>
                  <div>
                    <div className="workout-one workout-endurance">pushups</div>
                    <div className="workout workout-endurance">jump squats</div>
                    <div className="workout workout-endurance">pull ups</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="box tuesday">
              <div className="day">Tue</div>
              <div className="workout-container">
                <div className="strength-workout">
                  <div className="workout workout-strength">5 reps bench press</div>
                  <div className="workout workout-strength">5 reps pull ups</div>
                </div>
                <div className="endurance-workout">
                  <div className="contain-times-three">
                    <div className="circuit-text">
                        <div>Circuit:</div>
                        <div className="times-three"></div>
                    </div>
                  </div>
                  <div>
                    <div className="workout-one workout-endurance">dips</div>
                    <div className="workout workout-endurance">jump lunges</div>
                    <div className="workout workout-endurance">rows</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="box wednesday">
              <div className="day">Wed</div>
              <div className="workout-container">
                <div className="strength-workout">
                  <div className="workout workout-strength">5 reps bench press</div>
                  <div className="workout workout-strength">5 reps pull ups</div>
                </div>
                <div className="endurance-workout">
                  <div className="contain-times-three">
                    <div className="circuit-text">
                        <div>Circuit:</div>
                        <div className="times-three"></div>
                    </div>
                  </div>
                  <div>
                    <div className="workout-one workout-endurance">pushups</div>
                    <div className="workout workout-endurance">jump squats</div>
                    <div className="workout workout-endurance">pull ups</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="box thursday">
              <div className="day">Thu</div>
              <div className="workout-container">
                <div className="strength-workout">
                  <div className="workout workout-strength">5 reps bench press</div>
                  <div className="workout workout-strength">5 reps pull ups</div>
                </div>
                <div className="endurance-workout">
                  <div className="contain-times-three">
                    <div className="circuit-text">
                        <div>Circuit:</div>
                        <div className="times-three"></div>
                    </div>
                  </div>
                  <div>
                    <div className="workout-one workout-endurance">dips</div>
                    <div className="workout workout-endurance">jump lunges</div>
                    <div className="workout workout-endurance">rows</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="box friday">
              <div className="day">Fri</div>
              <div className="workout-container">
                <div className="strength-workout">
                  <div className="workout workout-strength">5 reps bench press</div>
                  <div className="workout workout-strength">5 reps pull ups</div>
                </div>
                <div className="endurance-workout">
                  <div className="contain-times-three">
                    <div className="circuit-text">
                        <div>Circuit:</div>
                        <div className="times-three"></div>
                    </div>
                  </div>
                  <div>
                    <div className="workout-one workout-endurance">pushups</div>
                    <div className="workout workout-endurance">jump squats</div>
                    <div className="workout workout-endurance">pull ups</div>
                  </div>
                </div>
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
          <div className="week-box week-two">
            <div className="box monday">
              <div className="day">Mon</div>
              <div className="workout-container">
                <div className="strength-workout">
                  <div className="workout workout-strength">5 reps bench press</div>
                  <div className="workout workout-strength">5 reps pull ups</div>
                </div>
                <div className="endurance-workout">
                  <div className="contain-times-three">
                    <div className="circuit-text">
                        <div>Circuit:</div>
                        <div className="times-three"></div>
                    </div>
                  </div>
                  <div>
                    <div className="workout-one workout-endurance">pushups</div>
                    <div className="workout workout-endurance">jump squats</div>
                    <div className="workout workout-endurance">pull ups</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="box tuesday">
              <div className="day">Tue</div>
              <div className="workout-container">
                <div className="strength-workout">
                  <div className="workout workout-strength">5 reps bench press</div>
                  <div className="workout workout-strength">5 reps pull ups</div>
                </div>
                <div className="endurance-workout">
                  <div className="contain-times-three">
                    <div className="circuit-text">
                        <div>Circuit:</div>
                        <div className="times-three"></div>
                    </div>
                  </div>
                  <div>
                    <div className="workout-one workout-endurance">dips</div>
                    <div className="workout workout-endurance">jump lunges</div>
                    <div className="workout workout-endurance">rows</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="box wednesday">
              <div className="day">Wed</div>
              <div className="workout-container">
                <div className="strength-workout">
                  <div className="workout workout-strength">5 reps bench press</div>
                  <div className="workout workout-strength">5 reps pull ups</div>
                </div>
                <div className="endurance-workout">
                  <div className="contain-times-three">
                    <div className="circuit-text">
                        <div>Circuit:</div>
                        <div className="times-three"></div>
                    </div>
                  </div>
                  <div>
                    <div className="workout-one workout-endurance">pushups</div>
                    <div className="workout workout-endurance">jump squats</div>
                    <div className="workout workout-endurance">pull ups</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="box thursday">
              <div className="day">Thu</div>
              <div className="workout-container">
                <div className="strength-workout">
                  <div className="workout workout-strength">5 reps bench press</div>
                  <div className="workout workout-strength">5 reps pull ups</div>
                </div>
                <div className="endurance-workout">
                  <div className="contain-times-three">
                    <div className="circuit-text">
                        <div>Circuit:</div>
                        <div className="times-three"></div>
                    </div>
                  </div>
                  <div>
                    <div className="workout-one workout-endurance">dips</div>
                    <div className="workout workout-endurance">jump lunges</div>
                    <div className="workout workout-endurance">rows</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="box friday">
              <div className="day">Fri</div>
              <div className="workout-container">
                <div className="strength-workout">
                  <div className="workout workout-strength">5 reps bench press</div>
                  <div className="workout workout-strength">5 reps pull ups</div>
                </div>
                <div className="endurance-workout">
                  <div className="contain-times-three">
                    <div className="circuit-text">
                        <div>Circuit:</div>
                        <div className="times-three"></div>
                    </div>
                  </div>
                  <div>
                    <div className="workout-one workout-endurance">pushups</div>
                    <div className="workout workout-endurance">jump squats</div>
                    <div className="workout workout-endurance">pull ups</div>
                  </div>
                </div>
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
              <div className="workout-container">
                <div className="strength-workout">
                  <div className="workout workout-strength">5 reps bench press</div>
                  <div className="workout workout-strength">5 reps pull ups</div>
                </div>
                <div className="endurance-workout">
                  <div className="contain-times-three">
                    <div className="circuit-text">
                        <div>Circuit:</div>
                        <div className="times-three"></div>
                    </div>
                  </div>
                  <div>
                    <div className="workout-one workout-endurance">pushups</div>
                    <div className="workout workout-endurance">jump squats</div>
                    <div className="workout workout-endurance">pull ups</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="box tuesday">
              <div className="day">Tue</div>
              <div className="workout-container">
                <div className="strength-workout">
                  <div className="workout workout-strength">5 reps bench press</div>
                  <div className="workout workout-strength">5 reps pull ups</div>
                </div>
                <div className="endurance-workout">
                  <div className="contain-times-three">
                    <div className="circuit-text">
                        <div>Circuit:</div>
                        <div className="times-three"></div>
                    </div>
                  </div>
                  <div>
                    <div className="workout-one workout-endurance">dips</div>
                    <div className="workout workout-endurance">jump lunges</div>
                    <div className="workout workout-endurance">rows</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="box wednesday">
              <div className="day">Wed</div>
              <div className="workout-container">
                <div className="strength-workout">
                  <div className="workout workout-strength">5 reps bench press</div>
                  <div className="workout workout-strength">5 reps pull ups</div>
                </div>
                <div className="endurance-workout">
                  <div className="contain-times-three">
                    <div className="circuit-text">
                        <div>Circuit:</div>
                        <div className="times-three"></div>
                    </div>
                  </div>
                  <div>
                    <div className="workout-one workout-endurance">pushups</div>
                    <div className="workout workout-endurance">jump squats</div>
                    <div className="workout workout-endurance">pull ups</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="box thursday">
              <div className="day">Thu</div>
              <div className="workout-container">
                <div className="strength-workout">
                  <div className="workout workout-strength">5 reps bench press</div>
                  <div className="workout workout-strength">5 reps pull ups</div>
                </div>
                <div className="endurance-workout">
                  <div className="contain-times-three">
                    <div className="circuit-text">
                        <div>Circuit:</div>
                        <div className="times-three"></div>
                    </div>
                  </div>
                  <div>
                    <div className="workout-one workout-endurance">dips</div>
                    <div className="workout workout-endurance">jump lunges</div>
                    <div className="workout workout-endurance">rows</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="box friday">
              <div className="day">Fri</div>
              <div className="workout-container">
                <div className="strength-workout">
                  <div className="workout workout-strength">5 reps bench press</div>
                  <div className="workout workout-strength">5 reps pull ups</div>
                </div>
                <div className="endurance-workout">
                  <div className="contain-times-three">
                    <div className="circuit-text">
                        <div>Circuit:</div>
                        <div className="times-three"></div>
                    </div>
                  </div>
                  <div>
                    <div className="workout-one workout-endurance">pushups</div>
                    <div className="workout workout-endurance">jump squats</div>
                    <div className="workout workout-endurance">pull ups</div>
                  </div>
                </div>
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
              <div className="workout-container">
                <div className="strength-workout">
                  <div className="workout workout-strength">5 reps bench press</div>
                  <div className="workout workout-strength">5 reps pull ups</div>
                </div>
                <div className="endurance-workout">
                  <div className="contain-times-three">
                    <div className="circuit-text">
                        <div>Circuit:</div>
                        <div className="times-three"></div>
                    </div>
                  </div>
                  <div>
                    <div className="workout-one workout-endurance">pushups</div>
                    <div className="workout workout-endurance">jump squats</div>
                    <div className="workout workout-endurance">pull ups</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="box tuesday">
              <div className="day">Tue</div>
              <div className="workout-container">
                <div className="strength-workout">
                  <div className="workout workout-strength">5 reps bench press</div>
                  <div className="workout workout-strength">5 reps pull ups</div>
                </div>
                <div className="endurance-workout">
                  <div className="contain-times-three">
                    <div className="circuit-text">
                        <div>Circuit:</div>
                        <div className="times-three"></div>
                    </div>
                  </div>
                  <div>
                    <div className="workout-one workout-endurance">dips</div>
                    <div className="workout workout-endurance">jump lunges</div>
                    <div className="workout workout-endurance">rows</div>
                  </div>
                </div>
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
          <div className="strength-instructions-title">THE PLAN</div>
          <div className="strength-instructions-paragraph">
            Start off with a quick 5 minute warmup of your choice from
            jumping jacks to a light jog. Then perform 5 reps of the first two
            exercises with a weight that you can get 8 reps with. Lastly, you will
            perform a circuit with the final three exercises running through the circuit
            three times with a 10 second rest between each exercise. Each time through the
            circuit you will do 5 less than your max repitions of each exercise.
            For example: if you can do 50 push ups, then you will do 45. This workout should not
            take any longer than 10 minutes. The last week of the workout routine is to recover,
            so that when you come back to it next week you will be stronger and able to do more
            repetitions of each exercise than the month before.
            Below are links to videos on how to perform each
            exersice, as well as regressions of each exercise. The workouts will be updated monthly.
          </div>
        </div>
        <div className="spacing-image"></div>
        <div className='strength-title-exercises'>EXERCISES HOW TO</div>
        <div className="strength-links-container">
          <div id="1" className='strength-link'>
            <iframe className="display-none" title="iframe" src="https://www.youtube.com/embed/esQi683XR44" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
            <div onClick={this.showVideo.bind(this)} className="strength-link-exercise">Benchpress</div>
          </div>
          <div id="2" className='strength-link'>
            <iframe className="display-none" title="iframe" src="https://www.youtube.com/embed/HuuyDNGrCI8" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
            <div onClick={this.showVideo.bind(this)} className="strength-link-exercise">Weighted Pull Up</div>
          </div>
          <div id="3" className='strength-link'>
            <iframe className="display-none" title="video-one" src="https://www.youtube.com/embed/pnbQLDUJHkw" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
            <div onClick={this.showVideo.bind(this)} className="strength-link-exercise">Pushups</div>
          </div>
          <div id="4" className='strength-link'>
            <iframe className="display-none" title="iframe" src="https://www.youtube.com/embed/pUJnPMjYLxU" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
            <div onClick={this.showVideo.bind(this)} className="strength-link-exercise">Pushups Regression</div>
          </div>
          <div id="5" className='strength-link'>
            <iframe className="display-none" title="iframe" src="https://www.youtube.com/embed/AHwJMCXiM60" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
            <div onClick={this.showVideo.bind(this)} className="strength-link-exercise">The Pull Up</div>
          </div>
          <div id="6" className='strength-link'>
            <iframe className="display-none" title="iframe" src="https://www.youtube.com/embed/kIWRXow-kqU" frameBorder="3000" allow="autoplay; encrypted-media" allowFullScreen></iframe>
            <div onClick={this.showVideo.bind(this)} className="strength-link-exercise">The Pull Up Regression</div>
          </div>
          <div id="7" className='strength-link'>
            <iframe className="display-none" title="iframe" src="https://www.youtube.com/embed/Oa5BEaQ9T6Y" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
            <div onClick={this.showVideo.bind(this)} className="strength-link-exercise">Dips</div>
          </div>
          <div id="8" className='strength-link'>
            <iframe className="display-none" title="iframe" src="https://www.youtube.com/embed/6kALZikXxLc" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
            <div onClick={this.showVideo.bind(this)} className="strength-link-exercise">Dips Regression</div>
          </div>
          <div id="9" className='strength-link'>
            <iframe className="display-none" title="iframe" src="https://www.youtube.com/embed/U4s4mEQ5VqU" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
            <div onClick={this.showVideo.bind(this)} className="strength-link-exercise">Jump Squat</div>
          </div>
          <div id="10" className='strength-link'>
            <iframe className="display-none" title="iframe" src="https://www.youtube.com/embed/UXJrBgI2RxA" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
            <div onClick={this.showVideo.bind(this)} className="strength-link-exercise">Jump Squat Regression</div>
          </div>
          <div id="11" className='strength-link'>
            <iframe className="display-none" title="iframe" src="https://www.youtube.com/embed/y7Iug7eC0dk" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
            <div onClick={this.showVideo.bind(this)} className="strength-link-exercise">Jump Lunge</div>
          </div>
          <div id="12" className='strength-link'>
            <iframe className="display-none" title="iframe" src="https://www.youtube.com/embed/raQl44N_REc" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
            <div onClick={this.showVideo.bind(this)} className="strength-link-exercise">Jump Lunge Regression</div>
          </div>
          <div id="13" className='strength-link'>
            <iframe className="display-none" title="iframe" src="https://www.youtube.com/embed/I2Mu3lpUfMY" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
            <div onClick={this.showVideo.bind(this)} className="strength-link-exercise">The Row</div>
          </div>
          <div id="14" className='strength-link'>
            <iframe className="display-none" title="iframe" src="https://www.youtube.com/embed/KVJRZaSK4_I" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
            <div onClick={this.showVideo.bind(this)} className="strength-link-exercise">The Row Regression</div>
          </div>
        </div>
        <div className="strength-ending-quote"></div>
      </div>
    )
  }
}

export default Strength
