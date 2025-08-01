import React, { createContext, useContext, useState } from 'react';

const FormContext = createContext();

export const useFormContext = () => {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error('useFormContext must be used within a FormProvider');
  }
  return context;
};

export const FormProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    // Registro 1
    registro1: {
      cuitAgente: '',
      periodoInformado: '',
      secuencia: '00',
      tipoPresentacion: ''
    },
    // Registro 2
    registro2: {
      cuil: '',
      periodoDesde: '',
      periodoHasta: '',
      meses: '',
      beneficio: '',
      transporte: '',
      ley27718: '',
      teletrabajo: '',
      militar: '',
      transporteTerrestre: ''
    },
    // Registro 3
    registro3: {
      cuil: '',
      remuneracionBrutaGravada: '',
      retribucionesNoHabituales: '',
      sacPrimeraCuota: '',
      sacSegundaCuota: '',
      horasExtrasGravadas: '',
      personalDocenteMaterialDidacticoGravado: '',
      remuneracionNoAlcanzada: '',
      remuneracionExentaHorasExtras: '',
      personalDocenteMaterialDidacticoExento: '',
      // ... continúa con todos los campos del registro 3
      remuneracionOtrosEmpleosBrutaGravada: '',
      remuneracionOtrosEmpleosRetribucionesNoHabituales: '',
      remuneracionOtrosEmpleosSacPrimera: '',
      remuneracionOtrosEmpleosSacSegunda: '',
      remuneracionOtrosEmpleosHorasExtras: '',
      remuneracionOtrosEmpleosDocenteMaterialGravado: '',
      remuneracionOtrosEmpleosNoAlcanzada: '',
      remuneracionOtrosEmpleosExentaHorasExtras: '',
      remuneracionOtrosEmpleosDocenteMaterialExento: '',
      remuneracionGravada: '',
      remuneracionNoGravada: '',
      totalRemuneraciones: '',
      retribucionesNoHabitualesExentas: '',
      sacPrimeraCuotaExentas: '',
      sacSegundaCuotaExentas: '',
      ajustesPeriodosAnterioresGravadas: '',
      ajustesPeriodosAnterioresExentas: '',
      otrosEmpleosRetribucionesNoHabitualesExentas: '',
      otrosEmpleosSacPrimeraCuotaExentas: '',
      otrosEmpleosSacSegundaCuotaExentas: '',
      otrosEmpleosAjustesPeriodosAnterioresGravadas: '',
      otrosEmpleosAjustesPeriodosAnterioresExentas: '',
      remuneracionExentaLey27718: '',
      otrosEmpleosRemuneracionExentaLey27718: '',
      bonosProductividadGravados: '',
      fallosCajaGravados: '',
      conceptosSimilarNaturalezaGravados: '',
      bonosProductividadExentos: '',
      fallosCajaExentos: '',
      conceptosSimilarNaturalezaExentos: '',
      compensacionGastosTeletrabajoExentos: '',
      personalMilitarSuplemetos: '',
      otrosEmpleosBonosProductividadGravados: '',
      otrosEmpleosFallosCajaGravados: '',
      otrosEmpleosConceptosSimilarGravados: '',
      otrosEmpleosBonosProductividadExentos: '',
      otrosEmpleosFallosCajaExentos: '',
      otrosEmpleosConceptosSimilarExentos: '',
      otrosEmpleosCompensacionTeletrabajo: '',
      otrosEmpleosPersonalMilitarSuplemetos: '',
      cantidadBonosProductividad: '',
      cantidadFallosCaja: '',
      cantidadConceptosSimilar: '',
      cantidadOtrosEmpleosBonosProductividad: '',
      cantidadOtrosEmpleosFallosCaja: '',
      cantidadOtrosEmpleosConceptosSimilar: '',
      movilidadRemuneracionGravada: '',
      viaticosRemuneracionGravada: '',
      compensacionAnalogosGravada: '',
      otrosEmpleosMovilidadGravada: '',
      otrosEmpleosViaticosGravada: '',
      otrosEmpleosCompensacionAnalogosGravada: ''
    },
    // Registro 4
    registro4: {
      cuil: '',
      aporteJubilatorio: '',
      otrosEmpleosAporteJubilatorio: '',
      aporteObraSocial: '',
      aporteObraSocialOtrosEmpleos: '',
      cuotaSindical: '',
      cuotaSindicalOtrosEmpleos: '',
      cuotasMedicoAsistenciales: '',
      primasSeguroMuerte: '',
      segurosMuerteMixtos: '',
      seguroRetiroPrivados: '',
      adquisicionCuotapartesFCI: '',
      gastosSepelio: '',
      gastosAmortIntRodado: '',
      donacionesFiscos: '',
      datosObligatorios: '',
      honorariosAsistenciaSanitaria: '',
      interesesCreditosHipotecarios: '',
      aportesCapitalSocial: '',
      otrasDeducciones: '',
      alquileresInmuebles: '',
      empleadosServicioDomestico: '',
      indumentariaEquipamiento: '',
      otrasDeduccionesGenerales: '',
      totalDeduccionesGenerales: '',
      otrasDeduccionesAportesJubilaciones: '',
      otrasDeduccionesCajasProvinciales: '',
      otrasDeduccionesActores: '',
      otrasDeduccionesFondosCompensadores: '',
      serviciosEducativos: '',
      gastosMovilidadEmpleador: '',
      gastosViaticosEmpleador: '',
      compensacionAnaloga: '',
      cantidadCompensacionAnaloga: '',
      alquileresInmueblesArticulo85: ''
    },
    // Registro 5
    registro5: {
      cuil: '',
      gananciaNoImponible: '',
      deduccionEspecial: '',
      deduccionEspecifica: '',
      conyugeUnionConvivencial: '',
      cantidadHijos50: '',
      hijosHijastros: '',
      totalCargasFamilia: '',
      totalDeduccionesArticulo30: '',
      remuneracionSujetaAImpuesto: '',
      cantidadHijosIncapacitados50: '',
      hijosHijastrosIncapacitados: '',
      deduccionEspecialIncrementadaPrimera: '',
      deduccionEspecialIncrementadaSegunda: '',
      cantidadHijos100: '',
      cantidadHijosIncapacitados100: '',
      cantidadHijos18a24Educacion50: '',
      cantidadHijos18a24Educacion100: ''
    },
    // Registro 6
    registro6: {
      cuil: '',
      alicuotaArticulo94: '',
      alicuotaAplicable: '',
      impuestoDeterminado: '',
      impuestoRetenido: '',
      pagosACuentaTotal: '',
      saldo: '',
      pagosACuentaCreditos: '',
      pagosACuentaPercepciones: '',
      pagosACuentaResolucion3819: '',
      pagosACuentaBonoLey27424: '0',
      pagoACuentaLey27541a: '',
      pagoACuentaLey27541b: '',
      pagoACuentaLey27541c: '',
      pagoACuentaLey27541d: '',
      pagoACuentaLey27541e: '',
      pagosACuentaMovimientosFondos: '',
      pagosACuentaTransporte: ''
    }
  });

  const updateFormData = (registro, field, value) => {
    setFormData(prev => ({
      ...prev,
      [registro]: {
        ...prev[registro],
        [field]: value
      }
    }));
  };

  const getFieldValue = (registro, field) => {
    return formData[registro]?.[field] || '';
  };

  return (
    <FormContext.Provider value={{
      formData,
      updateFormData,
      getFieldValue
    }}>
      {children}
    </FormContext.Provider>
  );
};
