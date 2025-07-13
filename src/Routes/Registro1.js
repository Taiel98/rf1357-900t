import React from "react";
import NumberInput from '../Components/NumberInput';
import Dateinput from "../Components/DateInput"
import SelectInput from "../Components/SelectInput";
import OptionInput from "../Components/OptionInput";

function Registro1(){
    return(
        <>
            <h3>1 TIPO DE REGISTRO</h3>
            <NumberInput/>
            <h3>CUIT AGENTE DE RETENCION</h3>
            <NumberInput/>
            <h3>PERIODO INFORMADO</h3>
            <Dateinput/>
            <h3>SECUENCIA</h3>
            <NumberInput/>
            <h3>CODIGO DE IMPUESTO</h3>
            <NumberInput/>
            <h3>CODIGO DE CONCEPTO</h3>
            <NumberInput/>
            <h3>NUMERO DE FORMULARIO</h3>
            <NumberInput/>
            <h3>TIPO DE PRESENTACION</h3>
            <SelectInput>
                <OptionInput/>
                <OptionInput/>
                <OptionInput/>
                <OptionInput/>
            </SelectInput>
            <h3>VERSION DEL SISTEMA</h3>
            <NumberInput/>
        </>
    )
}

export default Registro1;