import React from "react";
import { useNavigate } from "react-router-dom";
import CompraMain from "./CompraMain";
import CompraFooter from "./CompraFooter";
import "./stylecompra.css";

const Compra = () => {
  const navigate = useNavigate();
  return (
    <div className="pagina">
      <header>
        <div className="container">
          <div className="logo">
            <li
              onClick={() => {
                navigate("/");
              }}
            >
              <img
                src="../src/images/PuenteGlobal.png"
                alt="Logo Puente Global"
              />
            </li>
          </div>
          <div className="navegacion">
            <ul>
              <li
                onClick={() => {
                  navigate("/");
                }}
              >
                <a href="#">Inicio</a>
              </li>
              <li>
                <a href="#">Boletos</a>
              </li>
              <li>
                <a href="#">Vuelos</a>
              </li>
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
      <CompraMain />
      <CompraFooter />
    </div>
  );
};

export default Compra;
