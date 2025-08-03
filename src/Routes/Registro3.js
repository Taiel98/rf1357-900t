import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import NumberInput from "../Components/NumberInput";
import { useFormContext } from "../Context/FormContext";

function Registro3(){
    const { numeroTrabajador } = useParams();
    const { initializeTrabajador, getFieldValue, updateFormData } = useFormContext();

    // Inicializar el trabajador si no existe
    useEffect(() => {
        if (numeroTrabajador) {
            initializeTrabajador(numeroTrabajador);
        }
    }, [numeroTrabajador, initializeTrabajador]);

    // Función para calcular la remuneración gravada
    const calcularRemuneracionGravada = () => {
        const campos = [
            'remuneracionBrutaGravada',
            'retribucionesNoHabituales',
            'sacPrimeraCuota',
            'sacSegundaCuota',
            'horasExtrasGravadas',
            'movilidadRemuneracionGravada',
            'viaticosRemuneracionGravada',
            'compensacionAnalogosGravada',
            'personalDocenteMaterialDidacticoGravado',
            'bonosProductividadGravados',
            'fallosCajaGravados',
            'conceptosSimilarNaturalezaGravados',
            'ajustesPeriodosAnterioresGravadas',
            'remuneracionOtrosEmpleosBrutaGravada',
            'remuneracionOtrosEmpleosRetribucionesNoHabituales',
            'remuneracionOtrosEmpleosSacPrimera',
            'remuneracionOtrosEmpleosSacSegunda',
            'remuneracionOtrosEmpleosHorasExtras',
            'remuneracionOtrosEmpleosDocenteMaterialGravado',
            'otrosEmpleosMovilidadGravada',
            'otrosEmpleosViaticosGravada',
            'otrosEmpleosCompensacionAnalogosGravada',
            'remuneracionOtrosEmpleosDocenteMaterialGravado',
            'otrosEmpleosBonosProductividadGravados',
            'otrosEmpleosFallosCajaGravados',
            'otrosEmpleosConceptosSimilarGravados',
            'otrosEmpleosAjustesPeriodosAnterioresGravadas'
        ];

        let total = 0;
        campos.forEach(campo => {
            const valor = getFieldValue('registro3', campo, numeroTrabajador);
            const numero = parseFloat(valor) || 0;
            total += numero;
        });
        return total.toString();
    };
    // Función para calcular el total de remuneraciones
    const calcularTotalRemuneraciones = () => {
        const remuneracionGravada = parseFloat(calcularRemuneracionGravada()) || 0;
        const remuneracionNoGravada = parseFloat(calcularRemuneracionNoGravada()) || 0;
        
        const total = remuneracionGravada + remuneracionNoGravada;
        
        // No puede ser menor a cero, en ese caso informar con valor cero
        return Math.max(0, total).toString();
    };

    // Función para calcular la remuneración no gravada
    const calcularRemuneracionNoGravada = () => {
        const campos = [
            'remuneracionNoAlcanzada',
            'remuneracionExentaHorasExtras',
            'personalDocenteMaterialDidacticoExento',
            'remuneracionOtrosEmpleosNoAlcanzada',
            'remuneracionOtrosEmpleosExentaHorasExtras',
            'remuneracionOtrosEmpleosDocenteMaterialExento',
            'retribucionesNoHabitualesExentas',
            'sacPrimeraCuotaExentas',
            'sacSegundaCuotaExentas',
            'ajustesPeriodosAnterioresExentas',
            'otrosEmpleosRetribucionesNoHabitualesExentas',
            'otrosEmpleosSacPrimeraCuotaExentas',
            'otrosEmpleosSacSegundaCuotaExentas',
            'otrosEmpleosAjustesPeriodosAnterioresExentas',
            'remuneracionExentaLey27718',
            'otrosEmpleosRemuneracionExentaLey27718',
            'bonosProductividadExentos',
            'fallosCajaExentos',
            'conceptosSimilarNaturalezaExentos',
            'compensacionGastosTeletrabajoExentos',
            'personalMilitarSuplemetos',
            'otrosEmpleosBonosProductividadExentos',
            'otrosEmpleosFallosCajaExentos',
            'otrosEmpleosConceptosSimilarExentos',
            'otrosEmpleosCompensacionTeletrabajo',
            'otrosEmpleosPersonalMilitarSuplemetos'
        ];

        let total = 0;
        campos.forEach(campo => {
            const valor = getFieldValue('registro3', campo, numeroTrabajador);
            const numero = parseFloat(valor) || 0;
            total += numero;
        });

        return total.toString();
    };

    // Effect para recalcular automáticamente cuando cambien los campos
    useEffect(() => {
        if (numeroTrabajador) {
            // Calcular remuneración gravada
            const remuneracionGravada = calcularRemuneracionGravada();
            const valorActualGravada = getFieldValue('registro3', 'remuneracionGravada', numeroTrabajador);
            
            if (remuneracionGravada !== valorActualGravada) {
                updateFormData('registro3', 'remuneracionGravada', remuneracionGravada, numeroTrabajador);
            }

            // Calcular remuneración no gravada
            const remuneracionNoGravada = calcularRemuneracionNoGravada();
            const valorActualNoGravada = getFieldValue('registro3', 'remuneracionNoGravada', numeroTrabajador);
            
            // Calcular total de remuneraciones
            const totalRemuneraciones = calcularTotalRemuneraciones();
            const valorActualTotal = getFieldValue('registro3', 'totalRemuneraciones', numeroTrabajador);
            
            if (totalRemuneraciones !== valorActualTotal) {
                updateFormData('registro3', 'totalRemuneraciones', totalRemuneraciones, numeroTrabajador);
            }
        }
    }, [
        // Campos para remuneración gravada
        getFieldValue('registro3', 'remuneracionBrutaGravada', numeroTrabajador),
        getFieldValue('registro3', 'retribucionesNoHabituales', numeroTrabajador),
        getFieldValue('registro3', 'sacPrimeraCuota', numeroTrabajador),
        getFieldValue('registro3', 'sacSegundaCuota', numeroTrabajador),
        getFieldValue('registro3', 'horasExtrasGravadas', numeroTrabajador),
        getFieldValue('registro3', 'movilidadRemuneracionGravada', numeroTrabajador),
        getFieldValue('registro3', 'viaticosRemuneracionGravada', numeroTrabajador),
        getFieldValue('registro3', 'compensacionAnalogosGravada', numeroTrabajador),
        getFieldValue('registro3', 'personalDocenteMaterialDidacticoGravado', numeroTrabajador),
        getFieldValue('registro3', 'bonosProductividadGravados', numeroTrabajador),
        getFieldValue('registro3', 'fallosCajaGravados', numeroTrabajador),
        getFieldValue('registro3', 'conceptosSimilarNaturalezaGravados', numeroTrabajador),
        getFieldValue('registro3', 'ajustesPeriodosAnterioresGravadas', numeroTrabajador),
        getFieldValue('registro3', 'remuneracionOtrosEmpleosBrutaGravada', numeroTrabajador),
        getFieldValue('registro3', 'remuneracionOtrosEmpleosRetribucionesNoHabituales', numeroTrabajador),
        getFieldValue('registro3', 'remuneracionOtrosEmpleosSacPrimera', numeroTrabajador),
        getFieldValue('registro3', 'remuneracionOtrosEmpleosSacSegunda', numeroTrabajador),
        getFieldValue('registro3', 'remuneracionOtrosEmpleosHorasExtras', numeroTrabajador),
        getFieldValue('registro3', 'remuneracionOtrosEmpleosDocenteMaterialGravado', numeroTrabajador),
        getFieldValue('registro3', 'otrosEmpleosMovilidadGravada', numeroTrabajador),
        getFieldValue('registro3', 'otrosEmpleosViaticosGravada', numeroTrabajador),
        getFieldValue('registro3', 'otrosEmpleosCompensacionAnalogosGravada', numeroTrabajador),
        getFieldValue('registro3', 'remuneracionOtrosEmpleosDocenteMaterialGravado', numeroTrabajador),
        getFieldValue('registro3', 'otrosEmpleosBonosProductividadGravados', numeroTrabajador),
        getFieldValue('registro3', 'otrosEmpleosFallosCajaGravados', numeroTrabajador),
        getFieldValue('registro3', 'otrosEmpleosConceptosSimilarGravados', numeroTrabajador),
        getFieldValue('registro3', 'otrosEmpleosAjustesPeriodosAnterioresGravadas', numeroTrabajador),
        
        // Campos para remuneración no gravada
        getFieldValue('registro3', 'remuneracionNoAlcanzada', numeroTrabajador),
        getFieldValue('registro3', 'remuneracionExentaHorasExtras', numeroTrabajador),
        getFieldValue('registro3', 'personalDocenteMaterialDidacticoExento', numeroTrabajador),
        getFieldValue('registro3', 'remuneracionOtrosEmpleosNoAlcanzada', numeroTrabajador),
        getFieldValue('registro3', 'remuneracionOtrosEmpleosExentaHorasExtras', numeroTrabajador),
        getFieldValue('registro3', 'remuneracionOtrosEmpleosDocenteMaterialExento', numeroTrabajador),
        getFieldValue('registro3', 'retribucionesNoHabitualesExentas', numeroTrabajador),
        getFieldValue('registro3', 'sacPrimeraCuotaExentas', numeroTrabajador),
        getFieldValue('registro3', 'sacSegundaCuotaExentas', numeroTrabajador),
        getFieldValue('registro3', 'ajustesPeriodosAnterioresExentas', numeroTrabajador),
        getFieldValue('registro3', 'otrosEmpleosRetribucionesNoHabitualesExentas', numeroTrabajador),
        getFieldValue('registro3', 'otrosEmpleosSacPrimeraCuotaExentas', numeroTrabajador),
        getFieldValue('registro3', 'otrosEmpleosSacSegundaCuotaExentas', numeroTrabajador),
        getFieldValue('registro3', 'otrosEmpleosAjustesPeriodosAnterioresExentas', numeroTrabajador),
        getFieldValue('registro3', 'remuneracionExentaLey27718', numeroTrabajador),
        getFieldValue('registro3', 'otrosEmpleosRemuneracionExentaLey27718', numeroTrabajador),
        getFieldValue('registro3', 'bonosProductividadExentos', numeroTrabajador),
        getFieldValue('registro3', 'fallosCajaExentos', numeroTrabajador),
        getFieldValue('registro3', 'conceptosSimilarNaturalezaExentos', numeroTrabajador),
        getFieldValue('registro3', 'compensacionGastosTeletrabajoExentos', numeroTrabajador),
        getFieldValue('registro3', 'personalMilitarSuplemetos', numeroTrabajador),
        getFieldValue('registro3', 'otrosEmpleosBonosProductividadExentos', numeroTrabajador),
        getFieldValue('registro3', 'otrosEmpleosFallosCajaExentos', numeroTrabajador),
        getFieldValue('registro3', 'otrosEmpleosConceptosSimilarExentos', numeroTrabajador),
        getFieldValue('registro3', 'otrosEmpleosCompensacionTeletrabajo', numeroTrabajador),
        getFieldValue('registro3', 'otrosEmpleosPersonalMilitarSuplemetos', numeroTrabajador),
        
        numeroTrabajador
    ]);

    return(
        <>
            <h2>REGISTRO 3</h2>
            <br/>
            <h1>REMUNERACIONES</h1>
            <br/>
            <h3>1 TIPO DE REGISTRO</h3>
            <NumberInput value="03" readOnly={true}/>
            <h3>2 CUIL</h3>
            <NumberInput maxLength={11} registro="registro3" field="cuil" numeroTrabajador={numeroTrabajador}/>
            <h3>3 REMUNERACIÓN BRUTA GRAVADA</h3>
            <NumberInput maxLength={15} registro="registro3" field="remuneracionBrutaGravada" numeroTrabajador={numeroTrabajador}/>
            <h3>4 RETRIBUCIONES NO HABITUALES GRAVADAS</h3>
            <NumberInput maxLength={15} registro="registro3" field="retribucionesNoHabituales" numeroTrabajador={numeroTrabajador}/>
            <h3>5 SAC PRIMERA CUOTA</h3>
            <NumberInput maxLength={15} registro="registro3" field="sacPrimeraCuota" numeroTrabajador={numeroTrabajador}/>
            <h3>6 SAC SEGUNDA CUOTA</h3>
            <NumberInput maxLength={15} registro="registro3" field="sacSegundaCuota" numeroTrabajador={numeroTrabajador}/>
            <h3>7 HORAS EXTRAS GRAVADAS</h3>
            <NumberInput maxLength={15} registro="registro3" field="horasExtrasGravadas" numeroTrabajador={numeroTrabajador}/>
            <h3>8 MOVILIDAD Y VIÁTICOS REMUNERACION GRAVADA</h3>
            <NumberInput value="0" readOnly={true}/>
            <h3>9 PERSONAL DOCENTE - MATERIAL DIDÁCTICO GRAVADO</h3>
            <NumberInput maxLength={15} registro="registro3" field="personalDocenteMaterialDidacticoGravado" numeroTrabajador={numeroTrabajador}/>
            <h3>10 REMUNERACIÓN NO ALCANZADA/EXENTA (SIN HORAS EXTRAS)</h3>
            <NumberInput maxLength={15} registro="registro3" field="remuneracionNoAlcanzada" numeroTrabajador={numeroTrabajador}/>
            <h3>11 REMUNERACIÓN EXENTA HORAS EXTRAS</h3>
            <NumberInput maxLength={15} registro="registro3" field="remuneracionExentaHorasExtras" numeroTrabajador={numeroTrabajador}/>
            <h3>12 MOVILIDAD Y VIÁTICOS REMUNERACIÓN EXENTA</h3>
            <NumberInput value="0" readOnly={true}/>
            <h3>13 PERSONAL DOCENTE - MATERIAL DIDÁCTICO EXENTO</h3>
            <NumberInput maxLength={15} registro="registro3" field="personalDocenteMaterialDidacticoExento" numeroTrabajador={numeroTrabajador}/>
            <h3>14 REMUNERACIÓN OTROS EMPLEOS - REMUNERACIÓN BRUTA GRAVADA</h3>
            <NumberInput maxLength={15} registro="registro3" field="remuneracionOtrosEmpleosBrutaGravada" numeroTrabajador={numeroTrabajador}/>
            <h3>15 REMUNERACIÓN OTROS EMPLEOS - RETRIBUCIONES NO HABITUALES GRAVADAS</h3>
            <NumberInput maxLength={15} registro="registro3" field="remuneracionOtrosEmpleosRetribucionesNoHabituales" numeroTrabajador={numeroTrabajador}/>
            <h3>16 REMUNERACIÓN OTROS EMPLEOS - SAC PRIMERA CUOTA GRAVADO</h3>
            <NumberInput maxLength={15} registro="registro3" field="remuneracionOtrosEmpleosSacPrimera" numeroTrabajador={numeroTrabajador}/>
            <h3>17 REMUNERACIÓN OTROS EMPLEOS - SAC SEGUNDA CUOTA GRAVADO</h3>
            <NumberInput maxLength={15} registro="registro3" field="remuneracionOtrosEmpleosSacSegunda" numeroTrabajador={numeroTrabajador}/>
            <h3>18 REMUNERACIÓN OTROS EMPLEOS - HORAS EXTRAS GRAVADAS</h3>
            <NumberInput maxLength={15} registro="registro3" field="remuneracionOtrosEmpleosHorasExtras" numeroTrabajador={numeroTrabajador}/>
            <h3>19 REMUNERACIÓN OTROS EMPLEOS - MOVILIDAD Y VIÁTICOS GRAVADA</h3>
            <NumberInput value="0" readOnly={true}/>
            <h3>20 REMUNERACIÓN OTROS EMPLEOS - DOCENTE MATERIAL DIDÁCTICO GRAVADO</h3>
            <NumberInput maxLength={15} registro="registro3" field="remuneracionOtrosEmpleosDocenteMaterialGravado" numeroTrabajador={numeroTrabajador}/>
            <h3>21 REMUNERACIÓN OTROS EMPLEOS - NO ALCANZADA/EXENTA (SIN HORAS EXTRAS)</h3>
            <NumberInput maxLength={15} registro="registro3" field="remuneracionOtrosEmpleosNoAlcanzada" numeroTrabajador={numeroTrabajador}/>
            <h3>22 REMUNERACIÓN OTROS EMPLEOS - EXENTA HORAS EXTRAS</h3>
            <NumberInput maxLength={15} registro="registro3" field="remuneracionOtrosEmpleosExentaHorasExtras" numeroTrabajador={numeroTrabajador}/>
            <h3>23 REMUNERACIÓN OTROS EMPLEOS - MOVILIDAD Y VIÁTICOS EXENTA</h3>
            <NumberInput value="0" readOnly={true}/>
            <h3>24 REMUNERACIÓN OTROS EMPLEOS - DOCENTE MATERIAL DIDÁCTICO EXENTO</h3>
            <NumberInput maxLength={15} registro="registro3" field="remuneracionOtrosEmpleosDocenteMaterialExento" numeroTrabajador={numeroTrabajador}/>
            
            <h3>25 REMUNERACIÓN GRAVADA 
                <span style={{color: '#28a745', fontSize: '14px', fontWeight: 'normal'}}>
                    (CALCULADO AUTOMÁTICAMENTE)
                </span>
            </h3>
            <NumberInput 
                maxLength={15} 
                registro="registro3" 
                field="remuneracionGravada" 
                numeroTrabajador={numeroTrabajador}
                readOnly={true}
                value={calcularRemuneracionGravada()}
            />
            <small style={{color: '#666', display: 'block', marginTop: '5px'}}>
                Este campo se calcula automáticamente como la suma de todos los campos de remuneración gravada
            </small>
            
            <h3>26 REMUNERACIÓN NO GRAVADA / NO ALCANZADA / EXENTA
                <span style={{color: '#28a745', fontSize: '14px', fontWeight: 'normal'}}>
                    (CALCULADO AUTOMÁTICAMENTE)
                </span>
            </h3>
            <NumberInput 
                maxLength={15} 
                registro="registro3" 
                field="remuneracionNoGravada" 
                numeroTrabajador={numeroTrabajador}
                readOnly={true}
                value={calcularRemuneracionNoGravada()}
            />
            <small style={{color: '#666', display: 'block', marginTop: '5px'}}>
                Este campo se calcula automáticamente como la suma de todos los campos de remuneración no gravada/exenta
            </small>
            <h3>27 TOTAL REMUNERACIONES
                <span style={{color: '#28a745', fontSize: '14px', fontWeight: 'normal'}}>
                    (CALCULADO AUTOMÁTICAMENTE)
                </span>
            </h3>
            <NumberInput 
                maxLength={15} 
                registro="registro3" 
                field="totalRemuneraciones" 
                numeroTrabajador={numeroTrabajador}
                readOnly={true}
                value={calcularTotalRemuneraciones()}
            />
            <small style={{color: '#666', display: 'block', marginTop: '5px'}}>
                Este campo se calcula como: Remuneración Gravada + Remuneración No Gravada (mínimo 0)
            </small>
            <h3>28 RETRIBUCIONES NO HABITUALES EXENTAS / NO ALCANZADAS</h3>
            <NumberInput maxLength={15} registro="registro3" field="retribucionesNoHabitualesExentas" numeroTrabajador={numeroTrabajador}/>
            <h3>29 SAC PRIMERA CUOTA EXENTAS / NO ALCANZADAS</h3>
            <NumberInput maxLength={15} registro="registro3" field="sacPrimeraCuotaExentas" numeroTrabajador={numeroTrabajador}/>
            <h3>30 SAC SEGUNDA CUOTA EXENTAS / NO ALCANZADAS</h3>
            <NumberInput maxLength={15} registro="registro3" field="sacSegundaCuotaExentas" numeroTrabajador={numeroTrabajador}/>
            <h3>31 AJUSTES PERÍODOS ANTERIORES - REMUNERACIONES GRAVADAS</h3>
            <NumberInput maxLength={15} registro="registro3" field="ajustesPeriodosAnterioresGravadas" numeroTrabajador={numeroTrabajador}/>
            <h3>32 AJUSTES PERÍODOS ANTERIORES - REMUNERACIONES EXENTAS / NO ALCANZADAS</h3>
            <NumberInput maxLength={15} registro="registro3" field="ajustesPeriodosAnterioresExentas" numeroTrabajador={numeroTrabajador}/>
            <h3>33 Otros Empleos - RETRIBUCIONES NO HABITUALES EXENTAS / NO ALCANZADAS</h3>
            <NumberInput maxLength={15} registro="registro3" field="otrosEmpleosRetribucionesNoHabitualesExentas" numeroTrabajador={numeroTrabajador}/>
            <h3>34 Otros Empleos - SAC PRIMERA CUOTA EXENTAS / NO ALCANZADAS</h3>
            <NumberInput maxLength={15} registro="registro3" field="otrosEmpleosSacPrimeraCuotaExentas" numeroTrabajador={numeroTrabajador}/>
            <h3>35 Otros Empleos - SAC SEGUNDA CUOTA EXENTAS / NO ALCANZADAS</h3>
            <NumberInput maxLength={15} registro="registro3" field="otrosEmpleosSacSegundaCuotaExentas" numeroTrabajador={numeroTrabajador}/>
            <h3>36 Otros Empleos - AJUSTES PERÍODOS ANTERIORES - REMUNERACIONES GRAVADAS</h3>
            <NumberInput maxLength={15} registro="registro3" field="otrosEmpleosAjustesPeriodosAnterioresGravadas" numeroTrabajador={numeroTrabajador}/>
            <h3>37 Otros Empleos - AJUSTES PERÍODOS ANTERIORES - REMUNERACIONES EXENTAS / NO ALCANZADAS</h3>
            <NumberInput maxLength={15} registro="registro3" field="otrosEmpleosAjustesPeriodosAnterioresExentas" numeroTrabajador={numeroTrabajador}/>
            <h3>38 REMUNERACIÓN EXENTA LEY 27.718</h3>
            <NumberInput maxLength={15} registro="registro3" field="remuneracionExentaLey27718" numeroTrabajador={numeroTrabajador}/>
            <h3>39 Otros Empleos - REMUNERACIÓN EXENTA LEY 27.718</h3>
            <NumberInput maxLength={15} registro="registro3" field="otrosEmpleosRemuneracionExentaLey27718" numeroTrabajador={numeroTrabajador}/>
            <h3>40 BONOS PRODUCTIVIDAD GRAVADOS</h3>
            <NumberInput maxLength={15} registro="registro3" field="bonosProductividadGravados" numeroTrabajador={numeroTrabajador}/>
            <h3>41 FALLOS DE CAJA GRAVADOS</h3>
            <NumberInput maxLength={15} registro="registro3" field="fallosCajaGravados" numeroTrabajador={numeroTrabajador}/>
            <h3>42 CONCEPTOS DE SIMILAR NATURALEZA GRAVADOS</h3>
            <NumberInput maxLength={15} registro="registro3" field="conceptosSimilarNaturalezaGravados" numeroTrabajador={numeroTrabajador}/>
            <h3>43 BONOS DE PRODUCTIVIDAD EXENTOS</h3>
            <NumberInput maxLength={15} registro="registro3" field="bonosProductividadExentos" numeroTrabajador={numeroTrabajador}/>
            <h3>44 FALLOS DE CAJA EXENTOS</h3>
            <NumberInput maxLength={15} registro="registro3" field="fallosCajaExentos" numeroTrabajador={numeroTrabajador}/>
            <h3>45 CONCEPTOS DE SIMILAR NATURALEZA EXENTOS</h3>
            <NumberInput maxLength={15} registro="registro3" field="conceptosSimilarNaturalezaExentos" numeroTrabajador={numeroTrabajador}/>
            <h3>46 COMPENSACIÓN GASTOS TELETRABAJO EXENTOS</h3>
            <NumberInput maxLength={15} registro="registro3" field="compensacionGastosTeletrabajoExentos" numeroTrabajador={numeroTrabajador}/>
            <h3>47 PERSONAL MILITAR - SUPLEMENTOS ARTICULO 57 LEY 19.101 - EXENTOS</h3>
            <NumberInput maxLength={15} registro="registro3" field="personalMilitarSuplemetos" numeroTrabajador={numeroTrabajador}/>
            <h3>48 Otros Empleos - BONOS DE PRODUCTIVIDAD GRAVADOS</h3>
            <NumberInput maxLength={15} registro="registro3" field="otrosEmpleosBonosProductividadGravados" numeroTrabajador={numeroTrabajador}/>
            <h3>49 Otros Empleos - FALLOS DE CAJA GRAVADOS</h3>
            <NumberInput maxLength={15} registro="registro3" field="otrosEmpleosFallosCajaGravados" numeroTrabajador={numeroTrabajador}/>
            <h3>50 Otros Empleos - CONCEPTOS DE SIMILAR NATURALEZA GRAVADOS</h3>
            <NumberInput maxLength={15} registro="registro3" field="otrosEmpleosConceptosSimilarGravados" numeroTrabajador={numeroTrabajador}/>
            <h3>51 Otros Empleos - BONOS DE PRODUCTIVIDAD EXENTOS</h3>
            <NumberInput maxLength={15} registro="registro3" field="otrosEmpleosBonosProductividadExentos" numeroTrabajador={numeroTrabajador}/>
            <h3>52 Otros Empleos - FALLOS DE CAJA EXENTOS</h3>
            <NumberInput maxLength={15} registro="registro3" field="otrosEmpleosFallosCajaExentos" numeroTrabajador={numeroTrabajador}/>
            <h3>53 Otros Empleos - CONCEPTOS DE SIMILAR NATURALEZA EXENTOS</h3>
            <NumberInput maxLength={15} registro="registro3" field="otrosEmpleosConceptosSimilarExentos" numeroTrabajador={numeroTrabajador}/>
            <h3>54 Otros Empleos - COMPENSACIÓN GASTOS TELETRABAJO EXENTOS</h3>
            <NumberInput maxLength={15} registro="registro3" field="otrosEmpleosCompensacionTeletrabajo" numeroTrabajador={numeroTrabajador}/>
            <h3>55 Otros Empleos - PERSONAL MILITAR - SUPLEMENTOS ARTICULO 57 LEY 19.101 - EXENTOS</h3>
            <NumberInput maxLength={15} registro="registro3" field="otrosEmpleosPersonalMilitarSuplemetos" numeroTrabajador={numeroTrabajador}/>
            <h3>56 Cantidad Bonos de productividad</h3>
            <NumberInput maxLength={2} registro="registro3" field="cantidadBonosProductividad" numeroTrabajador={numeroTrabajador}/>
            <h3>57 Cantidad de Fallos de caja</h3>
            <NumberInput maxLength={2} registro="registro3" field="cantidadFallosCaja" numeroTrabajador={numeroTrabajador}/>
            <h3>58 Cantidad de Conceptos de similar naturaleza</h3>
            <NumberInput maxLength={2} registro="registro3" field="cantidadConceptosSimilar" numeroTrabajador={numeroTrabajador}/>
            <h3>59 Cantidad Otros EMPLEOS BONOS DE PRODUCTIVIDAD</h3>
            <NumberInput maxLength={2} registro="registro3" field="cantidadOtrosEmpleosBonosProductividad" numeroTrabajador={numeroTrabajador}/>
            <h3>60 Cantidad de Otros Empleos FALLOS DE CAJA</h3>
            <NumberInput maxLength={2} registro="registro3" field="cantidadOtrosEmpleosFallosCaja" numeroTrabajador={numeroTrabajador}/>
            <h3>61 Cantidad de Otros Empleos CONCEPTOS DE SIMILAR NATURALEZA</h3>
            <NumberInput maxLength={2} registro="registro3" field="cantidadOtrosEmpleosConceptosSimilar" numeroTrabajador={numeroTrabajador}/>
            <h3>62 MOVILIDAD REMUNERACIÓN GRAVADA</h3>
            <NumberInput maxLength={15} registro="registro3" field="movilidadRemuneracionGravada" numeroTrabajador={numeroTrabajador}/>
            <h3>63 VIÁTICOS REMUNERACIÓN GRAVADA</h3>
            <NumberInput maxLength={15} registro="registro3" field="viaticosRemuneracionGravada" numeroTrabajador={numeroTrabajador}/>
            <h3>64 COMPENSACIÓN ANÁLOGOS REMUNERACIÓN GRAVADA</h3>
            <NumberInput maxLength={15} registro="registro3" field="compensacionAnalogosGravada" numeroTrabajador={numeroTrabajador}/>
            <h3>65 REMUNERACIÓN OTROS EMPLEOS - MOVILIDAD REMUNERACIÓN GRAVADA</h3>
            <NumberInput maxLength={15} registro="registro3" field="otrosEmpleosMovilidadGravada" numeroTrabajador={numeroTrabajador}/>
            <h3>66 REMUNERACIÓN OTROS EMPLEOS - VIÁTICOS REMUNERACIÓN GRAVADA</h3>
            <NumberInput maxLength={15} registro="registro3" field="otrosEmpleosViaticosGravada" numeroTrabajador={numeroTrabajador}/>
            <h3>67 REMUNERACIÓN OTROS EMPLEOS - COMPENSACIÓN ANÁLOGOS REMUNERACIÓN GRAVADA</h3>
            <NumberInput maxLength={15} registro="registro3" field="otrosEmpleosCompensacionAnalogosGravada" numeroTrabajador={numeroTrabajador}/>
            <br/>
            <hr/>
        </>
    )
}

export default Registro3;