import React from "react";
import { Link } from "react-router-dom";

function Navbar(){
    return(
        <>
        <Link to='Registro1'>Registro 1</Link>
        <Link to='Registro2'>Registro 2</Link>
        <Link to='Registro3'>Registro 3</Link>
        <Link to='Registro4'>Registro 4</Link>
        <Link to='Registro5'>Registro 5</Link>
        <Link to='Registro6'>Registro 6</Link>
        </>
    )
}

export default Navbar;