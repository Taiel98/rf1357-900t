import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import NumberInput from "../Components/NumberInput";
import { useFormContext } from "../Context/FormContext";

function Registro5(){
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
            <h2>REGISTRO 5</h2>
            <br/>
            <h1>DEDUCCIONES</h1>
            <br/>
            <h3>1 TIPO DE REGISTRO</h3>
            <NumberInput value="05" readOnly={true}/>
            <h3>2 CUIL</h3>
            <NumberInput maxLength={11} registro="registro5" field="cuil" numeroTrabajador={numeroTrabajador}/>
            <h3>3 GANANCIA NO IMPONIBLE</h3>
            <NumberInput maxLength={15} registro="registro5" field="gananciaNoImponible" numeroTrabajador={numeroTrabajador}/>
            <h3>4 DEDUCCIÓN ESPECIAL</h3>
            <NumberInput maxLength={15} registro="registro5" field="deduccionEspecial" numeroTrabajador={numeroTrabajador}/>
            <h3>5 DEDUCCIÓN ESPECIFICA</h3>
            <NumberInput maxLength={15} registro="registro5" field="deduccionEspecifica" numeroTrabajador={numeroTrabajador}/>
            <h3>6 CÓNYUGE / UNIÓN CONVIVENCIAL</h3>
            <NumberInput maxLength={15} registro="registro5" field="conyugeUnionConvivencial" numeroTrabajador={numeroTrabajador}/>
            <h3>7 CANTIDAD DE HIJOS / HIJASTROS al 50%</h3>
            <NumberInput maxLength={2} registro="registro5" field="cantidadHijos50" numeroTrabajador={numeroTrabajador}/>
            <h3>8 HIJOS / HIJASTROS ($)</h3>
            <NumberInput maxLength={15} registro="registro5" field="hijosHijastros" numeroTrabajador={numeroTrabajador}/>
            <h3>9 TOTAL DE CARGAS DE FAMILIA</h3>
            <NumberInput maxLength={15} registro="registro5" field="totalCargasFamilia" numeroTrabajador={numeroTrabajador}/>
            <h3>10 TOTAL DEDUCCIONES ARTICULO 30</h3>
            <NumberInput maxLength={15} registro="registro5" field="totalDeduccionesArticulo30" numeroTrabajador={numeroTrabajador}/>
            <h3>11 REMUNERACIÓN SUJETA A IMPUESTO (antes de deduccion Articulo 46 Ley 27.541)</h3>
            <NumberInput value="0" readOnly={true}/>
            <h3>12 DEDUCCIÓN INCISO A) ARTICULO 46 Ley 27.541 (GNI)</h3>
            <NumberInput value="0" readOnly={true}/>
            <h3>13 DEDUCCIÓN INCISO C) ARTICULO 46 Ley 27.541 (DE)</h3>
            <NumberInput value="0" readOnly={true}/>
            <h3>14 REMUNERACIÓN SUJETA A IMPUESTO</h3>
            <NumberInput maxLength={15} registro="registro5" field="remuneracionSujetaAImpuesto" numeroTrabajador={numeroTrabajador}/>
            <h3>15 CANTIDAD DE HIJOS / HIJASTROS INCAPACITADOS PARA EL TRABAJO al 50%</h3>
            <NumberInput maxLength={2} registro="registro5" field="cantidadHijosIncapacitados50" numeroTrabajador={numeroTrabajador}/>
            <h3>16 HIJOS / HIJASTROS INCAPACITADOS PARA EL TRABAJO ($)</h3>
            <NumberInput maxLength={15} registro="registro5" field="hijosHijastrosIncapacitados" numeroTrabajador={numeroTrabajador}/>
            <h3>17 Deduccion Especial Incrementada Primera parte del penúltimo párrafo del inciso c) del articulo 30 de la ley del gravamen</h3>
            <NumberInput maxLength={15} registro="registro5" field="deduccionEspecialIncrementadaPrimera" numeroTrabajador={numeroTrabajador}/>
            <h3>18 Deduccion Especial Incrementada Segunda parte del penúltimo párrafo del inciso c) del articulo 30 de la ley del gravamen</h3>
            <NumberInput maxLength={15} registro="registro5" field="deduccionEspecialIncrementadaSegunda" numeroTrabajador={numeroTrabajador}/>
            <h3>19 CANTIDAD DE HIJOS / HIJASTROS al 100%</h3>
            <NumberInput maxLength={2} registro="registro5" field="cantidadHijos100" numeroTrabajador={numeroTrabajador}/>
            <h3>20 CANTIDAD DE HIJOS / HIJASTROS INCAPACITADOS al 100%</h3>
            <NumberInput maxLength={2} registro="registro5" field="cantidadHijosIncapacitados100" numeroTrabajador={numeroTrabajador}/>
            <h3>21 CANTIDAD DE HIJOS ENTRE 18 Y 24 AÑOS - EDUCACIÓN al 50%</h3>
            <NumberInput maxLength={2} registro="registro5" field="cantidadHijos18a24Educacion50" numeroTrabajador={numeroTrabajador}/>
            <h3>22 CANTIDAD DE HIJOS ENTRE 18 Y 24 AÑOS - EDUCACIÓN al 100%</h3>
            <NumberInput maxLength={2} registro="registro5" field="cantidadHijos18a24Educacion100" numeroTrabajador={numeroTrabajador}/>
            <br/>
            <hr/>
        </>
    )
}

export default Registro5;