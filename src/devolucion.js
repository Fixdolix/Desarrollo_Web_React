import React, { useState } from 'react';
import './styledevolucion.css';

const Devolucion = () => {
  const [codigo, setCodigo] = useState('');
  const [documentos, setDocumentos] = useState([
    { codigo: '000001', nombre: 'Libro A', autor: 'Autor A', fechaPrestamo: '2024-09-01', fechaDevolucion: '2024-09-15' },
    { codigo: '000002', nombre: 'Libro B', autor: 'Autor B', fechaPrestamo: '2024-09-05', fechaDevolucion: '2024-09-20' },
    { codigo: '000003', nombre: 'Libro C', autor: 'Autor C', fechaPrestamo: '2024-09-10', fechaDevolucion: '2024-09-25' },
  ]);
  const [mensaje, setMensaje] = useState('');
  const [selectedDoc, setSelectedDoc] = useState(null); // Estado para documento seleccionado

  const handleSearch = (e) => {
    setCodigo(e.target.value);
  };

  const handleDevolucion = () => {
    if (selectedDoc) {
      const hoy = new Date();
      const fechaDevolucion = new Date(selectedDoc.fechaDevolucion);

      if (hoy > fechaDevolucion) {
        setMensaje('Devuelto con atraso');
      } else {
        setMensaje('Devuelto');
      }

      // Aquí puedes marcar el documento como devuelto o realizar otra lógica
      // setDocumentos(prev => prev.map(doc => doc.codigo === selectedDoc.codigo ? { ...doc, devuelto: true } : doc));
    } else {
      setMensaje('Por favor, seleccione un documento.');
    }
  };

  const handleSelectDoc = (doc) => {
    setSelectedDoc(doc);
  };

  return (
    <div className="container">
      <div className="carrito-container">
        <h2>Devolución de Documentos</h2>
        <div className="search-container">
          <input 
            type="text" 
            placeholder="Ingrese el código o nombre del ejemplar" 
            value={codigo} 
            onChange={handleSearch} 
          />
        </div>
        <table>
          <thead>
            <tr>
              <th>Código</th>
              <th>Nombre</th>
              <th>Autor</th>
              <th>Fecha de Préstamo</th>
              <th>Fecha de Devolución</th>
            </tr>
          </thead>
          <tbody>
            {documentos.filter(doc => 
              doc.codigo.includes(codigo) || doc.nombre.toLowerCase().includes(codigo.toLowerCase())
            ).map(doc => (
              <tr 
                key={doc.codigo} 
                onClick={() => handleSelectDoc(doc)} // Manejar la selección al hacer clic
                className={selectedDoc && selectedDoc.codigo === doc.codigo ? 'selected' : ''} // Clase para resaltar el documento seleccionado
              >
                <td>{doc.codigo}</td>
                <td>{doc.nombre}</td>
                <td>{doc.autor}</td>
                <td>{doc.fechaPrestamo}</td>
                <td>{doc.fechaDevolucion}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <button onClick={handleDevolucion}>Marcar como devuelto</button>
        {mensaje && <p>{mensaje}</p>}
      </div>
    </div>
  );
};

export default Devolucion;
