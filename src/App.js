import React, { useEffect, useState } from 'react';
import axios from 'axios';

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
    <div>
      <h1>Prueba de conexión</h1>
      <p>{message}</p>
    </div>
  );
}

export default App;
