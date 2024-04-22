import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";
import "./tablas.css";

const Paises = () => {
  const navigate = useNavigate();
  const [paises, setPaises] = useState([]);
  const [nuevoPais, setNuevoPais] = useState({
    paisID: "",
    nombre: ""
  });

  useEffect(() => {
    // Cargar los países existentes desde la API al montar el componente
    fetch("http://localhost:5194/api/Paises")
      .then(response => response.json())
      .then(data => setPaises(data))
      .catch(error => console.error("Error al obtener los datos de la API:", error));
  }, []);

  const handleChange = e => {
    const { name, value } = e.target;
    setNuevoPais(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5194/api/Paises", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(nuevoPais)
      });
      if (response.ok) {
        // Actualizar la lista de países después de agregar el nuevo país
        const data = await response.json();
        setPaises(prevState => [...prevState, data]);
        // Limpiar el formulario después de enviar los datos
        setNuevoPais({
          paisID: "",
          nombre: ""
        });
      } else {
        console.error("Error al agregar nuevo país:", response.statusText);
      }
    } catch (error) {
      console.error("Error al agregar nuevo país:", error);
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
        <h2 className="titulo">Lista de Países</h2>
        <table className="table table-hover table-bordered">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {paises.map(pais => (
              <tr key={pais.paisID}>
                <td>{pais.paisID}</td>
                <td>{pais.nombre}</td>
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
            name="paisID"
            placeholder="ID del país"
            value={nuevoPais.paisID}
            onChange={handleChange}
          />
          <input
            type="text"
            name="nombre"
            placeholder="Nombre del país"
            value={nuevoPais.nombre}
            onChange={handleChange}
          />
          <button type="submit" className="btnAdmn">Agregar País</button>
        </form>
      </div>
    </>
  );
};

export default Paises;
