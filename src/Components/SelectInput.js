import React from "react";

function SelectInput(props) {
    return (
        <select 
            name={props.name} 
            id={props.id}
            value={props.value || ''}
            onChange={props.onChange}
        >
            {props.children}
        </select>
    )
}

export default SelectInput