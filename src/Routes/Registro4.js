import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import NumberInput from "../Components/NumberInput";
import { useFormContext } from "../Context/FormContext";

function Registro4(){
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
        <h2>REGISTRO 4</h2>
        <br/>
        <h1>DEDUCCIONES</h1>
        <br/>
        <h3>1 TIPO DE REGISTRO</h3>
        <NumberInput value="04" readOnly={true}/>
        <h3>2 CUIL</h3>
        <NumberInput maxLength={11} registro="registro4" field="cuil" numeroTrabajador={numeroTrabajador}/>
        <h3>3 APORTE JUBILATORIO, RETIROS, PENSIONES O SUBSIDIOS</h3>
        <NumberInput maxLength={15} registro="registro4" field="aporteJubilatorio" numeroTrabajador={numeroTrabajador}/>
        <h3>4 OTROS EMPLEOS - APORTE JUBILATORIO, RETIROS, PENSIONES O SUBSIDIOS</h3>
        <NumberInput maxLength={15} registro="registro4" field="otrosEmpleosAporteJubilatorio" numeroTrabajador={numeroTrabajador}/>
        <h3>5 APORTE OBRA SOCIAL</h3>
        <NumberInput maxLength={15} registro="registro4" field="aporteObraSocial" numeroTrabajador={numeroTrabajador}/>
        <h3>6 APORTE OBRA SOCIAL OTROS EMPLEOS</h3>
        <NumberInput maxLength={15} registro="registro4" field="aporteObraSocialOtrosEmpleos" numeroTrabajador={numeroTrabajador}/>
        <h3>7 CUOTA SINDICAL</h3>
        <NumberInput maxLength={15} registro="registro4" field="cuotaSindical" numeroTrabajador={numeroTrabajador}/>
        <h3>8 CUOTA SINDICAL OTROS EMPLEOS</h3>
        <NumberInput maxLength={15} registro="registro4" field="cuotaSindicalOtrosEmpleos" numeroTrabajador={numeroTrabajador}/>
        <h3>9 CUOTAS MÉDICO ASISTENCIALES</h3>
        <NumberInput maxLength={15} registro="registro4" field="cuotasMedicoAsistenciales" numeroTrabajador={numeroTrabajador}/>
        <h3>10 PRIMAS DE SEGURO PARA EL CASO DE MUERTE</h3>
        <NumberInput maxLength={15} registro="registro4" field="primasSeguroMuerte" numeroTrabajador={numeroTrabajador}/>
        <h3>11 SEGUROS MUERTE / MIXTOS SUJETAS AL CONTROL DE LA SSN</h3>
        <NumberInput maxLength={15} registro="registro4" field="segurosMuerteMixtos" numeroTrabajador={numeroTrabajador}/>
        <h3>12 SEGURO DE RETIRO PRIVADOS - SUJETAS AL CONTROL DE LA SSN</h3>
        <NumberInput maxLength={15} registro="registro4" field="seguroRetiroPrivados" numeroTrabajador={numeroTrabajador}/>
        <h3>13 ADQUISICIÓN DE CUOTAPARTES DE FCI CON FINES DE RETIRO</h3>
        <NumberInput maxLength={15} registro="registro4" field="adquisicionCuotapartesFCI" numeroTrabajador={numeroTrabajador}/>
        <h3>14 GASTOS DE SEPELIO</h3>
        <NumberInput maxLength={15} registro="registro4" field="gastosSepelio" numeroTrabajador={numeroTrabajador}/>
        <h3>15 GTOS AMORT E INT RODADO CORREDORES Y VIAJANTES DE COMERCIO</h3>
        <NumberInput maxLength={15} registro="registro4" field="gastosAmortIntRodado" numeroTrabajador={numeroTrabajador}/>
        <h3>16 DONAC. FISCOS NAC./PROV./MUN./INST. ARTICULO 26 INCISO E) Y F) LIG</h3>
        <NumberInput maxLength={15} registro="registro4" field="donacionesFiscos" numeroTrabajador={numeroTrabajador}/>
        <h3>17 DATOS OBLIGATORIOS POR LEY NACIONAL, PROVINCIAL O MUNICIPAL</h3>
        <NumberInput maxLength={15} registro="registro4" field="datosObligatorios" numeroTrabajador={numeroTrabajador}/>
        <h3>18 HONORARIOS SERVICIO ASISTENCIA SANITARIA, MÉDICA Y PARAMÉDICA</h3>
        <NumberInput maxLength={15} registro="registro4" field="honorariosAsistenciaSanitaria" numeroTrabajador={numeroTrabajador}/>
        <h3>19 INTERESES CRÉDITOS HIPOTECARIOS</h3>
        <NumberInput maxLength={15} registro="registro4" field="interesesCreditosHipotecarios" numeroTrabajador={numeroTrabajador}/>
        <h3>20 AP. CAP. SOC. /FONDO DE RIESGO DE SOCIOS PROTECTORES DE SGR</h3>
        <NumberInput maxLength={15} registro="registro4" field="aportesCapitalSocial" numeroTrabajador={numeroTrabajador}/>
        <h3>21 Otras Deducciones - CAJAS COMPLEMENTARIAS DE PREVISIÓN</h3>
        <NumberInput maxLength={15} registro="registro4" field="otrasDeducciones" numeroTrabajador={numeroTrabajador}/>
        <h3>22 ALQUILERES DE INMUEBLES DESTINADOS A SU CASA HABITACIÓN</h3>
        <NumberInput maxLength={15} registro="registro4" field="alquileresInmuebles" numeroTrabajador={numeroTrabajador}/>
        <h3>23 EMPLEADOS DEL SERVICIO DOMESTICO</h3>
        <NumberInput maxLength={15} registro="registro4" field="empleadosServicioDomestico" numeroTrabajador={numeroTrabajador}/>
        <h3>24 GTOS MOV./VIÁTICOS ABONADOS POR EL EMPLEADOR</h3>
        <NumberInput value="0" readOnly={true}/>
        <h3>25 INDUMENTARIA/EQUIPAMIENTO - USO EXCLUSIVO - CARÁCTER OBLIGATORIO</h3>
        <NumberInput maxLength={15} registro="registro4" field="indumentariaEquipamiento" numeroTrabajador={numeroTrabajador}/>
        <h3>26 OTRAS DEDUCCIONES</h3>
        <NumberInput maxLength={15} registro="registro4" field="otrasDeduccionesGenerales" numeroTrabajador={numeroTrabajador}/>
        <h3>27 TOTAL DEDUCCIONES GENERALES</h3>
        <NumberInput maxLength={17} registro="registro4" field="totalDeduccionesGenerales" numeroTrabajador={numeroTrabajador}/>
        <h3>28 Otras Deducciones - Aportes para Jubilaciones, Retiros y Subsidios ANSeS</h3>
        <NumberInput maxLength={15} registro="registro4" field="otrasDeduccionesAportesJubilaciones" numeroTrabajador={numeroTrabajador}/>
        <h3>29 Otras Deducciones - Cajas Provinciales o Municipales o de Previsión para Profesionales</h3>
        <NumberInput maxLength={15} registro="registro4" field="otrasDeduccionesCajasProvinciales" numeroTrabajador={numeroTrabajador}/>
        <h3>30 Otras Deducciones - Actores - Retribución pagada a los representantes - RG 2442/08</h3>
        <NumberInput maxLength={15} registro="registro4" field="otrasDeduccionesActores" numeroTrabajador={numeroTrabajador}/>
        <h3>31 Otras Deducciones - Fondos Compensadores de Previsión</h3>
        <NumberInput maxLength={15} registro="registro4" field="otrasDeduccionesFondosCompensadores" numeroTrabajador={numeroTrabajador}/>
        <h3>32 SERVICIOS EDUCATIVOS Y LAS HERRAMIENTAS DESTINADAS A ESOS EFECTOS</h3>
        <NumberInput maxLength={15} registro="registro4" field="serviciosEducativos" numeroTrabajador={numeroTrabajador}/>
        <h3>33 GTOS MOV. ABONADOS POR EL EMPLEADOR</h3>
        <NumberInput maxLength={15} registro="registro4" field="gastosMovilidadEmpleador" numeroTrabajador={numeroTrabajador}/>
        <h3>34 GTOS. VIÁTICOS ABONADOS POR EL EMPLEADOR</h3>
        <NumberInput maxLength={15} registro="registro4" field="gastosViaticosEmpleador" numeroTrabajador={numeroTrabajador}/>
        <h3>35 COMPENSACIÓN ANÁLOGA</h3>
        <NumberInput maxLength={15} registro="registro4" field="compensacionAnaloga" numeroTrabajador={numeroTrabajador}/>
        <h3>36 Cantidad Compensación análoga</h3>
        <NumberInput maxLength={2} registro="registro4" field="cantidadCompensacionAnaloga" numeroTrabajador={numeroTrabajador}/>
        <h3>37 ALQUILERES DE INMUEBLES DESTINADOS A SU CASA HABITACIÓN - Articulo 85 inciso k) (10%)</h3>
        <NumberInput maxLength={15} registro="registro4" field="alquileresInmueblesArticulo85" numeroTrabajador={numeroTrabajador}/>
        <br/>
        <hr/>
        </>
    )
}

export default Registro4;