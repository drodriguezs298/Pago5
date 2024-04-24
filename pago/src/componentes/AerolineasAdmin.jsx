import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";
import "./tablas.css";

const Aerolineas = () => {
  const navigate = useNavigate();
  const [aerolineas, setAerolineas] = useState([]);
  const [nuevaAerolinea, setNuevaAerolinea] = useState({
    aerolineaID: "",
    nombre: "",
    paisID: ""
  });

  useEffect(() => {
    // Cargar las aerolíneas existentes desde la API al montar el componente
    fetch("http://localhost:5194/api/Aerolinea")
      .then(response => response.json())
      .then(data => setAerolineas(data))
      .catch(error => console.error("Error al obtener los datos de la API:", error));
  }, []);

  const handleChange = e => {
    const { name, value } = e.target;
    setNuevaAerolinea(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5194/api/Aerolinea", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(nuevaAerolinea)
      });
      if (response.ok) {
        // Actualizar la lista de aerolíneas después de agregar la nueva aerolínea
        const data = await response.json();
        setAerolineas(prevState => [...prevState, data]);
        // Limpiar el formulario después de enviar los datos
        setNuevaAerolinea({
          aerolineaID: "",
          nombre: "",
          paisID: ""
        });
      } else {
        console.error("Error al agregar nueva aerolínea:", response.statusText);
      }
    } catch (error) {
      console.error("Error al agregar nueva aerolínea:", error);
    }
  };

  return (
    <>
    <nav>
        <ul>
          <li className="navbar-title" onClick={() => navigate("/InicioAdmin")}>
            <img
              src="../src/images/puenteGlobal.png"
              alt="logo principal"
              style={{ width: "50%" }}
            />
          </li>
          <li onClick={() => navigate("/UsuariosAdmin")}>
            <a href="#">Usuarios</a>
          </li>
          <li onClick={() => navigate("/Roles")}>
            <a href="#">Roles</a>
          </li>
          <li onClick={() => navigate("/ConsecutivosAdmin")}>
            <a href="#">Consecutivos</a>
          </li>
          <li onClick={() => navigate("/Pais")}>
            <a href="#">Paises</a>
          </li>
          <li onClick={() => navigate("/AerolineasAdmin")}>
            <a href="#">Aerolíneas</a>
          </li>
          <li>
            <a href="#">
              <i>Modo Admin</i>
            </a>
          </li>
        </ul>
      </nav>
      <div className="container table-responsive">
        <h2 className="titulo">Lista de Aerolíneas</h2>
        <table className="table table-hover table-bordered">
          <thead>
            <tr>
              <th>Código</th>
              <th>Aerolínea</th>
              <th>País ID</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {aerolineas.map(aerolinea => (
              <tr key={aerolinea.aerolineaID}>
                <td>{aerolinea.aerolineaID}</td>
                <td>{aerolinea.nombre}</td>
                <td>{aerolinea.paisID}</td>
                <td>
                  <button className="btnEdit">Editar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="aerolineaID"
            placeholder="Código"
            value={nuevaAerolinea.aerolineaID}
            onChange={handleChange}
          />
          <input
            type="text"
            name="nombre"
            placeholder="Nombre de la Aerolínea"
            value={nuevaAerolinea.nombre}
            onChange={handleChange}
          />
          <input
            type="text"
            name="paisID"
            placeholder="País ID"
            value={nuevaAerolinea.paisID}
            onChange={handleChange}
          />
          <button type="submit" className="btnAdmn">Agregar Aerolínea</button>
        </form>
      </div>
    </>
  );
};

export default Aerolineas;
