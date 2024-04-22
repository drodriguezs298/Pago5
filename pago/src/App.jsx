import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Inicio from "./componentes/inicio";
import Compra from "./componentes/Compra";
import Confirmacion from "./componentes/Confirmacion";
import Login from "./componentes/login";
import InicioAdmin from "./componentes/InicioAdmin";
import AerolineasAdmin from "./componentes/AerolineasAdmin";
import ConsecutivosAdmin from "./componentes/ConsecutivosAdmin";
import Reserva from "./componentes/Reservas";
import UsuariosAdmin from "./componentes/UsuariosAdmin";
import Vuelos from "./componentes/Vuelos";
import Pais from "./componentes/Pais";
import Roles from "./componentes/Roles";
import Puertas from "./componentes/Puertas";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/Compra" element={<Compra />} />
          <Route path="/Confirmacion" element={<Confirmacion />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/AerolineasAdmin" element={<AerolineasAdmin />} />
          <Route path="/ConsecutivosAdmin" element={<ConsecutivosAdmin />} />
          <Route path="/Reserva" element={<Reserva />} />
          <Route path="/UsuariosAdmin" element={<UsuariosAdmin />} />
          <Route path="/Vuelos" element={<Vuelos />} />
          <Route path="/InicioAdmin" element={<InicioAdmin />} />
          <Route path="/Pais" element={<Pais />} />
          <Route path="/Roles" element={<Roles />} />
          <Route path="/Puertas" element={<Puertas />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
