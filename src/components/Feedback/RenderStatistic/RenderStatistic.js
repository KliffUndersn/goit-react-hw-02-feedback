import React from "react";
import PropTypes from "prop-types"
import Feedback from "../Feedback";

const Statistic = ({value}) => {
   return( <ul>
  <li>Good: {value.good}</li>
  <li>Neutral: {value.neutral}</li>
  <li>Bad: {value.bad}</li>
  {/* <li>Total: {total}</li>
  <li>Positive feedback: {feedback}</li> */}
  </ul>)
    
}

export default Statistic