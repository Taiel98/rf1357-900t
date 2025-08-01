import React from "react";
import NumberInput from "../Components/NumberInput";

function Registro4(){
    return(
        <>
        <h2>REGISTRO 4</h2>
        <br/>
        <h1>DEDUCCIONES</h1>
        <br/>
        <h3>1 TIPO DE REGISTRO</h3>
        <NumberInput value="04" readOnly={true}/>
        <h3>2 CUIL</h3>
        <NumberInput maxLength={11} registro="registro4" field="cuil"/>
        <h3>3 APORTE JUBILATORIO, RETIROS, PENSIONES O SUBSIDIOS</h3>
        <NumberInput maxLength={15} registro="registro4" field="aporteJubilatorio"/>
        <h3>4 OTROS EMPLEOS - APORTE JUBILATORIO, RETIROS, PENSIONES O SUBSIDIOS</h3>
        <NumberInput maxLength={15} registro="registro4" field="otrosEmpleosAporteJubilatorio"/>
        <h3>5 APORTE OBRA SOCIAL</h3>
        <NumberInput maxLength={15} registro="registro4" field="aporteObraSocial"/>
        <h3>6 APORTE OBRA SOCIAL OTROS EMPLEOS</h3>
        <NumberInput maxLength={15} registro="registro4" field="aporteObraSocialOtrosEmpleos"/>
        <h3>7 CUOTA SINDICAL</h3>
        <NumberInput maxLength={15} registro="registro4" field="cuotaSindical"/>
        <h3>8 CUOTA SINDICAL OTROS EMPLEOS</h3>
        <NumberInput maxLength={15} registro="registro4" field="cuotaSindicalOtrosEmpleos"/>
        <h3>9 CUOTAS MÉDICO ASISTENCIALES</h3>
        <NumberInput maxLength={15} registro="registro4" field="cuotasMedicoAsistenciales"/>
        <h3>10 PRIMAS DE SEGURO PARA EL CASO DE MUERTE</h3>
        <NumberInput maxLength={15} registro="registro4" field="primasSeguroMuerte"/>
        <h3>11 SEGUROS MUERTE / MIXTOS SUJETAS AL CONTROL DE LA SSN</h3>
        <NumberInput maxLength={15} registro="registro4" field="segurosMuerteMixtos"/>
        <h3>12 SEGURO DE RETIRO PRIVADOS - SUJETAS AL CONTROL DE LA SSN</h3>
        <NumberInput maxLength={15} registro="registro4" field="seguroRetiroPrivados"/>
        <h3>13 ADQUISICIÓN DE CUOTAPARTES DE FCI CON FINES DE RETIRO</h3>
        <NumberInput maxLength={15} registro="registro4" field="adquisicionCuotapartesFCI"/>
        <h3>14 GASTOS DE SEPELIO</h3>
        <NumberInput maxLength={15} registro="registro4" field="gastosSepelio"/>
        <h3>15 GTOS AMORT E INT RODADO CORREDORES Y VIAJANTES DE COMERCIO</h3>
        <NumberInput maxLength={15} registro="registro4" field="gastosAmortIntRodado"/>
        <h3>16 DONAC. FISCOS NAC./PROV./MUN./INST. ARTICULO 26 INCISO E) Y F) LIG</h3>
        <NumberInput maxLength={15} registro="registro4" field="donacionesFiscos"/>
        <h3>17 DATOS OBLIGATORIOS POR LEY NACIONAL, PROVINCIAL O MUNICIPAL</h3>
        <NumberInput maxLength={15} registro="registro4" field="datosObligatorios"/>
        <h3>18 HONORARIOS SERVICIO ASISTENCIA SANITARIA, MÉDICA Y PARAMÉDICA</h3>
        <NumberInput maxLength={15} registro="registro4" field="honorariosAsistenciaSanitaria"/>
        <h3>19 INTERESES CRÉDITOS HIPOTECARIOS</h3>
        <NumberInput maxLength={15} registro="registro4" field="interesesCreditosHipotecarios"/>
        <h3>20 AP. CAP. SOC. /FONDO DE RIESGO DE SOCIOS PROTECTORES DE SGR</h3>
        <NumberInput maxLength={15} registro="registro4" field="aportesCapitalSocial"/>
        <h3>21 Otras Deducciones - CAJAS COMPLEMENTARIAS DE PREVISIÓN</h3>
        <NumberInput maxLength={15} registro="registro4" field="otrasDeducciones"/>
        <h3>22 ALQUILERES DE INMUEBLES DESTINADOS A SU CASA HABITACIÓN</h3>
        <NumberInput maxLength={15} registro="registro4" field="alquileresInmuebles"/>
        <h3>23 EMPLEADOS DEL SERVICIO DOMESTICO</h3>
        <NumberInput maxLength={15} registro="registro4" field="empleadosServicioDomestico"/>
        <h3>24 GTOS MOV./VIÁTICOS ABONADOS POR EL EMPLEADOR</h3>
        <NumberInput value="0" readOnly={true}/>
        <h3>25 INDUMENTARIA/EQUIPAMIENTO - USO EXCLUSIVO - CARÁCTER OBLIGATORIO</h3>
        <NumberInput maxLength={15} registro="registro4" field="indumentariaEquipamiento"/>
        <h3>26 OTRAS DEDUCCIONES</h3>
        <NumberInput maxLength={15} registro="registro4" field="otrasDeduccionesGenerales"/>
        <h3>27 TOTAL DEDUCCIONES GENERALES</h3>
        <NumberInput maxLength={17} registro="registro4" field="totalDeduccionesGenerales"/>
        <h3>28 Otras Deducciones - Aportes para Jubilaciones, Retiros y Subsidios ANSeS</h3>
        <NumberInput maxLength={15} registro="registro4" field="otrasDeduccionesAportesJubilaciones"/>
        <h3>29 Otras Deducciones - Cajas Provinciales o Municipales o de Previsión para Profesionales</h3>
        <NumberInput maxLength={15} registro="registro4" field="otrasDeduccionesCajasProvinciales"/>
        <h3>30 Otras Deducciones - Actores - Retribución pagada a los representantes - RG 2442/08</h3>
        <NumberInput maxLength={15} registro="registro4" field="otrasDeduccionesActores"/>
        <h3>31 Otras Deducciones - Fondos Compensadores de Previsión</h3>
        <NumberInput maxLength={15} registro="registro4" field="otrasDeduccionesFondosCompensadores"/>
        <h3>32 SERVICIOS EDUCATIVOS Y LAS HERRAMIENTAS DESTINADAS A ESOS EFECTOS</h3>
        <NumberInput maxLength={15} registro="registro4" field="serviciosEducativos"/>
        <h3>33 GTOS MOV. ABONADOS POR EL EMPLEADOR</h3>
        <NumberInput maxLength={15} registro="registro4" field="gastosMovilidadEmpleador"/>
        <h3>34 GTOS. VIÁTICOS ABONADOS POR EL EMPLEADOR</h3>
        <NumberInput maxLength={15} registro="registro4" field="gastosViaticosEmpleador"/>
        <h3>35 COMPENSACIÓN ANÁLOGA</h3>
        <NumberInput maxLength={15} registro="registro4" field="compensacionAnaloga"/>
        <h3>36 Cantidad Compensación análoga</h3>
        <NumberInput maxLength={2} registro="registro4" field="cantidadCompensacionAnaloga"/>
        <h3>37 ALQUILERES DE INMUEBLES DESTINADOS A SU CASA HABITACIÓN - Articulo 85 inciso k) (10%)</h3>
        <NumberInput maxLength={15} registro="registro4" field="alquileresInmueblesArticulo85"/>
        <br/>
        <hr/>
        </>
    )
}

export default Registro4;