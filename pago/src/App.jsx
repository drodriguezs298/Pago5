import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Inicio from "./componentes/Inicio";
import Compra from "./componentes/Compra";
import Confirmacion from "./componentes/Confirmacion";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/Compra" element={<Compra />} />
          <Route path="/Confirmacion" element={<Confirmacion />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
