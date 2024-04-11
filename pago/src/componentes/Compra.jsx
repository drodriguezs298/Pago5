import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import CompraMain from "./CompraMain";
import CompraFooter from "./CompraFooter";
import './stylecompra.css';


const Compra = () => {
    return (
        <div className="pagina">
            <header>
                <div className="container">
                    <div className="logo">
                        {/* Usamos el componente Link para enrutar */}
                        <a href='inicio.jsx'>
                            <img src="src/images/puenteGlobal.png" alt="Logo Puente Global"/>
                        </a>
                    </div>
                    <div className="navegacion">
                        <ul>
                            <li><a href="#">Reservas</a></li>
                            <li><a href="#">Boletos</a></li>
                            <li><a href="#">Vuelos</a></li>
                        </ul>
                    </div>
                    <div className="usuario">
                        <p>Hola, Usuario</p>
                    </div>
                </div>
            </header>
            <div className="texto">
                <h1>Realice su compra</h1>
                <h2>Seleccione un método de pago:</h2>
            </div>
            
            <CompraMain/>
            <CompraFooter/>

        </div>
    );
}

export default Compra;

  