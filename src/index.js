import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Registro1 from './Routes/Registro1';
import Registro2 from './Routes/Registro2';
import Registro3 from './Routes/Registro3';
import Registro4 from './Routes/Registro4';
import Registro5 from './Routes/Registro5';
import Registro6 from './Routes/Registro6';
import Trabajadores from './Routes/Trabajadores';
import Trabajador from './Routes/Trabajador';
import ResumenTrabajadores from './Routes/ResumenTrabajadores';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App/>}>
          <Route index element={<Registro1/>}/>
          <Route path='Registro1' element={<Registro1/>}/>
          <Route path='Trabajadores' element={<Trabajadores/>}/>
          <Route path='Resumen' element={<ResumenTrabajadores/>}/>
          
          {/* Rutas dinámicas para cada trabajador */}
          <Route path='Trabajador/:numeroTrabajador' element={<Trabajador/>}>
            <Route path='Registro2' element={<Registro2/>}/>
            <Route path='Registro3' element={<Registro3/>}/>
            <Route path='Registro4' element={<Registro4/>}/>
            <Route path='Registro5' element={<Registro5/>}/>
            <Route path='Registro6' element={<Registro6/>}/>
          </Route>
          
          {/* Rutas heredadas (mantener por compatibilidad) */}
          <Route path='Registro2' element={<Registro2/>}/>
          <Route path='Registro3' element={<Registro3/>}/>
          <Route path='Registro4' element={<Registro4/>}/>
          <Route path='Registro5' element={<Registro5/>}/>
          <Route path='Registro6' element={<Registro6/>}/>
          <Route path='Trabajador' element={<Trabajador/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();