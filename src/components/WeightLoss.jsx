import React from "react"
import Navbar from './Navbar'
import '../styles/weight_loss.css'

class WeightLoss extends React.Component{

  componentDidMount(){
    if(this.props.location.state !== undefined) {
      document.querySelector('.weightLoss-nav-container')
      .style.marginTop = String(this.props.location.state.margin) + "px"
    }
  }

  render(){
    return(
      <div>
        <div className="weightLoss-nav-container">
          <Navbar marginTop={this.props.location.state.margin}/>
        </div>
        <div className="weightLoss-splash">
          <div className="weightLoss-splash-text">
            Losing weight doesn't have to be hard. All you have to do
            is one thing. Burn more calories than you consume. Here is how.
          </div>
        </div>
        <div className="weightLoss-instructions">
          <div className="weightLoss-plan">THE PLAN</div>
            <div className="plan-text">
              Losing weight is really simple. All you have to do is
              eat less calories than you are burning each day and you
              will without a doubt lose weight. For men, this means eating
              2,000 calories per day, and for women this means eating 1,500
              calories per day. How you choose to accomplish this is up to you.
              Below are some diets to choose from to help you reach
              your weight loss goals. Along with eating right be sure to stay
              consistent with the cardio and strength plan.
            </div>
        </div>
        <div className="keto-image"></div>
        <div className="diets-container">
          <div className="diets-title">DIETS</div>
          <div className="diets-categories">
            
          </div>
        </div>
      </div>
    )
  }
}

export default WeightLoss
