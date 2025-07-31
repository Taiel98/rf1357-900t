import React from "react";
import NumberInput from "../Components/NumberInput"
import DateInput from "../Components/DateInput"
import SelectInput from "../Components/SelectInput"
import OptionInput from "../Components/OptionInput"
import RadioButtonInput from "../Components/RadioButtonInput"

function Registro2(){
    return(
        <>
            <h1>DATOS DEL TRABAJADOR</h1>
            <br/>
            <h3>1 TIPO DE REGISTRO</h3>
            <NumberInput/>
            <h3>2 CUIL</h3>
            <NumberInput/>
            <h3>3 PERIODO TRABAJADO DESDE</h3>
            <DateInput/>
            <h3>4 PERIODO TRABAJADO HASTA</h3>
            <DateInput/>
            <h3>5 MESES</h3>
            <NumberInput/>
            <h3>6 BENEFICIO</h3>
            <SelectInput>
                <OptionInput/>
                <OptionInput/>
                <OptionInput/>
                <OptionInput/>
            </SelectInput>
            <h3>7 ¿Desarrolla actividad de transporte de larga distancia? (NO CT 40/1989)</h3>
            <RadioButtonInput/><RadioButtonInput/>
            <h3>8 ¿El trabajador posee el beneficio promocional de la Ley N° 27.424?</h3>
            <NumberInput/>
            <h3>9 ¿El trabajador posee el beneficio de la Ley N° 27.718?</h3>
            <RadioButtonInput/><RadioButtonInput/>
            <h3>10 ¿El trabajador labora bajo el régimen de teletrabajo - Ley 27.555?</h3>
            <RadioButtonInput/><RadioButtonInput/>
            <h3>11 ¿El trabajador es personal militar en actividad - Ley 19.101?</h3>
            <RadioButtonInput/><RadioButtonInput/>
            <h3>12 ¿El trabajador desarrolla la actividad de transporte TERRESTRE de larga distancia bajo el convenio 40/1989?</h3>
            <RadioButtonInput/><RadioButtonInput/>
        </>
    )
}

export default Registro2;