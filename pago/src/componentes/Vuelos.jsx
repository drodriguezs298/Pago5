import React from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";

const Vuelos = () => {
  const navigate = useNavigate();
  return (
    <>
      <nav>
        <ul>
          <li className="navbar-title">
            <img
              src="../pictures/puenteGlobal.png"
              alt="logo principal"
              style={{ width: "50%" }}
            />
          </li>
          <li>
            <a href="">Inicio</a>
          </li>
          <li>
            <a href="#">Reservas</a>
          </li>
          <li>
            <a href="#">Boletos</a>
          </li>
          <li>
            <a href="#">Vuelos</a>
          </li>
          <li>
            <a href="#">Hola, Usuario</a>
          </li>
        </ul>
      </nav>
      <h2 className="titulo">Vuelos Disponibles</h2>
      <div className="container">
        <table className="table table-hover table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Aerolinea</th>
              <th>Origen</th>
              <th>Destino</th>
              <th>Fecha de Salida</th>
              <th>Fecha de llegada</th>
              <th>Puerta</th>
              <th>Precio</th>
              <th />
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Avianca</td>
              <td>
                <i
                  className="bx bxs-plane-take-off"
                  style={{ color: "#f5c76b" }}
                />{" "}
                SJO
              </td>
              <td>
                <i className="bx bxs-plane-land" style={{ color: "#f5c76b" }} />{" "}
                IAH
              </td>
              <td>12-4-2024</td>
              <td>20-4-2024</td>
              <td>A1</td>
              <td>$350</td>
              <td>
                <button className="btnAdmn">Reservar</button>
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>Avianca</td>
              <td>
                <i
                  className="bx bxs-plane-take-off"
                  style={{ color: "#f5c76b" }}
                />{" "}
                SJO
              </td>
              <td>
                <i className="bx bxs-plane-land" style={{ color: "#f5c76b" }} />{" "}
                IAH
              </td>
              <td>12-4-2024</td>
              <td>20-4-2024</td>
              <td>A1</td>
              <td>$350</td>
              <td>
                <button className="btnAdmn">Reservar</button>
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>Avianca</td>
              <td>
                <i
                  className="bx bxs-plane-take-off"
                  style={{ color: "#f5c76b" }}
                />{" "}
                SJO
              </td>
              <td>
                <i className="bx bxs-plane-land" style={{ color: "#f5c76b" }} />{" "}
                IAH
              </td>
              <td>12-4-2024</td>
              <td>20-4-2024</td>
              <td>A1</td>
              <td>$350</td>
              <td>
                <button className="btnAdmn">Reservar</button>
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>Avianca</td>
              <td>
                <i
                  className="bx bxs-plane-take-off"
                  style={{ color: "#f5c76b" }}
                />{" "}
                SJO
              </td>
              <td>
                <i className="bx bxs-plane-land" style={{ color: "#f5c76b" }} />{" "}
                IAH
              </td>
              <td>12-4-2024</td>
              <td>20-4-2024</td>
              <td>A1</td>
              <td>$350</td>
              <td>
                <button className="btnAdmn">Reservar</button>
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>Avianca</td>
              <td>
                <i
                  className="bx bxs-plane-take-off"
                  style={{ color: "#f5c76b" }}
                />{" "}
                SJO
              </td>
              <td>
                <i className="bx bxs-plane-land" style={{ color: "#f5c76b" }} />{" "}
                IAH
              </td>
              <td>12-4-2024</td>
              <td>20-4-2024</td>
              <td>A1</td>
              <td>$350</td>
              <td>
                <button className="btnAdmn">Reservar</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Vuelos;
