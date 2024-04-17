import './confirmacion.css'
import { useEffect, useState } from 'react';


const Confirmacion = () => {
    
    const [numeroConfirmacion, setNumeroConfirmacion] = useState('');

    useEffect(() => {
        const mensajesDebajo = document.querySelector('.mensajes-debajo');

        while (mensajesDebajo.firstChild) {
            mensajesDebajo.removeChild(mensajesDebajo.firstChild);
        }

        confirmarCompra();
    }, []);

    const confirmarCompra = async () => {
        const URL = "http://localhost:5194/api/ConfirmacionCompra"; 
        
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({}) 
        };
    
        try {
            const response = await fetch(URL, requestOptions);
            if (!response.ok) throw new Error('Respuesta del servidor no fue OK.');
            const data = await response.json();
            setNumeroConfirmacion(data.NumeroConfirmacion); 
            mostrarMensaje(`Número de confirmación: ${data.NumeroConfirmacion}`, 'numero-confirmacion');
        } catch (error) {
            console.error("Error al confirmar la compra:", error);
            mostrarMensaje("Error al procesar la compra.", 'error');
        }
    };

    const mostrarMensaje = (texto, clase) => {
        const mensajesDebajo = document.querySelector('.mensajes-debajo');
        const nuevoMensaje = document.createElement('div');
        nuevoMensaje.textContent = texto;
        nuevoMensaje.classList.add(clase);
        mensajesDebajo.appendChild(nuevoMensaje);
    };
  
  
    return (
        <div>
            {/* Encabezado de la página */}
            <header>
                <div className="container">
                    <div className="logo">
                        <a href="Compra.jsx">
                            <img src="#" alt="Logo Puente Global" />
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

            <span className="loader"></span>
            <div className="mensaje"></div>
            <div className="mensajes-debajo"> {numeroConfirmacion && <div className="numero-confirmacion">Número de Confirmación: {numeroConfirmacion}</div>}</div>
        </div>
        
    )
}

export default Confirmacion