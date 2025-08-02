import React from "react";
import { Link, Outlet, useParams } from "react-router-dom";
import NavbarRegistros from "../Components/NavbarRegistros";

function Trabajador(){
    const { numeroTrabajador } = useParams();

    return(
        <>
            <div style={{ 
                backgroundColor: '#e9ecef', 
                padding: '10px', 
                marginBottom: '20px',
                borderRadius: '5px'
            }}>
                <h2>Trabajador {numeroTrabajador}</h2>
                <p>Completar la información para el trabajador número {numeroTrabajador}</p>
            </div>
            
            <NavbarRegistros numeroTrabajador={numeroTrabajador} />
            <Outlet/>
            
            <div style={{ marginTop: '30px', display: 'flex', gap: '10px' }}>
                <Link to="/Trabajadores">
                    <button style={{
                        padding: '8px 16px',
                        backgroundColor: '#28a745',
                        color: 'white',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: 'pointer'
                    }}>
                        Volver a Lista de Trabajadores
                    </button>
                </Link>
            </div>
        </>
    )
}

export default Trabajador;