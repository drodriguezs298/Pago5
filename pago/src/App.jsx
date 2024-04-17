
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Inicio from './componentes/Inicio';
import Compra from './componentes/Compra'
import Confirmacion from './componentes/Confirmacion';


function App() {
  

  return (
<Router>
      <Routes>
      <Route path="/" element={<Inicio />} />
        <Route path="/compra" element={<Compra />} />
        {/* <Route path="/reservas" element={<Reservas />} /> */}
       {/* <Route path="/boletos" element={<Boletos />} /> */}
        {/* <Route path="/vuelos" element={<Vuelos />} /> */}
        <Route path="/confirmacion" element={<Confirmacion />} />
      </Routes>
    </Router>
  );
}
  

export default App
