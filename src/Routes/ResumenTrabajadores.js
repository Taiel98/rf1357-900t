import React from "react";
import { Link } from "react-router-dom";
import { useFormContext } from "../Context/FormContext";

function ResumenTrabajadores() {
    const { getFieldValue, formData } = useFormContext();
    const cantidadTrabajadores = parseInt(getFieldValue('registro1', 'cantidadTrabajadores') || '0');

    // Generar array de trabajadores basado en la cantidad
    const trabajadores = Array.from({ length: cantidadTrabajadores }, (_, index) => index + 1);

    const getTrabajadorStatus = (numeroTrabajador) => {
        const trabajadorKey = `trabajador_${numeroTrabajador}`;
        const trabajadorData = formData.trabajadores[trabajadorKey];
        
        if (!trabajadorData) return { cuil: '', completedRegistros: 0 };
        
        const cuil = trabajadorData.registro2?.cuil || '';
        let completedRegistros = 0;
        
        // Verificar cuántos registros tienen datos
        const registros = ['registro2', 'registro3', 'registro4', 'registro5', 'registro6'];
        registros.forEach(registro => {
            if (trabajadorData[registro]) {
                const hasData = Object.values(trabajadorData[registro]).some(value => value && value !== '');
                if (hasData) completedRegistros++;
            }
        });
        
        return { cuil, completedRegistros };
    };

    const formatFieldValue = (value) => {
        return value && value !== '' ? value : '0';
    };

    const generateTextContent = () => {
        let content = '';
        
        // REGISTRO 1
        content += 'REGISTRO1\n';
        content += `01,${formatFieldValue(formData.registro1?.cuitAgente)},${formatFieldValue(formData.registro1?.periodoInformado)},${formatFieldValue(formData.registro1?.secuencia)},0103,215,1357,${formatFieldValue(formData.registro1?.tipoPresentacion)},00900\n\n`;
        
        // Para cada trabajador
        trabajadores.forEach(numeroTrabajador => {
            const trabajadorKey = `trabajador_${numeroTrabajador}`;
            const trabajadorData = formData.trabajadores[trabajadorKey];
            
            if (trabajadorData) {
                content += `TRABAJADOR${numeroTrabajador}\n`;
                
                // REGISTRO 2
                const reg2 = trabajadorData.registro2 || {};
                content += `02,${formatFieldValue(reg2.cuil)},${formatFieldValue(reg2.periodoDesde)},${formatFieldValue(reg2.periodoHasta)},${formatFieldValue(reg2.meses)},${formatFieldValue(reg2.beneficio)},${formatFieldValue(reg2.transporte)},0,${formatFieldValue(reg2.ley27718)},${formatFieldValue(reg2.teletrabajo)},${formatFieldValue(reg2.militar)},${formatFieldValue(reg2.transporteTerrestre)}\n`;
                
                // REGISTRO 3
                const reg3 = trabajadorData.registro3 || {};
                content += `03,${formatFieldValue(reg3.cuil)},${formatFieldValue(reg3.remuneracionBrutaGravada)},${formatFieldValue(reg3.retribucionesNoHabituales)},${formatFieldValue(reg3.sacPrimeraCuota)},${formatFieldValue(reg3.sacSegundaCuota)},${formatFieldValue(reg3.horasExtrasGravadas)},0,${formatFieldValue(reg3.personalDocenteMaterialDidacticoGravado)},${formatFieldValue(reg3.remuneracionNoAlcanzada)},${formatFieldValue(reg3.remuneracionExentaHorasExtras)},0,${formatFieldValue(reg3.personalDocenteMaterialDidacticoExento)},${formatFieldValue(reg3.remuneracionOtrosEmpleosBrutaGravada)},${formatFieldValue(reg3.remuneracionOtrosEmpleosRetribucionesNoHabituales)},${formatFieldValue(reg3.remuneracionOtrosEmpleosSacPrimera)},${formatFieldValue(reg3.remuneracionOtrosEmpleosSacSegunda)},${formatFieldValue(reg3.remuneracionOtrosEmpleosHorasExtras)},0,${formatFieldValue(reg3.remuneracionOtrosEmpleosDocenteMaterialGravado)},${formatFieldValue(reg3.remuneracionOtrosEmpleosNoAlcanzada)},${formatFieldValue(reg3.remuneracionOtrosEmpleosExentaHorasExtras)},0,${formatFieldValue(reg3.remuneracionOtrosEmpleosDocenteMaterialExento)},${formatFieldValue(reg3.remuneracionGravada)},${formatFieldValue(reg3.remuneracionNoGravada)},${formatFieldValue(reg3.totalRemuneraciones)},${formatFieldValue(reg3.retribucionesNoHabitualesExentas)},${formatFieldValue(reg3.sacPrimeraCuotaExentas)},${formatFieldValue(reg3.sacSegundaCuotaExentas)},${formatFieldValue(reg3.ajustesPeriodosAnterioresGravadas)},${formatFieldValue(reg3.ajustesPeriodosAnterioresExentas)},${formatFieldValue(reg3.otrosEmpleosRetribucionesNoHabitualesExentas)},${formatFieldValue(reg3.otrosEmpleosSacPrimeraCuotaExentas)},${formatFieldValue(reg3.otrosEmpleosSacSegundaCuotaExentas)},${formatFieldValue(reg3.otrosEmpleosAjustesPeriodosAnterioresGravadas)},${formatFieldValue(reg3.otrosEmpleosAjustesPeriodosAnterioresExentas)},${formatFieldValue(reg3.remuneracionExentaLey27718)},${formatFieldValue(reg3.otrosEmpleosRemuneracionExentaLey27718)},${formatFieldValue(reg3.bonosProductividadGravados)},${formatFieldValue(reg3.fallosCajaGravados)},${formatFieldValue(reg3.conceptosSimilarNaturalezaGravados)},${formatFieldValue(reg3.bonosProductividadExentos)},${formatFieldValue(reg3.fallosCajaExentos)},${formatFieldValue(reg3.conceptosSimilarNaturalezaExentos)},${formatFieldValue(reg3.compensacionGastosTeletrabajoExentos)},${formatFieldValue(reg3.personalMilitarSuplemetos)},${formatFieldValue(reg3.otrosEmpleosBonosProductividadGravados)},${formatFieldValue(reg3.otrosEmpleosFallosCajaGravados)},${formatFieldValue(reg3.otrosEmpleosConceptosSimilarGravados)},${formatFieldValue(reg3.otrosEmpleosBonosProductividadExentos)},${formatFieldValue(reg3.otrosEmpleosFallosCajaExentos)},${formatFieldValue(reg3.otrosEmpleosConceptosSimilarExentos)},${formatFieldValue(reg3.otrosEmpleosCompensacionTeletrabajo)},${formatFieldValue(reg3.otrosEmpleosPersonalMilitarSuplemetos)},${formatFieldValue(reg3.cantidadBonosProductividad)},${formatFieldValue(reg3.cantidadFallosCaja)},${formatFieldValue(reg3.cantidadConceptosSimilar)},${formatFieldValue(reg3.cantidadOtrosEmpleosBonosProductividad)},${formatFieldValue(reg3.cantidadOtrosEmpleosFallosCaja)},${formatFieldValue(reg3.cantidadOtrosEmpleosConceptosSimilar)},${formatFieldValue(reg3.movilidadRemuneracionGravada)},${formatFieldValue(reg3.viaticosRemuneracionGravada)},${formatFieldValue(reg3.compensacionAnalogosGravada)},${formatFieldValue(reg3.otrosEmpleosMovilidadGravada)},${formatFieldValue(reg3.otrosEmpleosViaticosGravada)},${formatFieldValue(reg3.otrosEmpleosCompensacionAnalogosGravada)}\n`;
                
                // REGISTRO 4
                const reg4 = trabajadorData.registro4 || {};
                content += `04,${formatFieldValue(reg4.cuil)},${formatFieldValue(reg4.aporteJubilatorio)},${formatFieldValue(reg4.otrosEmpleosAporteJubilatorio)},${formatFieldValue(reg4.aporteObraSocial)},${formatFieldValue(reg4.aporteObraSocialOtrosEmpleos)},${formatFieldValue(reg4.cuotaSindical)},${formatFieldValue(reg4.cuotaSindicalOtrosEmpleos)},${formatFieldValue(reg4.cuotasMedicoAsistenciales)},${formatFieldValue(reg4.primasSeguroMuerte)},${formatFieldValue(reg4.segurosMuerteMixtos)},${formatFieldValue(reg4.seguroRetiroPrivados)},${formatFieldValue(reg4.adquisicionCuotapartesFCI)},${formatFieldValue(reg4.gastosSepelio)},${formatFieldValue(reg4.gastosAmortIntRodado)},${formatFieldValue(reg4.donacionesFiscos)},${formatFieldValue(reg4.datosObligatorios)},${formatFieldValue(reg4.honorariosAsistenciaSanitaria)},${formatFieldValue(reg4.interesesCreditosHipotecarios)},${formatFieldValue(reg4.aportesCapitalSocial)},${formatFieldValue(reg4.otrasDeducciones)},${formatFieldValue(reg4.alquileresInmuebles)},${formatFieldValue(reg4.empleadosServicioDomestico)},0,${formatFieldValue(reg4.indumentariaEquipamiento)},${formatFieldValue(reg4.otrasDeduccionesGenerales)},${formatFieldValue(reg4.totalDeduccionesGenerales)},${formatFieldValue(reg4.otrasDeduccionesAportesJubilaciones)},${formatFieldValue(reg4.otrasDeduccionesCajasProvinciales)},${formatFieldValue(reg4.otrasDeduccionesActores)},${formatFieldValue(reg4.otrasDeduccionesFondosCompensadores)},${formatFieldValue(reg4.serviciosEducativos)},${formatFieldValue(reg4.gastosMovilidadEmpleador)},${formatFieldValue(reg4.gastosViaticosEmpleador)},${formatFieldValue(reg4.compensacionAnaloga)},${formatFieldValue(reg4.cantidadCompensacionAnaloga)},${formatFieldValue(reg4.alquileresInmueblesArticulo85)}\n`;
                
                // REGISTRO 5
                const reg5 = trabajadorData.registro5 || {};
                content += `05,${formatFieldValue(reg5.cuil)},${formatFieldValue(reg5.gananciaNoImponible)},${formatFieldValue(reg5.deduccionEspecial)},${formatFieldValue(reg5.deduccionEspecifica)},${formatFieldValue(reg5.conyugeUnionConvivencial)},${formatFieldValue(reg5.cantidadHijos50)},${formatFieldValue(reg5.hijosHijastros)},${formatFieldValue(reg5.totalCargasFamilia)},${formatFieldValue(reg5.totalDeduccionesArticulo30)},0,0,0,${formatFieldValue(reg5.remuneracionSujetaAImpuesto)},${formatFieldValue(reg5.cantidadHijosIncapacitados50)},${formatFieldValue(reg5.hijosHijastrosIncapacitados)},${formatFieldValue(reg5.deduccionEspecialIncrementadaPrimera)},${formatFieldValue(reg5.deduccionEspecialIncrementadaSegunda)},${formatFieldValue(reg5.cantidadHijos100)},${formatFieldValue(reg5.cantidadHijosIncapacitados100)},${formatFieldValue(reg5.cantidadHijos18a24Educacion50)},${formatFieldValue(reg5.cantidadHijos18a24Educacion100)}\n`;
                
                // REGISTRO 6
                const reg6 = trabajadorData.registro6 || {};
                content += `06,${formatFieldValue(reg6.cuil)},${formatFieldValue(reg6.alicuotaArticulo94)},${formatFieldValue(reg6.alicuotaAplicable)},${formatFieldValue(reg6.impuestoDeterminado)},${formatFieldValue(reg6.impuestoRetenido)},${formatFieldValue(reg6.pagosACuentaTotal)},${formatFieldValue(reg6.saldo)},${formatFieldValue(reg6.pagosACuentaCreditos)},${formatFieldValue(reg6.pagosACuentaPercepciones)},${formatFieldValue(reg6.pagosACuentaResolucion3819)},${formatFieldValue(reg6.pagosACuentaBonoLey27424)},${formatFieldValue(reg6.pagoACuentaLey27541a)},${formatFieldValue(reg6.pagoACuentaLey27541b)},${formatFieldValue(reg6.pagoACuentaLey27541c)},${formatFieldValue(reg6.pagoACuentaLey27541d)},${formatFieldValue(reg6.pagoACuentaLey27541e)},${formatFieldValue(reg6.pagosACuentaMovimientosFondos)},${formatFieldValue(reg6.pagosACuentaTransporte)}\n\n`;
            }
        });
        
        return content;
    };

    const downloadTextFile = () => {
        const content = generateTextContent();
        const blob = new Blob([content], { type: 'text/plain' });
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `formulario_1357_${new Date().getFullYear()}.txt`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);
    };

    // Verificar si todos los trabajadores están completos
    const allWorkersCompleted = trabajadores.length > 0 && trabajadores.every(numeroTrabajador => {
        const status = getTrabajadorStatus(numeroTrabajador);
        return status.completedRegistros === 5;
    });

    if (cantidadTrabajadores === 0) {
        return (
            <div style={{ padding: '20px', textAlign: 'center' }}>
                <h2>Resumen de Trabajadores</h2>
                <p>No se ha especificado la cantidad de trabajadores.</p>
                <Link to="/Registro1">
                    <button style={{
                        padding: '10px 20px',
                        backgroundColor: '#007bff',
                        color: 'white',
                        border: 'none',
                        borderRadius: '5px',
                        cursor: 'pointer'
                    }}>
                        Ir a Registro 1
                    </button>
                </Link>
            </div>
        );
    }

    return (
        <div style={{ padding: '20px' }}>
            <h2>Resumen de Trabajadores</h2>
            <p><strong>Total de trabajadores configurados:</strong> {cantidadTrabajadores}</p>
            
            <div style={{ marginTop: '20px' }}>
                <table style={{ 
                    width: '100%', 
                    borderCollapse: 'collapse',
                    border: '1px solid #ddd'
                }}>
                    <thead>
                        <tr style={{ backgroundColor: '#f8f9fa' }}>
                            <th style={{ border: '1px solid #ddd', padding: '12px', textAlign: 'left' }}>
                                Trabajador
                            </th>
                            <th style={{ border: '1px solid #ddd', padding: '12px', textAlign: 'left' }}>
                                CUIL
                            </th>
                            <th style={{ border: '1px solid #ddd', padding: '12px', textAlign: 'center' }}>
                                Registros Completados
                            </th>
                            <th style={{ border: '1px solid #ddd', padding: '12px', textAlign: 'center' }}>
                                Estado
                            </th>
                            <th style={{ border: '1px solid #ddd', padding: '12px', textAlign: 'center' }}>
                                Acciones
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {trabajadores.map(numeroTrabajador => {
                            const status = getTrabajadorStatus(numeroTrabajador);
                            const completionPercentage = (status.completedRegistros / 5) * 100;
                            
                            return (
                                <tr key={numeroTrabajador}>
                                    <td style={{ border: '1px solid #ddd', padding: '12px' }}>
                                        <strong>Trabajador {numeroTrabajador}</strong>
                                    </td>
                                    <td style={{ border: '1px solid #ddd', padding: '12px' }}>
                                        {status.cuil || <em style={{ color: '#999' }}>No ingresado</em>}
                                    </td>
                                    <td style={{ border: '1px solid #ddd', padding: '12px', textAlign: 'center' }}>
                                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
                                            <span>{status.completedRegistros}/5</span>
                                            <div style={{
                                                width: '60px',
                                                height: '10px',
                                                backgroundColor: '#e9ecef',
                                                borderRadius: '5px',
                                                overflow: 'hidden'
                                            }}>
                                                <div style={{
                                                    width: `${completionPercentage}%`,
                                                    height: '100%',
                                                    backgroundColor: completionPercentage === 100 ? '#28a745' : 
                                                                   completionPercentage > 60 ? '#ffc107' : 
                                                                   completionPercentage > 0 ? '#17a2b8' : '#dc3545',
                                                    transition: 'width 0.3s ease'
                                                }}></div>
                                            </div>
                                        </div>
                                    </td>
                                    <td style={{ border: '1px solid #ddd', padding: '12px', textAlign: 'center' }}>
                                        <span style={{
                                            padding: '4px 8px',
                                            borderRadius: '12px',
                                            fontSize: '12px',
                                            fontWeight: 'bold',
                                            color: 'white',
                                            backgroundColor: completionPercentage === 100 ? '#28a745' : 
                                                           completionPercentage > 60 ? '#ffc107' : 
                                                           completionPercentage > 0 ? '#17a2b8' : '#dc3545'
                                        }}>
                                            {completionPercentage === 100 ? 'Completo' : 
                                             completionPercentage > 60 ? 'Avanzado' : 
                                             completionPercentage > 0 ? 'En Progreso' : 'Sin Iniciar'}
                                        </span>
                                    </td>
                                    <td style={{ border: '1px solid #ddd', padding: '12px', textAlign: 'center' }}>
                                        <Link to={`/Trabajador/${numeroTrabajador}/Registro2`}>
                                            <button style={{
                                                padding: '6px 12px',
                                                backgroundColor: '#007bff',
                                                color: 'white',
                                                border: 'none',
                                                borderRadius: '4px',
                                                cursor: 'pointer',
                                                fontSize: '12px'
                                            }}>
                                                Editar
                                            </button>
                                        </Link>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>

            {/* Botón de descarga - solo visible si todos los trabajadores están completos */}
            {allWorkersCompleted && (
                <div style={{ 
                    marginTop: '20px', 
                    padding: '20px', 
                    backgroundColor: '#d4edda', 
                    border: '1px solid #c3e6cb',
                    borderRadius: '5px',
                    textAlign: 'center'
                }}>
                    <h3 style={{ color: '#155724', margin: '0 0 10px 0' }}>
                        ¡Todos los registros completados! ✅
                    </h3>
                    <p style={{ color: '#155724', margin: '0 0 15px 0' }}>
                        Ya puedes descargar el archivo con toda la información.
                    </p>
                    <button 
                        onClick={downloadTextFile}
                        style={{
                            padding: '12px 24px',
                            backgroundColor: '#28a745',
                            color: 'white',
                            border: 'none',
                            borderRadius: '5px',
                            cursor: 'pointer',
                            fontSize: '16px',
                            fontWeight: 'bold'
                        }}
                    >
                        📥 Descargar Archivo Formulario 1357
                    </button>
                </div>
            )}

            <div style={{ marginTop: '30px', display: 'flex', gap: '10px', justifyContent: 'center' }}>
                <Link to="/Trabajadores">
                    <button style={{
                        padding: '10px 20px',
                        backgroundColor: '#28a745',
                        color: 'white',
                        border: 'none',
                        borderRadius: '5px',
                        cursor: 'pointer'
                    }}>
                        Lista de Trabajadores
                    </button>
                </Link>
                <Link to="/Registro1">
                    <button style={{
                        padding: '10px 20px',
                        backgroundColor: '#6c757d',
                        color: 'white',
                        border: 'none',
                        borderRadius: '5px',
                        cursor: 'pointer'
                    }}>
                        Volver a Registro 1
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default ResumenTrabajadores;