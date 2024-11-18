import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'; 

// Importa los componentes que quieres renderizar
import Carrito from './carrito';
import Devolucion from './devolucion';

// Componente para el layout de la página principal
function Layout({ message }) {
  return (
    <div>
      <h1>Prueba de conexión</h1>
      <p>{message}</p>

      {/* Links para navegar entre páginas */}
      <nav>
        <ul>
          <li>
            <Link to="/carrito">Carrito</Link>
          </li>
          <li>
            <Link to="/devolucion">Devolución</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    // Realiza una solicitud GET al backend
    axios
      .get('http://localhost:5000/')
      .then((response) => setMessage(response.data)) // Almacena el mensaje recibido
      .catch((error) => console.error('Error:', error)); // Maneja errores
  }, []);

  return (
    <Router>
      {/* Ruta para la página principal con layout */}
      <Routes>
        <Route path="/" element={<Layout message={message} />} />
        <Route path="/carrito" element={<Carrito />} />
        <Route path="/devolucion" element={<Devolucion />} />
      </Routes>
    </Router>
  );
}

export default App;
