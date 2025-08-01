import React from "react";
import { useFormContext } from "../Context/FormContext";

function RadioButtonInput(props){
    const { updateFormData, getFieldValue } = useFormContext();
    
    const handleChange = (e) => {
        const value = e.target.value;
        
        // Actualizar el contexto si tenemos registro/field
        if (props.registro && props.field) {
            updateFormData(props.registro, props.field, value);
        }
        
        // Llamar al onChange del padre si existe
        if (props.onChange) {
            props.onChange(e);
        }
    };

    // Determinar si está checked basado en el contexto
    const isChecked = () => {
        if (!props.registro || !props.field) {
            return props.checked || false;
        }
        return getFieldValue(props.registro, props.field) === props.value;
    };

    return(
        <input 
            type="radio" 
            name={props.name} 
            value={props.value}
            onChange={handleChange}
            checked={isChecked()}
        />
    )
}

export default RadioButtonInput;