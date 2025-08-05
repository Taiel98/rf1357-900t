import React from "react";
import NumberInput from '../Components/NumberInput';
import DateInput from "../Components/DateInput"
import SelectInput from "../Components/SelectInput";
import OptionInput from "../Components/OptionInput";
import FileLoader from "../Components/FileLoader";
import { Link } from "react-router-dom";
import { useFormContext } from "../Context/FormContext";

function Registro1(){
    const { getFieldValue } = useFormContext();
    
    // Obtener el valor actual del tipo de presentación
    const tipoPresentacion = getFieldValue('registro1', 'tipoPresentacion');
    
    // Determinar el tipo de input para período informado
    const getPeriodoInputType = () => {
        if (tipoPresentacion === '1') { // ANUAL
            return 'year';
        }
        return 'month'; // Para todos los otros casos (FINAL, INFORMATIVA, DISTRACTO)
    };

    // Función para mostrar la etiqueta apropiada
    const getPeriodoLabel = () => {
        if (tipoPresentacion === '1') { // ANUAL
            return "3 PERIODO INFORMADO (Año)";
        }
        return "3 PERIODO INFORMADO (Mes y Año)";
    };

    return(
        <>
            {/* Componente para cargar archivo */}
            <FileLoader />
            
            <h2>REGISTRO 1</h2>
            <br/>
            <h1>CABECERA ENCRIPTADA</h1>
            <br/>
            <h3>1 TIPO DE REGISTRO</h3>
            <NumberInput value="01" readOnly={true} />
            
            <h3>2 CUIT AGENTE DE RETENCION</h3>
            <NumberInput maxLength={11} registro="registro1" field="cuitAgente" />
            
            <h3>{getPeriodoLabel()}</h3>
            <DateInput 
                registro="registro1" 
                field="periodoInformado" 
                inputType={getPeriodoInputType()}
            />
            {tipoPresentacion === '1' && (
                <small style={{ display: 'block', color: '#666', marginTop: '5px' }}>
                    Solo ingrese el año (ej: 2024)
                </small>
            )}
            {tipoPresentacion && tipoPresentacion !== '1' && (
                <small style={{ display: 'block', color: '#666', marginTop: '5px' }}>
                    Seleccione mes y año (ej: 2024-12 para Diciembre 2024)
                </small>
            )}
            
            <h3>4 SECUENCIA</h3>
            <NumberInput value="00" maxLength={2} registro="registro1" field="secuencia" />
            
            <h3>5 CODIGO DE IMPUESTO</h3>
            <NumberInput value="0103" readOnly={true} />
            
            <h3>6 CODIGO DE CONCEPTO</h3>
            <NumberInput value="215" readOnly={true} />
            
            <h3>7 NUMERO DE FORMULARIO</h3>
            <NumberInput value="1357" readOnly={true} />
            
            <h3>8 TIPO DE PRESENTACION</h3>
            <SelectInput registro="registro1" field="tipoPresentacion">
                <OptionInput value="" label="Seleccionar..." />
                <OptionInput value="1" label="ANUAL" />
                <OptionInput value="2" label="FINAL" />
                <OptionInput value="3" label="INFORMATIVA" />
                <OptionInput value="4" label="ANUAL -> DISTRACTO ENERO - MARZO" />
            </SelectInput>
            
            <h3>9 VERSION DEL SISTEMA</h3>
            <NumberInput value="00900" readOnly={true} />
            <h2>CANTIDAD DE TRABAJADORES</h2>
            <form>
                <NumberInput maxLength={3} registro="registro1" field="cantidadTrabajadores"/>
                <Link to="Trabajadores"><button type="button">Iniciar</button></Link>
            </form>
            <br/>
            <hr/>
        </>
    )
}

export default Registro1;