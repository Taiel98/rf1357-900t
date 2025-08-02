import React from "react";
import { Link } from "react-router-dom";

function NavbarRegistros({ numeroTrabajador }){
    const baseUrl = numeroTrabajador ? `/Trabajador/${numeroTrabajador}` : '';
    
    const linkStyle = {
        display: 'inline-block',
        padding: '8px 16px',
        margin: '5px',
        backgroundColor: '#007bff',
        color: 'white',
        textDecoration: 'none',
        borderRadius: '4px',
        border: '1px solid #007bff'
    };

    return(
        <div style={{ marginBottom: '20px', padding: '15px', backgroundColor: '#f8f9fa', borderRadius: '5px' }}>
            <h4>Navegación - Registros del Trabajador {numeroTrabajador}</h4>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
                <Link to={`${baseUrl}/Registro2`} style={linkStyle}>Registro 2</Link>
                <Link to={`${baseUrl}/Registro3`} style={linkStyle}>Registro 3</Link>
                <Link to={`${baseUrl}/Registro4`} style={linkStyle}>Registro 4</Link>
                <Link to={`${baseUrl}/Registro5`} style={linkStyle}>Registro 5</Link>
                <Link to={`${baseUrl}/Registro6`} style={linkStyle}>Registro 6</Link>
            </div>
        </div>
    )
}

export default NavbarRegistros;