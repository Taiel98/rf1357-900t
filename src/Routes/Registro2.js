import React, { useState } from "react";
import NumberInput from "../Components/NumberInput"
import DateInput from "../Components/DateInput"
import SelectInput from "../Components/SelectInput"
import OptionInput from "../Components/OptionInput"
import RadioButtonInput from "../Components/RadioButtonInput"

function Registro2(){
    const [beneficio, setBeneficio] = useState('');
    
    const handleSelectChange = (e) => {
        setBeneficio(e.target.value);
    };

    return(
        <>
            <h2>REGISTRO 2</h2>
            <br/>
            <h1>DATOS DEL TRABAJADOR</h1>
            <br/>
            <h3>1 TIPO DE REGISTRO</h3>
            <NumberInput value="02" readOnly={true}/>
            <h3>2 CUIL</h3>
            <NumberInput maxLength={11}/>
            <h3>3 PERIODO TRABAJADO DESDE</h3>
            <DateInput/>
            <h3>4 PERIODO TRABAJADO HASTA</h3>
            <DateInput/>
            <h3>5 MESES</h3>
            <NumberInput maxLength={2}/>
            <h3>6 BENEFICIO</h3>
            <SelectInput value={beneficio} onChange={handleSelectChange}>
                <OptionInput value="" label="Seleccionar..."/>
                <OptionInput value="1" label="SIN BENEFICIO"/>
                <OptionInput value="2" label="ZONA PATAGÓNICA - INCREMENTO DEL 22%"/>
                <OptionInput value="3" label="J/P/R-Deducción especifica equivalente a 8 veces la suma de los haberes minimos garantizados, definidos en el art.125 ley24.241 y sus mod. y comp."/>
                <OptionInput value="4" label="JUBILADO ZONA PATAGÓNICA"/>
            </SelectInput>
            <h3>7 ¿Desarrolla actividad de transporte de larga distancia? (NO CT 40/1989)</h3>
            <label>
                <input type="radio" name="transporte" value="si"/> Sí
            </label>
            <label>
                <input type="radio" name="transporte" value="no"/> No
            </label>
            <h3>8 ¿El trabajador posee el beneficio promocional de la Ley N° 27.424?</h3>
            <NumberInput value="0" readOnly={true}/>
            <h3>9 ¿El trabajador posee el beneficio de la Ley N° 27.718?</h3>
            <label>
                <input type="radio" name="ley27718" value="si"/> Sí
            </label>
            <label>
                <input type="radio" name="ley27718" value="no"/> No
            </label>
            <h3>10 ¿El trabajador labora bajo el régimen de teletrabajo - Ley 27.555?</h3>
            <label>
                <input type="radio" name="teletrabajo" value="si"/> Sí
            </label>
            <label>
                <input type="radio" name="teletrabajo" value="no"/> No
            </label>
            <h3>11 ¿El trabajador es personal militar en actividad - Ley 19.101?</h3>
            <label>
                <input type="radio" name="militar" value="si"/> Sí
            </label>
            <label>
                <input type="radio" name="militar" value="no"/> No
            </label>
            <h3>12 ¿El trabajador desarrolla la actividad de transporte TERRESTRE de larga distancia bajo el convenio 40/1989?</h3>
            <label>
                <input type="radio" name="transporteTerrestre" value="si"/> Sí
            </label>
            <label>
                <input type="radio" name="transporteTerrestre" value="no"/> No
            </label>
            <br/>
        </>
    )
}

export default Registro2;