import React, { useRef } from "react";
import { useFormContext } from "../Context/FormContext";
import { useNavigate } from "react-router-dom";

function FileLoader() {
    const fileInputRef = useRef(null);
    const { setFormData, initializeTrabajador } = useFormContext();
    const navigate = useNavigate();

    const parseFileContent = (content) => {
        const lines = content.split('\n').filter(line => line.trim() !== '');
        const newFormData = {
            registro1: {
                cuitAgente: '',
                periodoInformado: '',
                secuencia: '00',
                tipoPresentacion: '',
                cantidadTrabajadores: ''
            },
            trabajadores: {}
        };

        let currentWorkerNumber = null;
        let workerCount = 0;

        lines.forEach(line => {
            const trimmedLine = line.trim();
            
            // Identificar líneas de encabezado
            if (trimmedLine === 'REGISTRO1') {
                return;
            }
            
            if (trimmedLine.startsWith('TRABAJADOR')) {
                currentWorkerNumber = parseInt(trimmedLine.replace('TRABAJADOR', ''));
                workerCount = Math.max(workerCount, currentWorkerNumber);
                return;
            }

            // Parsear datos
            const fields = trimmedLine.split(',');
            
            if (fields.length === 0) return;

            const recordType = fields[0];

            switch (recordType) {
                case '01': // REGISTRO 1
                    newFormData.registro1 = {
                        cuitAgente: fields[1] || '',
                        periodoInformado: fields[2] || '',
                        secuencia: fields[3] || '00',
                        tipoPresentacion: fields[7] || '',
                        cantidadTrabajadores: workerCount.toString()
                    };
                    break;

                case '02': // REGISTRO 2
                    if (currentWorkerNumber) {
                        const trabajadorKey = `trabajador_${currentWorkerNumber}`;
                        if (!newFormData.trabajadores[trabajadorKey]) {
                            newFormData.trabajadores[trabajadorKey] = {};
                        }
                        newFormData.trabajadores[trabajadorKey].registro2 = {
                            cuil: fields[1] || '',
                            periodoDesde: fields[2] || '',
                            periodoHasta: fields[3] || '',
                            meses: fields[4] || '',
                            beneficio: fields[5] || '',
                            transporte: fields[6] || '',
                            ley27718: fields[8] || '',
                            teletrabajo: fields[9] || '',
                            militar: fields[10] || '',
                            transporteTerrestre: fields[11] || ''
                        };
                    }
                    break;

                case '03': // REGISTRO 3
                    if (currentWorkerNumber) {
                        const trabajadorKey = `trabajador_${currentWorkerNumber}`;
                        if (!newFormData.trabajadores[trabajadorKey]) {
                            newFormData.trabajadores[trabajadorKey] = {};
                        }
                        newFormData.trabajadores[trabajadorKey].registro3 = {
                            cuil: fields[1] || '',
                            remuneracionBrutaGravada: fields[2] || '',
                            retribucionesNoHabituales: fields[3] || '',
                            sacPrimeraCuota: fields[4] || '',
                            sacSegundaCuota: fields[5] || '',
                            horasExtrasGravadas: fields[6] || '',
                            personalDocenteMaterialDidacticoGravado: fields[8] || '',
                            remuneracionNoAlcanzada: fields[9] || '',
                            remuneracionExentaHorasExtras: fields[10] || '',
                            personalDocenteMaterialDidacticoExento: fields[12] || '',
                            remuneracionOtrosEmpleosBrutaGravada: fields[13] || '',
                            remuneracionOtrosEmpleosRetribucionesNoHabituales: fields[14] || '',
                            remuneracionOtrosEmpleosSacPrimera: fields[15] || '',
                            remuneracionOtrosEmpleosSacSegunda: fields[16] || '',
                            remuneracionOtrosEmpleosHorasExtras: fields[17] || '',
                            remuneracionOtrosEmpleosDocenteMaterialGravado: fields[19] || '',
                            remuneracionOtrosEmpleosNoAlcanzada: fields[20] || '',
                            remuneracionOtrosEmpleosExentaHorasExtras: fields[21] || '',
                            remuneracionOtrosEmpleosDocenteMaterialExento: fields[23] || '',
                            remuneracionGravada: fields[24] || '',
                            remuneracionNoGravada: fields[25] || '',
                            totalRemuneraciones: fields[26] || '',
                            retribucionesNoHabitualesExentas: fields[27] || '',
                            sacPrimeraCuotaExentas: fields[28] || '',
                            sacSegundaCuotaExentas: fields[29] || '',
                            ajustesPeriodosAnterioresGravadas: fields[30] || '',
                            ajustesPeriodosAnterioresExentas: fields[31] || '',
                            otrosEmpleosRetribucionesNoHabitualesExentas: fields[32] || '',
                            otrosEmpleosSacPrimeraCuotaExentas: fields[33] || '',
                            otrosEmpleosSacSegundaCuotaExentas: fields[34] || '',
                            otrosEmpleosAjustesPeriodosAnterioresGravadas: fields[35] || '',
                            otrosEmpleosAjustesPeriodosAnterioresExentas: fields[36] || '',
                            remuneracionExentaLey27718: fields[37] || '',
                            otrosEmpleosRemuneracionExentaLey27718: fields[38] || '',
                            bonosProductividadGravados: fields[39] || '',
                            fallosCajaGravados: fields[40] || '',
                            conceptosSimilarNaturalezaGravados: fields[41] || '',
                            bonosProductividadExentos: fields[42] || '',
                            fallosCajaExentos: fields[43] || '',
                            conceptosSimilarNaturalezaExentos: fields[44] || '',
                            compensacionGastosTeletrabajoExentos: fields[45] || '',
                            personalMilitarSuplemetos: fields[46] || '',
                            otrosEmpleosBonosProductividadGravados: fields[47] || '',
                            otrosEmpleosFallosCajaGravados: fields[48] || '',
                            otrosEmpleosConceptosSimilarGravados: fields[49] || '',
                            otrosEmpleosBonosProductividadExentos: fields[50] || '',
                            otrosEmpleosFallosCajaExentos: fields[51] || '',
                            otrosEmpleosConceptosSimilarExentos: fields[52] || '',
                            otrosEmpleosCompensacionTeletrabajo: fields[53] || '',
                            otrosEmpleosPersonalMilitarSuplemetos: fields[54] || '',
                            cantidadBonosProductividad: fields[55] || '',
                            cantidadFallosCaja: fields[56] || '',
                            cantidadConceptosSimilar: fields[57] || '',
                            cantidadOtrosEmpleosBonosProductividad: fields[58] || '',
                            cantidadOtrosEmpleosFallosCaja: fields[59] || '',
                            cantidadOtrosEmpleosConceptosSimilar: fields[60] || '',
                            movilidadRemuneracionGravada: fields[61] || '',
                            viaticosRemuneracionGravada: fields[62] || '',
                            compensacionAnalogosGravada: fields[63] || '',
                            otrosEmpleosMovilidadGravada: fields[64] || '',
                            otrosEmpleosViaticosGravada: fields[65] || '',
                            otrosEmpleosCompensacionAnalogosGravada: fields[66] || ''
                        };
                    }
                    break;

                case '04': // REGISTRO 4
                    if (currentWorkerNumber) {
                        const trabajadorKey = `trabajador_${currentWorkerNumber}`;
                        if (!newFormData.trabajadores[trabajadorKey]) {
                            newFormData.trabajadores[trabajadorKey] = {};
                        }
                        newFormData.trabajadores[trabajadorKey].registro4 = {
                            cuil: fields[1] || '',
                            aporteJubilatorio: fields[2] || '',
                            otrosEmpleosAporteJubilatorio: fields[3] || '',
                            aporteObraSocial: fields[4] || '',
                            aporteObraSocialOtrosEmpleos: fields[5] || '',
                            cuotaSindical: fields[6] || '',
                            cuotaSindicalOtrosEmpleos: fields[7] || '',
                            cuotasMedicoAsistenciales: fields[8] || '',
                            primasSeguroMuerte: fields[9] || '',
                            segurosMuerteMixtos: fields[10] || '',
                            seguroRetiroPrivados: fields[11] || '',
                            adquisicionCuotapartesFCI: fields[12] || '',
                            gastosSepelio: fields[13] || '',
                            gastosAmortIntRodado: fields[14] || '',
                            donacionesFiscos: fields[15] || '',
                            datosObligatorios: fields[16] || '',
                            honorariosAsistenciaSanitaria: fields[17] || '',
                            interesesCreditosHipotecarios: fields[18] || '',
                            aportesCapitalSocial: fields[19] || '',
                            otrasDeducciones: fields[20] || '',
                            alquileresInmuebles: fields[21] || '',
                            empleadosServicioDomestico: fields[22] || '',
                            indumentariaEquipamiento: fields[24] || '',
                            otrasDeduccionesGenerales: fields[25] || '',
                            totalDeduccionesGenerales: fields[26] || '',
                            otrasDeduccionesAportesJubilaciones: fields[27] || '',
                            otrasDeduccionesCajasProvinciales: fields[28] || '',
                            otrasDeduccionesActores: fields[29] || '',
                            otrasDeduccionesFondosCompensadores: fields[30] || '',
                            serviciosEducativos: fields[31] || '',
                            gastosMovilidadEmpleador: fields[32] || '',
                            gastosViaticosEmpleador: fields[33] || '',
                            compensacionAnaloga: fields[34] || '',
                            cantidadCompensacionAnaloga: fields[35] || '',
                            alquileresInmueblesArticulo85: fields[36] || ''
                        };
                    }
                    break;

                case '05': // REGISTRO 5
                    if (currentWorkerNumber) {
                        const trabajadorKey = `trabajador_${currentWorkerNumber}`;
                        if (!newFormData.trabajadores[trabajadorKey]) {
                            newFormData.trabajadores[trabajadorKey] = {};
                        }
                        newFormData.trabajadores[trabajadorKey].registro5 = {
                            cuil: fields[1] || '',
                            gananciaNoImponible: fields[2] || '',
                            deduccionEspecial: fields[3] || '',
                            deduccionEspecifica: fields[4] || '',
                            conyugeUnionConvivencial: fields[5] || '',
                            cantidadHijos50: fields[6] || '',
                            hijosHijastros: fields[7] || '',
                            totalCargasFamilia: fields[8] || '',
                            totalDeduccionesArticulo30: fields[9] || '',
                            remuneracionSujetaAImpuesto: fields[13] || '',
                            cantidadHijosIncapacitados50: fields[14] || '',
                            hijosHijastrosIncapacitados: fields[15] || '',
                            deduccionEspecialIncrementadaPrimera: fields[16] || '',
                            deduccionEspecialIncrementadaSegunda: fields[17] || '',
                            cantidadHijos100: fields[18] || '',
                            cantidadHijosIncapacitados100: fields[19] || '',
                            cantidadHijos18a24Educacion50: fields[20] || '',
                            cantidadHijos18a24Educacion100: fields[21] || ''
                        };
                    }
                    break;

                case '06': // REGISTRO 6
                    if (currentWorkerNumber) {
                        const trabajadorKey = `trabajador_${currentWorkerNumber}`;
                        if (!newFormData.trabajadores[trabajadorKey]) {
                            newFormData.trabajadores[trabajadorKey] = {};
                        }
                        newFormData.trabajadores[trabajadorKey].registro6 = {
                            cuil: fields[1] || '',
                            alicuotaArticulo94: fields[2] || '',
                            alicuotaAplicable: fields[3] || '',
                            impuestoDeterminado: fields[4] || '',
                            impuestoRetenido: fields[5] || '',
                            pagosACuentaTotal: fields[6] || '',
                            saldo: fields[7] || '',
                            pagosACuentaCreditos: fields[8] || '',
                            pagosACuentaPercepciones: fields[9] || '',
                            pagosACuentaResolucion3819: fields[10] || '',
                            pagosACuentaBonoLey27424: fields[11] || '0',
                            pagoACuentaLey27541a: fields[12] || '',
                            pagoACuentaLey27541b: fields[13] || '',
                            pagoACuentaLey27541c: fields[14] || '',
                            pagoACuentaLey27541d: fields[15] || '',
                            pagoACuentaLey27541e: fields[16] || '',
                            pagosACuentaMovimientosFondos: fields[17] || '',
                            pagosACuentaTransporte: fields[18] || ''
                        };
                    }
                    break;

                default:
                    break;
            }
        });

        return newFormData;
    };

    const handleFileLoad = (event) => {
        const file = event.target.files[0];
        if (!file) return;

        // Verificar que sea un archivo .txt
        if (!file.name.toLowerCase().endsWith('.txt')) {
            alert('Por favor, selecciona un archivo .txt válido');
            return;
        }

        const reader = new FileReader();
        reader.onload = (e) => {
            try {
                const content = e.target.result;
                const parsedData = parseFileContent(content);
                
                // Confirmar antes de cargar
                const confirmLoad = window.confirm(
                    `¿Estás seguro de que quieres cargar este archivo?\n\n` +
                    `Se encontraron ${parsedData.registro1.cantidadTrabajadores} trabajadores.\n` +
                    `Esto sobrescribirá todos los datos actuales.`
                );

                if (confirmLoad) {
                    // Actualizar el estado global
                    setFormData(parsedData);
                    
                    // Inicializar todos los trabajadores encontrados
                    const cantidadTrabajadores = parseInt(parsedData.registro1.cantidadTrabajadores);
                    for (let i = 1; i <= cantidadTrabajadores; i++) {
                        initializeTrabajador(i);
                    }

                    alert(`Archivo cargado exitosamente!\n${cantidadTrabajadores} trabajadores importados.`);
                    navigate('/Resumen');
                }
            } catch (error) {
                console.error('Error al parsear el archivo:', error);
                alert('Error al cargar el archivo. Verifica que el formato sea correcto.');
            }
        };

        reader.onerror = () => {
            alert('Error al leer el archivo');
        };

        reader.readAsText(file);
        
        // Limpiar el input para permitir cargar el mismo archivo nuevamente
        event.target.value = '';
    };

    const triggerFileInput = () => {
        fileInputRef.current?.click();
    };

    return (
        <div style={{ 
            margin: '20px 0',
            padding: '20px',
            border: '2px dashed #007bff',
            borderRadius: '8px',
            backgroundColor: '#f8f9fa',
            textAlign: 'center'
        }}>
            <h3 style={{ color: '#007bff', margin: '0 0 10px 0' }}>
                📁 Cargar Formulario desde Archivo
            </h3>
            <p style={{ margin: '0 0 15px 0', color: '#666' }}>
                Selecciona un archivo .txt generado previamente para cargar todos los datos automáticamente
            </p>
            
            <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileLoad}
                accept=".txt"
                style={{ display: 'none' }}
            />
            
            <button
                onClick={triggerFileInput}
                style={{
                    padding: '12px 24px',
                    backgroundColor: '#007bff',
                    color: 'white',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    fontSize: '16px',
                    fontWeight: 'bold'
                }}
            >
                📤 Seleccionar Archivo .txt
            </button>
            
            <div style={{ 
                marginTop: '15px', 
                fontSize: '14px', 
                color: '#666',
                fontStyle: 'italic'
            }}>
                ⚠️ Advertencia: Cargar un archivo sobrescribirá todos los datos actuales
            </div>
        </div>
    );
}

export default FileLoader;