import React from "react";

function DateInput(props) {
    return (
        <input 
            type="date" 
            value={props.value || ''} 
            onChange={props.onChange}
        />
    )
}

export default DateInput;