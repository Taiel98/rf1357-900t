import React from "react";

function NumberInput(props) {
    const handleChange = (e) => {
        // Solo permitir números en el valor
        let value = e.target.value.replace(/[^0-9]/g, '');
        
        // Aplicar maxLength si está definido
        if (props.maxLength && value.length > props.maxLength) {
            value = value.slice(0, props.maxLength);
        }
        
        e.target.value = value;
        
        // Llamar al onChange del padre si existe
        if (props.onChange) {
            props.onChange(e);
        }
    };

    return (
        <input 
            type="text" 
            defaultValue={props.value || ''} 
            readOnly={props.readOnly || false}
            onChange={props.readOnly ? undefined : handleChange}
            maxLength={props.maxLength}
            style={props.readOnly ? {backgroundColor: '#f0f0f0'} : {}}
        />
    )
}

export default NumberInput;