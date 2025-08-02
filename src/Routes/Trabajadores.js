import React from "react";
import { Link } from "react-router-dom";
import { useFormContext } from "../Context/FormContext";

function Trabajadores(){
    const { getFieldValue } = useFormContext();
    const cantidadTrabajadores = parseInt(getFieldValue('registro1', 'cantidadTrabajadores') || '0');

    // Generar array de trabajadores basado en la cantidad
    const trabajadores = Array.from({ length: cantidadTrabajadores }, (_, index) => index + 1);

    return(
        <>
            <h1>TRABAJADORES</h1>
            <p>Cantidad de trabajadores: {cantidadTrabajadores}</p>
            
            {cantidadTrabajadores > 0 ? (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '20px' }}>
                    {trabajadores.map(numeroTrabajador => (
                        <div key={numeroTrabajador} style={{ 
                            border: '1px solid #ccc', 
                            padding: '15px', 
                            borderRadius: '5px',
                            backgroundColor: '#f9f9f9'
                        }}>
                            <h3>Trabajador {numeroTrabajador}</h3>
                            <Link to={`/Trabajador/${numeroTrabajador}`}>
                                <button style={{
                                    padding: '8px 16px',
                                    backgroundColor: '#007bff',
                                    color: 'white',
                                    border: 'none',
                                    borderRadius: '4px',
                                    cursor: 'pointer'
                                }}>
                                    Acceder a Trabajador {numeroTrabajador}
                                </button>
                            </Link>
                        </div>
                    ))}
                </div>
            ) : (
                <p>No se ha especificado la cantidad de trabajadores. 
                   <Link to="/Registro1"> Volver a Registro 1</Link> para configurar.
                </p>
            )}
            
            <div style={{ marginTop: '30px' }}>
                <Link to="/Registro1">
                    <button style={{
                        padding: '8px 16px',
                        backgroundColor: '#6c757d',
                        color: 'white',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: 'pointer',
                        marginRight: '10px'
                    }}>
                        Volver a Registro 1
                    </button>
                </Link>
                <Link to="/Resumen">
                    <button style={{
                        padding: '8px 16px',
                        backgroundColor: '#17a2b8',
                        color: 'white',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: 'pointer'
                    }}>
                        Ver Resumen General
                    </button>
                </Link>
            </div>
        </>
    )
}

export default Trabajadores;