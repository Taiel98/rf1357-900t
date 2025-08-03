import React from "react";
import { useFormContext } from "../Context/FormContext";

function DateInput(props) {
    const { updateFormData, getFieldValue } = useFormContext();
    
    const handleChange = (e) => {
        const value = e.target.value;
        
        // Actualizar el contexto si tenemos registro/field
        if (props.registro && props.field) {
            updateFormData(props.registro, props.field, value, props.numeroTrabajador);
        }
        
        // Llamar al onChange del padre si existe
        if (props.onChange) {
            props.onChange(e);
        }
    };

    // Obtener el valor del contexto o usar el valor por defecto
    const getValue = () => {
        if (!props.registro || !props.field) {
            return props.value || '';
        }
        return getFieldValue(props.registro, props.field, props.numeroTrabajador) || props.value || '';
    };

    // Determinar el tipo de input basado en props
    const getInputType = () => {
        if (props.inputType === 'month') return 'month';
        if (props.inputType === 'year') return 'number';
        return 'date';
    };

    // Para input tipo año, necesitamos props adicionales
    const getYearProps = () => {
        if (props.inputType === 'year') {
            return {
                min: 2000,
                max: 2099,
                placeholder: "YYYY"
            };
        }
        return {};
    };

    return (
        <input 
            type={getInputType()}
            value={getValue()}
            onChange={handleChange}
            {...getYearProps()}
        />
    )
}

export default DateInput;