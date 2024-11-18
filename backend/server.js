require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// Config Express
const app = express();
app.use(cors());
app.use(express.json());

// Esquemas y Modelos

// 1. Colección de Libros | Si agregas algo, la fecha debe estar con el formato ISO 8601
const LibroSchema = new mongoose.Schema({
  nombre_libro: String,
  autor: String,
  cantidad_total: Number,
  cantidad_reservada: Number,
  fecha_agregacion: Date,
  ultima_actualizacion: Date,
  reservas_historicas: Number,
  reservas_mensuales: Number,
});
const Libro = mongoose.model('Libro', LibroSchema);

// 2. Colección de Prestamos
const PrestamoSchema = new mongoose.Schema({
  id_usuario: mongoose.Types.ObjectId,
  id_libro: mongoose.Types.ObjectId,
  fecha_reserva: Date,
  fecha_limite: Date,
});
const Prestamo = mongoose.model('Prestamo', PrestamoSchema);

// 3. Colección de Reservas
const ReservaSchema = new mongoose.Schema({
  id_usuario: mongoose.Types.ObjectId,
  rut_usuario: String,
  id_libro: mongoose.Types.ObjectId,
  fecha_reserva: Date,
  fecha_limite: Date,
  estado: String,
});
const Reserva = mongoose.model('Reserva', ReservaSchema);

// 4. Colección de Usuarios
const UsuarioSchema = new mongoose.Schema({
  rut: String,
  nombre: String,
  apellido: String,
  direccion: String,
  correo: String,
  telefono: String,
  admin: String,
  contraseña: String,
});
const Usuario = mongoose.model('Usuario', UsuarioSchema);

// Rutas CRUD

// 1. Rutas para Libros
app.post('/libros', async (req, res) => {
  try {
    const nuevoLibro = new Libro(req.body);
    const libroGuardado = await nuevoLibro.save();
    res.status(201).json(libroGuardado);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

app.get('/libros', async (req, res) => {
  try {
    const libros = await Libro.find();
    res.status(200).json(libros);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.put('/libros/:id', async (req, res) => {
    try {
      const libroActualizado = await Libro.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!libroActualizado) return res.status(404).json({ error: 'Libro no encontrado' });
      res.status(200).json(libroActualizado);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
});

app.delete('/libros/:id', async (req, res) => {
    try {
      const libroEliminado = await Libro.findByIdAndDelete(req.params.id);
      if (!libroEliminado) return res.status(404).json({ error: 'Libro no encontrado' });
      res.status(200).json({ mensaje: 'Libro eliminado con éxito' });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
});

// 2. Rutas para Prestamos
app.post('/prestamos', async (req, res) => {
  try {
    const nuevoPrestamo = new Prestamo(req.body);
    const prestamoGuardado = await nuevoPrestamo.save();
    res.status(201).json(prestamoGuardado);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

app.get('/prestamos', async (req, res) => {
  try {
    const prestamos = await Prestamo.find();
    res.status(200).json(prestamos);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.put('/prestamos/:id', async (req, res) => {
    try {
      const prestamoActualizado = await Prestamo.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!prestamoActualizado) return res.status(404).json({ error: 'Préstamo no encontrado' });
      res.status(200).json(prestamoActualizado);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
});

app.delete('/prestamos/:id', async (req, res) => {
    try {
      const prestamoEliminado = await Prestamo.findByIdAndDelete(req.params.id);
      if (!prestamoEliminado) return res.status(404).json({ error: 'Préstamo no encontrado' });
      res.status(200).json({ mensaje: 'Préstamo eliminado con éxito' });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
});

// 3. Rutas para Reservas
app.post('/reservas', async (req, res) => {
  try {
    const nuevaReserva = new Reserva(req.body);
    const reservaGuardada = await nuevaReserva.save();
    res.status(201).json(reservaGuardada);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

app.get('/reservas', async (req, res) => {
  try {
    const reservas = await Reserva.find();
    res.status(200).json(reservas);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.put('/reservas/:id', async (req, res) => {
    try {
      const reservaActualizada = await Reserva.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!reservaActualizada) return res.status(404).json({ error: 'Reserva no encontrada' });
      res.status(200).json(reservaActualizada);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
});

app.delete('/reservas/:id', async (req, res) => {
    try {
      const reservaEliminada = await Reserva.findByIdAndDelete(req.params.id);
      if (!reservaEliminada) return res.status(404).json({ error: 'Reserva no encontrada' });
      res.status(200).json({ mensaje: 'Reserva eliminada con éxito' });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
});

// 4. Rutas para Usuarios
app.post('/usuarios', async (req, res) => {
  try {
    const nuevoUsuario = new Usuario(req.body);
    const usuarioGuardado = await nuevoUsuario.save();
    res.status(201).json(usuarioGuardado);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

app.get('/usuarios', async (req, res) => {
  try {
    const usuarios = await Usuario.find();
    res.status(200).json(usuarios);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.put('/usuarios/:id', async (req, res) => {
    try {
      const usuarioActualizado = await Usuario.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!usuarioActualizado) return res.status(404).json({ error: 'Usuario no encontrado' });
      res.status(200).json(usuarioActualizado);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
});

app.delete('/usuarios/:id', async (req, res) => {
    try {
      const usuarioEliminado = await Usuario.findByIdAndDelete(req.params.id);
      if (!usuarioEliminado) return res.status(404).json({ error: 'Usuario no encontrado' });
      res.status(200).json({ mensaje: 'Usuario eliminado con éxito' });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
});

// Conexión a MongoDB
const dbURI = process.env.MONGO_URI;
mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Conectado a MongoDB Atlas'))
  .catch((err) => console.error('Error de conexión:', err));

// Arrancar el servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
