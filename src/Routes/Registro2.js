import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import NumberInput from "../Components/NumberInput"
import DateInput from "../Components/DateInput"
import SelectInput from "../Components/SelectInput"
import OptionInput from "../Components/OptionInput"
import RadioButtonInput from "../Components/RadioButtonInput"
import { useFormContext } from "../Context/FormContext";

function Registro2(){
    const { numeroTrabajador } = useParams();
    const { initializeTrabajador } = useFormContext();

    // Inicializar el trabajador si no existe
    useEffect(() => {
        if (numeroTrabajador) {
            initializeTrabajador(numeroTrabajador);
        }
    }, [numeroTrabajador, initializeTrabajador]);

    return(
        <>
            <h2>REGISTRO 2</h2>
            <br/>
            <h1>DATOS DEL TRABAJADOR</h1>
            <br/>
            <h3>1 TIPO DE REGISTRO</h3>
            <NumberInput value="02" readOnly={true}/>
            
            <h3>2 CUIL</h3>
            <NumberInput 
                maxLength={11} 
                registro="registro2" 
                field="cuil" 
                numeroTrabajador={numeroTrabajador}
            />
            
            <h3>3 PERIODO TRABAJADO DESDE</h3>
            <DateInput 
                registro="registro2" 
                field="periodoDesde" 
                numeroTrabajador={numeroTrabajador}
            />
            
            <h3>4 PERIODO TRABAJADO HASTA</h3>
            <DateInput 
                registro="registro2" 
                field="periodoHasta" 
                numeroTrabajador={numeroTrabajador}
            />
            
            <h3>5 MESES</h3>
            <NumberInput 
                maxLength={2} 
                registro="registro2" 
                field="meses" 
                numeroTrabajador={numeroTrabajador}
            />
            
            <h3>6 BENEFICIO</h3>
            <SelectInput 
                registro="registro2" 
                field="beneficio" 
                numeroTrabajador={numeroTrabajador}
            >
                <OptionInput value="" label="Seleccionar..."/>
                <OptionInput value="1" label="SIN BENEFICIO"/>
                <OptionInput value="2" label="ZONA PATAGÓNICA - INCREMENTO DEL 22%"/>
                <OptionInput value="3" label="J/P/R-Deducción especifica equivalente a 8 veces la suma de los haberes minimos garantizados, definidos en el art.125 ley24.241 y sus mod. y comp."/>
                <OptionInput value="4" label="JUBILADO ZONA PATAGÓNICA"/>
            </SelectInput>
            
            <h3>7 ¿Desarrolla actividad de transporte de larga distancia? (NO CT 40/1989)</h3>
            <label>
                <RadioButtonInput 
                    name={`transporte_${numeroTrabajador}`}
                    value="si" 
                    registro="registro2" 
                    field="transporte"
                    numeroTrabajador={numeroTrabajador}
                /> Sí
            </label>
            <label>
                <RadioButtonInput 
                    name={`transporte_${numeroTrabajador}`}
                    value="no" 
                    registro="registro2" 
                    field="transporte"
                    numeroTrabajador={numeroTrabajador}
                /> No
            </label>
            
            <h3>8 ¿El trabajador posee el beneficio promocional de la Ley N° 27.424?</h3>
            <NumberInput value="0" readOnly={true}/>
            
            <h3>9 ¿El trabajador posee el beneficio de la Ley N° 27.718?</h3>
            <label>
                <RadioButtonInput 
                    name={`ley27718_${numeroTrabajador}`}
                    value="si" 
                    registro="registro2" 
                    field="ley27718"
                    numeroTrabajador={numeroTrabajador}
                /> Sí
            </label>
            <label>
                <RadioButtonInput 
                    name={`ley27718_${numeroTrabajador}`}
                    value="no" 
                    registro="registro2" 
                    field="ley27718"
                    numeroTrabajador={numeroTrabajador}
                /> No
            </label>
            
            <h3>10 ¿El trabajador labora bajo el régimen de teletrabajo - Ley 27.555?</h3>
            <label>
                <RadioButtonInput 
                    name={`teletrabajo_${numeroTrabajador}`}
                    value="si" 
                    registro="registro2" 
                    field="teletrabajo"
                    numeroTrabajador={numeroTrabajador}
                /> Sí
            </label>
            <label>
                <RadioButtonInput 
                    name={`teletrabajo_${numeroTrabajador}`}
                    value="no" 
                    registro="registro2" 
                    field="teletrabajo"
                    numeroTrabajador={numeroTrabajador}
                /> No
            </label>
            
            <h3>11 ¿El trabajador es personal militar en actividad - Ley 19.101?</h3>
            <label>
                <RadioButtonInput 
                    name={`militar_${numeroTrabajador}`}
                    value="si" 
                    registro="registro2" 
                    field="militar"
                    numeroTrabajador={numeroTrabajador}
                /> Sí
            </label>
            <label>
                <RadioButtonInput 
                    name={`militar_${numeroTrabajador}`}
                    value="no" 
                    registro="registro2" 
                    field="militar"
                    numeroTrabajador={numeroTrabajador}
                /> No
            </label>
            
            <h3>12 ¿El trabajador desarrolla la actividad de transporte TERRESTRE de larga distancia bajo el convenio 40/1989?</h3>
            <label>
                <RadioButtonInput 
                    name={`transporteTerrestre_${numeroTrabajador}`}
                    value="si" 
                    registro="registro2" 
                    field="transporteTerrestre"
                    numeroTrabajador={numeroTrabajador}
                /> Sí
            </label>
            <label>
                <RadioButtonInput 
                    name={`transporteTerrestre_${numeroTrabajador}`}
                    value="no" 
                    registro="registro2" 
                    field="transporteTerrestre"
                    numeroTrabajador={numeroTrabajador}
                /> No
            </label>
            <br/>
            <hr/>
        </>
    )
}

export default Registro2;