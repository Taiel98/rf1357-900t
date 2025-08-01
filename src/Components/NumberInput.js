import React from "react";
import { useFormContext } from "../Context/FormContext";

function NumberInput(props) {
    const { updateFormData, getFieldValue } = useFormContext();
    
    const handleChange = (e) => {
        // Solo permitir números en el valor
        let value = e.target.value.replace(/[^0-9]/g, '');
        
        // Aplicar maxLength si está definido
        if (props.maxLength && value.length > props.maxLength) {
            value = value.slice(0, props.maxLength);
        }
        
        e.target.value = value;
        
        // Actualizar el contexto si no es readOnly y tenemos registro/field
        if (!props.readOnly && props.registro && props.field) {
            updateFormData(props.registro, props.field, value);
        }
        
        // Llamar al onChange del padre si existe
        if (props.onChange) {
            props.onChange(e);
        }
    };

    // Obtener el valor del contexto o usar el valor por defecto
    const getValue = () => {
        if (props.readOnly || !props.registro || !props.field) {
            return props.value || '';
        }
        return getFieldValue(props.registro, props.field) || props.value || '';
    };

    return (
        <input 
            type="text" 
            value={getValue()}
            readOnly={props.readOnly || false}
            onChange={props.readOnly ? undefined : handleChange}
            maxLength={props.maxLength}
            style={props.readOnly ? {backgroundColor: '#f0f0f0'} : {}}
        />
    )
}

export default NumberInput;