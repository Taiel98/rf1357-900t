
import React from "react";

function RadioButtonInput(props){
    return(
        <input 
            type="radio" 
            name={props.name} 
            value={props.value}
            onChange={props.onChange}
            checked={props.checked}
        />
    )
}

export default RadioButtonInput;