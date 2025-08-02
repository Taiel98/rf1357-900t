import React from "react";
import { Link, Outlet } from "react-router-dom";
import NavbarRegistros from "../Components/NavbarRegistros";


function Trabajador(){
    return(
        <>
            <NavbarRegistros/>
            <Outlet/>
            <Link to="Trabajadores"><button>Volver</button></Link>
        </>
    )
}

export default Trabajador;