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