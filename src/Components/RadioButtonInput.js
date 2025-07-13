import React from "react";

function RadioButtonInput(props){
    return(
        <input type="radio" name={props} value={props}/>
    )
}

export default RadioButtonInput;