import React from "react";
import PropTypes from "prop-types"
import { Component } from "react";

import RenderButtons from "./RenderButtons/RenderButtons";
import Statistic from "./RenderStatistic/RenderStatistic";

export default class Feedback extends Component {

  state = {
    good: 0,
    neutral: 0 ,
    bad: 0,
  }
  
}
// click() {
//   this.setState(state =>({
//     good: state.good +1
//   })

//   )
// }
 


render(){ 

  return (
<div>
      <h1>Please Leave feedback</h1>
      <RenderButtons/>
      <h2>Statistics</h2>
       <p>no data yet</p>
       <Statistic value={this.state}/>
</div>
)


}


console.log(Feedback.this.state)