import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Inicio from "./componentes/Inicio";
import Compra from "./componentes/Compra";
import Confirmacion from "./componentes/Confirmacion";
import Login from "./componentes/Login";
import InicioAdmin from "./componentes/InicioAdmin";
import AerolineasAdmin from "./componentes/AerolineasAdmin";
import ConsecutivosAdmin from "./componentes/ConsecutivosAdmin";
import Reserva from "./componentes/Reservas";
import UsuariosAdmin from "./componentes/UsuariosAdmin";
import Vuelos from "./componentes/Vuelos";

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
        </Routes>
      </Router>
    </div>
  );
}

export default App;
