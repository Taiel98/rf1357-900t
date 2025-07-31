import React from "react";

function OptionInput(props) {
    return (
        <option value={props.value}>{props.label || props.value}</option>
    )
}

export default OptionInput;