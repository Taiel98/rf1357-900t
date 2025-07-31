import React, { useState } from "react";
import NumberInput from "../Components/NumberInput"
import DateInput from "../Components/DateInput"
import SelectInput from "../Components/SelectInput"
import OptionInput from "../Components/OptionInput"
import RadioButtonInput from "../Components/RadioButtonInput"

function Registro2(){
    const [beneficio, setBeneficio] = useState('');
    const [transporte, setTransporte] = useState('');
    const [ley27718, setLey27718] = useState('');
    const [teletrabajo, setTeletrabajo] = useState('');
    const [militar, setMilitar] = useState('');
    const [transporteTerrestre, setTransporteTerrestre] = useState('');
    
    const handleSelectChange = (e) => {
        setBeneficio(e.target.value);
    };

    const handleTransporteChange = (e) => {
        setTransporte(e.target.value);
    };

    const handleLey27718Change = (e) => {
        setLey27718(e.target.value);
    };

    const handleTeletrabajoChange = (e) => {
        setTeletrabajo(e.target.value);
    };

    const handleMilitarChange = (e) => {
        setMilitar(e.target.value);
    };

    const handleTransporteTerrestreChange = (e) => {
        setTransporteTerrestre(e.target.value);
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
                <RadioButtonInput 
                    name="transporte" 
                    value="si" 
                    checked={transporte === 'si'}
                    onChange={handleTransporteChange}
                /> Sí
            </label>
            <label>
                <RadioButtonInput 
                    name="transporte" 
                    value="no" 
                    checked={transporte === 'no'}
                    onChange={handleTransporteChange}
                /> No
            </label>
            <h3>8 ¿El trabajador posee el beneficio promocional de la Ley N° 27.424?</h3>
            <NumberInput value="0" readOnly={true}/>
            <h3>9 ¿El trabajador posee el beneficio de la Ley N° 27.718?</h3>
            <label>
                <RadioButtonInput 
                    name="ley27718" 
                    value="si" 
                    checked={ley27718 === 'si'}
                    onChange={handleLey27718Change}
                /> Sí
            </label>
            <label>
                <RadioButtonInput 
                    name="ley27718" 
                    value="no" 
                    checked={ley27718 === 'no'}
                    onChange={handleLey27718Change}
                /> No
            </label>
            <h3>10 ¿El trabajador labora bajo el régimen de teletrabajo - Ley 27.555?</h3>
            <label>
                <RadioButtonInput 
                    name="teletrabajo" 
                    value="si" 
                    checked={teletrabajo === 'si'}
                    onChange={handleTeletrabajoChange}
                /> Sí
            </label>
            <label>
                <RadioButtonInput 
                    name="teletrabajo" 
                    value="no" 
                    checked={teletrabajo === 'no'}
                    onChange={handleTeletrabajoChange}
                /> No
            </label>
            <h3>11 ¿El trabajador es personal militar en actividad - Ley 19.101?</h3>
            <label>
                <RadioButtonInput 
                    name="militar" 
                    value="si" 
                    checked={militar === 'si'}
                    onChange={handleMilitarChange}
                /> Sí
            </label>
            <label>
                <RadioButtonInput 
                    name="militar" 
                    value="no" 
                    checked={militar === 'no'}
                    onChange={handleMilitarChange}
                /> No
            </label>
            <h3>12 ¿El trabajador desarrolla la actividad de transporte TERRESTRE de larga distancia bajo el convenio 40/1989?</h3>
            <label>
                <RadioButtonInput 
                    name="transporteTerrestre" 
                    value="si" 
                    checked={transporteTerrestre === 'si'}
                    onChange={handleTransporteTerrestreChange}
                /> Sí
            </label>
            <label>
                <RadioButtonInput 
                    name="transporteTerrestre" 
                    value="no" 
                    checked={transporteTerrestre === 'no'}
                    onChange={handleTransporteTerrestreChange}
                /> No
            </label>
            <br/>
        </>
    )
}

export default Registro2;