import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";
import "./tablas.css";

const Roles = () => {
  const navigate = useNavigate();
  const [roles, setRoles] = useState([]);
  const [nuevoRol, setNuevoRol] = useState({
    rolID: "",
    rolName: ""
  });

  useEffect(() => {
    // Cargar los roles existentes desde la API al montar el componente
    fetch("http://localhost:5194/api/Rols")
      .then(response => response.json())
      .then(data => setRoles(data))
      .catch(error => console.error("Error al obtener los datos de la API:", error));
  }, []);

  const handleChange = e => {
    const { name, value } = e.target;
    setNuevoRol(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5194/api/Rols", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(nuevoRol)
      });
      if (response.ok) {
        // Actualizar la lista de roles después de agregar el nuevo rol
        const data = await response.json();
        setRoles(prevState => [...prevState, data]);
        // Limpiar el formulario después de enviar los datos
        setNuevoRol({
          rolID: "",
          rolName: ""
        });
      } else {
        console.error("Error al agregar nuevo rol:", response.statusText);
      }
    } catch (error) {
      console.error("Error al agregar nuevo rol:", error);
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
        <h2 className="titulo">Lista de Roles</h2>
        <table className="table table-hover table-bordered">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {roles.map(rol => (
              <tr key={rol.rolID}>
                <td>{rol.rolID}</td>
                <td>{rol.rolName}</td>
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
            name="rolID"
            placeholder="ID del rol"
            value={nuevoRol.rolID}
            onChange={handleChange}
          />
          <input
            type="text"
            name="rolName"
            placeholder="Nombre del rol"
            value={nuevoRol.rolName}
            onChange={handleChange}
          />
          <button type="submit" className="btnAdmn">Agregar Rol</button>
        </form>
      </div>
    </>
  );
};

export default Roles;
