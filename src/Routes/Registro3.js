import React from "react";
import NumberInput from "../Components/NumberInput";

function Registro3(){
    return(
        <>
            <h2>REGISTRO 3</h2>
            <br/>
            <h1>REMUNERACIONES</h1>
            <br/>
            <h3>1 TIPO DE REGISTRO</h3>
            <NumberInput value="03" readOnly={true}/>
            <h3>2 CUIL</h3>
            <NumberInput maxLength={11} registro="registro3" field="cuil"/>
            <h3>3 REMUNERACIÓN BRUTA GRAVADA</h3>
            <NumberInput maxLength={15} registro="registro3" field="remuneracionBrutaGravada"/>
            <h3>4 RETRIBUCIONES NO HABITUALES GRAVADAS</h3>
            <NumberInput maxLength={15} registro="registro3" field="retribucionesNoHabituales"/>
            <h3>5 SAC PRIMERA CUOTA</h3>
            <NumberInput maxLength={15} registro="registro3" field="sacPrimeraCuota"/>
            <h3>6 SAC SEGUNDA CUOTA</h3>
            <NumberInput maxLength={15} registro="registro3" field="sacSegundaCuota"/>
            <h3>7 HORAS EXTRAS GRAVADAS</h3>
            <NumberInput maxLength={15} registro="registro3" field="horasExtrasGravadas"/>
            <h3>8 MOVILIDAD Y VIÁTICOS REMUNERACION GRAVADA</h3>
            <NumberInput value="0" readOnly={true}/>
            <h3>9 PERSONAL DOCENTE - MATERIAL DIDÁCTICO GRAVADO</h3>
            <NumberInput maxLength={15} registro="registro3" field="personalDocenteMaterialDidacticoGravado"/>
            <h3>10 REMUNERACIÓN NO ALCANZADA/EXENTA (SIN HORAS EXTRAS)</h3>
            <NumberInput maxLength={15} registro="registro3" field="remuneracionNoAlcanzada"/>
            <h3>11 REMUNERACIÓN EXENTA HORAS EXTRAS</h3>
            <NumberInput maxLength={15} registro="registro3" field="remuneracionExentaHorasExtras"/>
            <h3>12 MOVILIDAD Y VIÁTICOS REMUNERACIÓN EXENTA</h3>
            <NumberInput value="0" readOnly={true}/>
            <h3>13 PERSONAL DOCENTE - MATERIAL DIDÁCTICO EXENTO</h3>
            <NumberInput maxLength={15} registro="registro3" field="personalDocenteMaterialDidacticoExento"/>
            <h3>14 REMUNERACIÓN OTROS EMPLEOS - REMUNERACIÓN BRUTA GRAVADA</h3>
            <NumberInput maxLength={15} registro="registro3" field="remuneracionOtrosEmpleosBrutaGravada"/>
            <h3>15 REMUNERACIÓN OTROS EMPLEOS - RETRIBUCIONES NO HABITUALES GRAVADAS</h3>
            <NumberInput maxLength={15} registro="registro3" field="remuneracionOtrosEmpleosRetribucionesNoHabituales"/>
            <h3>16 REMUNERACIÓN OTROS EMPLEOS - SAC PRIMERA CUOTA GRAVADO</h3>
            <NumberInput maxLength={15} registro="registro3" field="remuneracionOtrosEmpleosSacPrimera"/>
            <h3>17 REMUNERACIÓN OTROS EMPLEOS - SAC SEGUNDA CUOTA GRAVADO</h3>
            <NumberInput maxLength={15} registro="registro3" field="remuneracionOtrosEmpleosSacSegunda"/>
            <h3>18 REMUNERACIÓN OTROS EMPLEOS - HORAS EXTRAS GRAVADAS</h3>
            <NumberInput maxLength={15} registro="registro3" field="remuneracionOtrosEmpleosHorasExtras"/>
            <h3>19 REMUNERACIÓN OTROS EMPLEOS - MOVILIDAD Y VIÁTICOS GRAVADA</h3>
            <NumberInput value="0" readOnly={true}/>
            <h3>20 REMUNERACIÓN OTROS EMPLEOS - DOCENTE MATERIAL DIDÁCTICO GRAVADO</h3>
            <NumberInput maxLength={15} registro="registro3" field="remuneracionOtrosEmpleosDocenteMaterialGravado"/>
            <h3>21 REMUNERACIÓN OTROS EMPLEOS - NO ALCANZADA/EXENTA (SIN HORAS EXTRAS)</h3>
            <NumberInput maxLength={15} registro="registro3" field="remuneracionOtrosEmpleosNoAlcanzada"/>
            <h3>22 REMUNERACIÓN OTROS EMPLEOS - EXENTA HORAS EXTRAS</h3>
            <NumberInput maxLength={15} registro="registro3" field="remuneracionOtrosEmpleosExentaHorasExtras"/>
            <h3>23 REMUNERACIÓN OTROS EMPLEOS - MOVILIDAD Y VIÁTICOS EXENTA</h3>
            <NumberInput value="0" readOnly={true}/>
            <h3>24 REMUNERACIÓN OTROS EMPLEOS - DOCENTE MATERIAL DIDÁCTICO EXENTO</h3>
            <NumberInput maxLength={15} registro="registro3" field="remuneracionOtrosEmpleosDocenteMaterialExento"/>
            <h3>25 REMUNERACIÓN GRAVADA</h3>
            <NumberInput maxLength={15} registro="registro3" field="remuneracionGravada"/>
            <h3>26 REMUNERACIÓN NO GRAVADA / NO ALCANZADA / EXENTA</h3>
            <NumberInput maxLength={15} registro="registro3" field="remuneracionNoGravada"/>
            <h3>27 TOTAL REMUNERACIONES</h3>
            <NumberInput maxLength={15} registro="registro3" field="totalRemuneraciones"/>
            <h3>28 RETRIBUCIONES NO HABITUALES EXENTAS / NO ALCANZADAS</h3>
            <NumberInput maxLength={15} registro="registro3" field="retribucionesNoHabitualesExentas"/>
            <h3>29 SAC PRIMERA CUOTA EXENTAS / NO ALCANZADAS</h3>
            <NumberInput maxLength={15} registro="registro3" field="sacPrimeraCuotaExentas"/>
            <h3>30 SAC SEGUNDA CUOTA EXENTAS / NO ALCANZADAS</h3>
            <NumberInput maxLength={15} registro="registro3" field="sacSegundaCuotaExentas"/>
            <h3>31 AJUSTES PERÍODOS ANTERIORES - REMUNERACIONES GRAVADAS</h3>
            <NumberInput maxLength={15} registro="registro3" field="ajustesPeriodosAnterioresGravadas"/>
            <h3>32 AJUSTES PERÍODOS ANTERIORES - REMUNERACIONES EXENTAS / NO ALCANZADAS</h3>
            <NumberInput maxLength={15} registro="registro3" field="ajustesPeriodosAnterioresExentas"/>
            <h3>33 Otros Empleos - RETRIBUCIONES NO HABITUALES EXENTAS / NO ALCANZADAS</h3>
            <NumberInput maxLength={15} registro="registro3" field="otrosEmpleosRetribucionesNoHabitualesExentas"/>
            <h3>34 Otros Empleos - SAC PRIMERA CUOTA EXENTAS / NO ALCANZADAS</h3>
            <NumberInput maxLength={15} registro="registro3" field="otrosEmpleosSacPrimeraCuotaExentas"/>
            <h3>35 Otros Empleos - SAC SEGUNDA CUOTA EXENTAS / NO ALCANZADAS</h3>
            <NumberInput maxLength={15} registro="registro3" field="otrosEmpleosSacSegundaCuotaExentas"/>
            <h3>36 Otros Empleos - AJUSTES PERÍODOS ANTERIORES - REMUNERACIONES GRAVADAS</h3>
            <NumberInput maxLength={15} registro="registro3" field="otrosEmpleosAjustesPeriodosAnterioresGravadas"/>
            <h3>37 Otros Empleos - AJUSTES PERÍODOS ANTERIORES - REMUNERACIONES EXENTAS / NO ALCANZADAS</h3>
            <NumberInput maxLength={15} registro="registro3" field="otrosEmpleosAjustesPeriodosAnterioresExentas"/>
            <h3>38 REMUNERACIÓN EXENTA LEY 27.718</h3>
            <NumberInput maxLength={15} registro="registro3" field="remuneracionExentaLey27718"/>
            <h3>39 Otros Empleos - REMUNERACIÓN EXENTA LEY 27.718</h3>
            <NumberInput maxLength={15} registro="registro3" field="otrosEmpleosRemuneracionExentaLey27718"/>
            <h3>40 BONOS PRODUCTIVIDAD GRAVADOS</h3>
            <NumberInput maxLength={15} registro="registro3" field="bonosProductividadGravados"/>
            <h3>41 FALLOS DE CAJA GRAVADOS</h3>
            <NumberInput maxLength={15} registro="registro3" field="fallosCajaGravados"/>
            <h3>42 CONCEPTOS DE SIMILAR NATURALEZA GRAVADOS</h3>
            <NumberInput maxLength={15} registro="registro3" field="conceptosSimilarNaturalezaGravados"/>
            <h3>43 BONOS DE PRODUCTIVIDAD EXENTOS</h3>
            <NumberInput maxLength={15} registro="registro3" field="bonosProductividadExentos"/>
            <h3>44 FALLOS DE CAJA EXENTOS</h3>
            <NumberInput maxLength={15} registro="registro3" field="fallosCajaExentos"/>
            <h3>45 CONCEPTOS DE SIMILAR NATURALEZA EXENTOS</h3>
            <NumberInput maxLength={15} registro="registro3" field="conceptosSimilarNaturalezaExentos"/>
            <h3>46 COMPENSACIÓN GASTOS TELETRABAJO EXENTOS</h3>
            <NumberInput maxLength={15} registro="registro3" field="compensacionGastosTeletrabajoExentos"/>
            <h3>47 PERSONAL MILITAR - SUPLEMENTOS ARTICULO 57 LEY 19.101 - EXENTOS</h3>
            <NumberInput maxLength={15} registro="registro3" field="personalMilitarSuplemetos"/>
            <h3>48 Otros Empleos - BONOS DE PRODUCTIVIDAD GRAVADOS</h3>
            <NumberInput maxLength={15} registro="registro3" field="otrosEmpleosBonosProductividadGravados"/>
            <h3>49 Otros Empleos - FALLOS DE CAJA GRAVADOS</h3>
            <NumberInput maxLength={15} registro="registro3" field="otrosEmpleosFallosCajaGravados"/>
            <h3>50 Otros Empleos - CONCEPTOS DE SIMILAR NATURALEZA GRAVADOS</h3>
            <NumberInput maxLength={15} registro="registro3" field="otrosEmpleosConceptosSimilarGravados"/>
            <h3>51 Otros Empleos - BONOS DE PRODUCTIVIDAD EXENTOS</h3>
            <NumberInput maxLength={15} registro="registro3" field="otrosEmpleosBonosProductividadExentos"/>
            <h3>52 Otros Empleos - FALLOS DE CAJA EXENTOS</h3>
            <NumberInput maxLength={15} registro="registro3" field="otrosEmpleosFallosCajaExentos"/>
            <h3>53 Otros Empleos - CONCEPTOS DE SIMILAR NATURALEZA EXENTOS</h3>
            <NumberInput maxLength={15} registro="registro3" field="otrosEmpleosConceptosSimilarExentos"/>
            <h3>54 Otros Empleos - COMPENSACIÓN GASTOS TELETRABAJO EXENTOS</h3>
            <NumberInput maxLength={15} registro="registro3" field="otrosEmpleosCompensacionTeletrabajo"/>
            <h3>55 Otros Empleos - PERSONAL MILITAR - SUPLEMENTOS ARTICULO 57 LEY 19.101 - EXENTOS</h3>
            <NumberInput maxLength={15} registro="registro3" field="otrosEmpleosPersonalMilitarSuplemetos"/>
            <h3>56 Cantidad Bonos de productividad</h3>
            <NumberInput maxLength={2} registro="registro3" field="cantidadBonosProductividad"/>
            <h3>57 Cantidad de Fallos de caja</h3>
            <NumberInput maxLength={2} registro="registro3" field="cantidadFallosCaja"/>
            <h3>58 Cantidad de Conceptos de similar naturaleza</h3>
            <NumberInput maxLength={2} registro="registro3" field="cantidadConceptosSimilar"/>
            <h3>59 Cantidad Otros EMPLEOS BONOS DE PRODUCTIVIDAD</h3>
            <NumberInput maxLength={2} registro="registro3" field="cantidadOtrosEmpleosBonosProductividad"/>
            <h3>60 Cantidad de Otros Empleos FALLOS DE CAJA</h3>
            <NumberInput maxLength={2} registro="registro3" field="cantidadOtrosEmpleosFallosCaja"/>
            <h3>61 Cantidad de Otros Empleos CONCEPTOS DE SIMILAR NATURALEZA</h3>
            <NumberInput maxLength={2} registro="registro3" field="cantidadOtrosEmpleosConceptosSimilar"/>
            <h3>62 MOVILIDAD REMUNERACIÓN GRAVADA</h3>
            <NumberInput maxLength={15} registro="registro3" field="movilidadRemuneracionGravada"/>
            <h3>63 VIÁTICOS REMUNERACIÓN GRAVADA</h3>
            <NumberInput maxLength={15} registro="registro3" field="viaticosRemuneracionGravada"/>
            <h3>64 COMPENSACIÓN ANÁLOGOS REMUNERACIÓN GRAVADA</h3>
            <NumberInput maxLength={15} registro="registro3" field="compensacionAnalogosGravada"/>
            <h3>65 REMUNERACIÓN OTROS EMPLEOS - MOVILIDAD REMUNERACIÓN GRAVADA</h3>
            <NumberInput maxLength={15} registro="registro3" field="otrosEmpleosMovilidadGravada"/>
            <h3>66 REMUNERACIÓN OTROS EMPLEOS - VIÁTICOS REMUNERACIÓN GRAVADA</h3>
            <NumberInput maxLength={15} registro="registro3" field="otrosEmpleosViaticosGravada"/>
            <h3>67 REMUNERACIÓN OTROS EMPLEOS - COMPENSACIÓN ANÁLOGOS REMUNERACIÓN GRAVADA</h3>
            <NumberInput maxLength={15} registro="registro3" field="otrosEmpleosCompensacionAnalogosGravada"/>
            <br/>
            <hr/>
        </>
    )
}

export default Registro3;