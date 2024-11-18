// src/Carrito.js
import React, { useState } from "react";
import "./stylecarrito.css";

const Carrito = () => {
  const [activeTab, setActiveTab] = useState("prestamo");

  const openTab = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div>
      {/* Header */}
      <header className="navbar">
        <nav>
          <ul>
            <li><a href="#">Inicio</a></li>
          </ul>
        </nav>
      </header>

      {/* Contenedor del carrito */}
      <div className="container">
        <div className="carrito-container">
          <div className="tabs">
            <div
              className={`tab ${activeTab === "prestamo" ? "active" : ""}`}
              onClick={() => openTab("prestamo")}
            >
              Préstamo
            </div>
            <div
              className={`tab ${activeTab === "reserva" ? "active" : ""}`}
              onClick={() => openTab("reserva")}
            >
              Reserva
            </div>
          </div>

          {/* Tab de Préstamo */}
          <div className={`tab-content ${activeTab === "prestamo" ? "active" : ""}`}>
            <h3>Préstamo de libros</h3>
            <p>Lista de libros agregados al carrito:</p>
            <table>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Nombre del libro</th>
                  <th>Autor</th>
                  <th>Fecha de devolución</th>
                  <th>Cantidad</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Ejemplo de Libro 1</td>
                  <td>Autor 1</td>
                  <td><input type="date" /></td>
                  <td>
                    <select>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                    </select>
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Ejemplo de Libro 2</td>
                  <td>Autor 2</td>
                  <td><input type="date" /></td>
                  <td>
                    <select>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                    </select>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Tab de Reserva */}
          <div className={`tab-content ${activeTab === "reserva" ? "active" : ""}`}>
            <h3>Reserva de libros</h3>
            <p>Seleccione una fecha para reservar sus libros:</p>
            <table>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Nombre del libro</th>
                  <th>Autor</th>
                  <th>Fecha de reserva</th>
                  <th>Cantidad</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Ejemplo de Libro 1</td>
                  <td>Autor 1</td>
                  <td><input type="date" /></td>
                  <td>
                    <select>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                    </select>
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Ejemplo de Libro 2</td>
                  <td>Autor 2</td>
                  <td><input type="date" /></td>
                  <td>
                    <select>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                    </select>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Resumen de libros */}
        <div className="summary-container">
          <div className="summary-content">
            <h3>Resumen de libros</h3>
            <div className="summary-item">
              <h4>Cantidad total: [#]</h4>
            </div>
          </div>
          <button className="summary-button">
            {activeTab === "prestamo" ? "Recibir préstamo" : "Reservar"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carrito;
