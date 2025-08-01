import React, {useState} from "react";
import NumberInput from "../Components/NumberInput";
import SelectInput from "../Components/SelectInput";
import OptionInput from "../Components/OptionInput";

function Registro6(){
    const [alicuotasArt, setAlicuotasArt] = useState('');
    
        const handleArtChange = (e) => {
            setAlicuotasArt(e.target.value);
        };

    const [alicuotasApl, setAlicuotasApl] = useState('');
    
        const handleAplChange = (e) => {
            setAlicuotasApl(e.target.value);
        };

    return(
        <>
        <h2>REGISTRO 6</h2>
        <br/>
        <h1>CALCULO DE IMPUESTO</h1>
        <br/>
        <h3>1 TIPO DE REGISTRO</h3>
        <NumberInput value="06" readOnly={true}/>
        <h3>2 CUIL</h3>
        <NumberInput maxLength={11}/>
        <h3>3 ALÍCUOTA - ARTICULO 94 LEY GANANCIAS</h3>
        <SelectInput value={alicuotasArt} onChange={handleArtChange}>
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
        <SelectInput value={alicuotasApl} onChange={handleAplChange}>
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
        <NumberInput maxLength={15}/>
        <h3>6 IMPUESTO RETENIDO</h3>
        <NumberInput maxLength={15}/>
        <h3>7 PAGOS A CUENTA (Total)</h3>
        <NumberInput maxLength={15}/>
        <h3>8 SALDO</h3>
        <NumberInput maxLength={15}/>
        <h3>9 PAGOS A CUENTA - Impuesto sobre créditos y débitos en cuenta bancaria</h3>
        <NumberInput maxLength={15}/>
        <h3>10 PAGOS A CUNETA - Percepciones / Retenciones aduaneras</h3>
        <NumberInput maxLength={15}/>
        <h3>11 PAGOS A CUENTA - - Resolución General (AFIP) 3819/2015 - Cancelaciones en Efectivo - Servicios en el exterior por medio de agencias de viajes y turismo</h3>
        <NumberInput maxLength={15}/>
        <h3>12 PAGOS A CUENTA - BONO - LEY 27.424</h3>
        <NumberInput value="0" readOnly={true}/>
        <h3>13 PAGO A CUENTA - LEY 27.541 Articulo 35 inciso a)</h3>
        <NumberInput maxLength={15}/>
        <h3>14 PAGO A CUENTA - LEY 27.541 Articulo 35 inciso b)</h3>
        <NumberInput maxLength={15}/>
        <h3>15 PAGO A CUENTA - LEY 27.541 Articulo 35 inciso c)</h3>
        <NumberInput maxLength={15}/>
        <h3>16 PAGO A CUENTA - LEY 27.541 Articulo 35 inciso d)</h3>
        <NumberInput maxLength={15}/>
        <h3>17 PAGO A CUENTA - LEY 27.541 Articulo 35 inciso e)</h3>
        <NumberInput maxLength={15}/>
        <h3>18 PAGOS A CUENTA - Impuesto sobre créditos y débitos - sobre movimientos de fondos propios o de terceros</h3>
        <NumberInput maxLength={15}/>
        <h3>19 PAGOS A CUNETA - Resolución General (AFIP) 3819/2015 - Cancelaciones en Efectivo - Servicios de transporte terrestre, aéreo y por vía acuática de pasajeros con destino fuera del país</h3>
        <NumberInput maxLength={15}/>
        <br/>
        </>
    )
}

export default Registro6;