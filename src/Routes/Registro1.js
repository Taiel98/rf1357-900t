import React from "react";
import NumberInput from '../Components/NumberInput';
import DateInput from "../Components/DateInput"
import SelectInput from "../Components/SelectInput";
import OptionInput from "../Components/OptionInput";

function Registro1(){
    return(
        <>
            <h2>REGISTRO 1</h2>
            <br/>
            <h1>CABECERA ENCRIPTADA</h1>
            <br/>
            <h3>1 TIPO DE REGISTRO</h3>
            <NumberInput value="01" readOnly={true} />
            
            <h3>2 CUIT AGENTE DE RETENCION</h3>
            <NumberInput maxLength={11} registro="registro1" field="cuitAgente" />
            
            <h3>3 PERIODO INFORMADO</h3>
            <DateInput registro="registro1" field="periodoInformado" />
            
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
            <br/>
        </>
    )
}

export default Registro1;