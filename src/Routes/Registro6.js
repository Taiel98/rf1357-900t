import React from "react";
import NumberInput from "../Components/NumberInput";
import SelectInput from "../Components/SelectInput";
import OptionInput from "../Components/OptionInput";

function Registro6(){
    return(
        <>
        <h2>REGISTRO 6</h2>
        <br/>
        <h1>CALCULO DE IMPUESTO</h1>
        <br/>
        <h3>1 TIPO DE REGISTRO</h3>
        <NumberInput value="06" readOnly={true}/>
        <h3>2 CUIL</h3>
        <NumberInput maxLength={11} registro="registro6" field="cuil"/>
        <h3>3 ALÍCUOTA - ARTICULO 94 LEY GANANCIAS</h3>
        <SelectInput registro="registro6" field="alicuotaArticulo94">
            <OptionInput value="" label="Seleccionar..."/>
            <OptionInput value="0" label="0%"/>
            <OptionInput value="1" label="5%"/>
            <OptionInput value="2" label="9%"/>
            <OptionInput value="3" label="12%"/>
            <OptionInput value="4" label="15%"/>
            <OptionInput value="5" label="19%"/>
            <OptionInput value="6" label="23%"/>
            <OptionInput value="7" label="26%"/>
            <OptionInput value="8" label="31%"/>
            <OptionInput value="9" label="35%"/>
        </SelectInput>
        <h3>4 ALÍCUOTA APLICABLE (SIN INCLUIR HORAS EXTRAS)</h3>
        <SelectInput registro="registro6" field="alicuotaAplicable">
            <OptionInput value="" label="Seleccionar..."/>
            <OptionInput value="0" label="0%"/>
            <OptionInput value="1" label="5%"/>
            <OptionInput value="2" label="9%"/>
            <OptionInput value="3" label="12%"/>
            <OptionInput value="4" label="15%"/>
            <OptionInput value="5" label="19%"/>
            <OptionInput value="6" label="23%"/>
            <OptionInput value="7" label="26%"/>
            <OptionInput value="8" label="31%"/>
            <OptionInput value="9" label="35%"/>
        </SelectInput>
        <h3>5 IMPUESTO DETERMINADO</h3>
        <NumberInput maxLength={15} registro="registro6" field="impuestoDeterminado"/>
        <h3>6 IMPUESTO RETENIDO</h3>
        <NumberInput maxLength={15} registro="registro6" field="impuestoRetenido"/>
        <h3>7 PAGOS A CUENTA (Total)</h3>
        <NumberInput maxLength={15} registro="registro6" field="pagosACuentaTotal"/>
        <h3>8 SALDO</h3>
        <NumberInput maxLength={15} registro="registro6" field="saldo"/>
        <h3>9 PAGOS A CUENTA - Impuesto sobre créditos y débitos en cuenta bancaria</h3>
        <NumberInput maxLength={15} registro="registro6" field="pagosACuentaCreditos"/>
        <h3>10 PAGOS A CUENTA - Percepciones / Retenciones aduaneras</h3>
        <NumberInput maxLength={15} registro="registro6" field="pagosACuentaPercepciones"/>
        <h3>11 PAGOS A CUENTA - Resolución General (AFIP) 3819/2015 - Cancelaciones en Efectivo - Servicios en el exterior por medio de agencias de viajes y turismo</h3>
        <NumberInput maxLength={15} registro="registro6" field="pagosACuentaResolucion3819"/>
        <h3>12 PAGOS A CUENTA - BONO - LEY 27.424</h3>
        <NumberInput value="0" readOnly={true} registro="registro6" field="pagosACuentaBonoLey27424"/>
        <h3>13 PAGO A CUENTA - LEY 27.541 Articulo 35 inciso a)</h3>
        <NumberInput maxLength={15} registro="registro6" field="pagoACuentaLey27541a"/>
        <h3>14 PAGO A CUENTA - LEY 27.541 Articulo 35 inciso b)</h3>
        <NumberInput maxLength={15} registro="registro6" field="pagoACuentaLey27541b"/>
        <h3>15 PAGO A CUENTA - LEY 27.541 Articulo 35 inciso c)</h3>
        <NumberInput maxLength={15} registro="registro6" field="pagoACuentaLey27541c"/>
        <h3>16 PAGO A CUENTA - LEY 27.541 Articulo 35 inciso d)</h3>
        <NumberInput maxLength={15} registro="registro6" field="pagoACuentaLey27541d"/>
        <h3>17 PAGO A CUENTA - LEY 27.541 Articulo 35 inciso e)</h3>
        <NumberInput maxLength={15} registro="registro6" field="pagoACuentaLey27541e"/>
        <h3>18 PAGOS A CUENTA - Impuesto sobre créditos y débitos - sobre movimientos de fondos propios o de terceros</h3>
        <NumberInput maxLength={15} registro="registro6" field="pagosACuentaMovimientosFondos"/>
        <h3>19 PAGOS A CUENTA - Resolución General (AFIP) 3819/2015 - Cancelaciones en Efectivo - Servicios de transporte terrestre, aéreo y por vía acuática de pasajeros con destino fuera del país</h3>
        <NumberInput maxLength={15} registro="registro6" field="pagosACuentaTransporte"/>
        <br/>
        </>
    )
}

export default Registro6;