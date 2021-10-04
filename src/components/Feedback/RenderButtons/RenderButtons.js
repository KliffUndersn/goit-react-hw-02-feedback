import React from "react";
import PropTypes from "prop-types"
import Feedback from "../Feedback";

const RenderButtons = (click) => {
    return(
             <ul>   
              <li><button type="button" onClick={click}>Good</button></li>
              <li><button type="button" onClick={click}>Neutral</button></li>
              <li><button type="button" onClick={click}>Bad</button></li>
            </ul>)
    
  }

  export default RenderButtons