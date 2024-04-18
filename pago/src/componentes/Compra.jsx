
import { Link } from 'react-router-dom';
import CompraMain from "./CompraMain";
import CompraFooter from "./CompraFooter";
import './stylecompra.css'

const Compra = () => {
    return (
      <div className="pagina">

        <header>
          <div className="container">
            <div className="logo">
              <Link to="/">
                <img src="#" alt="Logo Puente Global"/>
              </Link>
            </div>
            <div className="navegacion">
              <ul>
                <li><Link to="/reservas">Reservas</Link></li>
                <li><Link to="/boletos">Boletos</Link></li>
                <li><Link to="/vuelos">Vuelos</Link></li>
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

  }
  

  

  export default Compra;
  