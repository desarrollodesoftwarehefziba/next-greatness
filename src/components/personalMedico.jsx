"use client"
import { useState } from 'react';
function PersonalMedico({ doctor }) {
  //console.log(doctor.horarios);
  const [formData, setFormData] = useState({
    fecha: '',
    nombre: '',
    telefono: '',
    hora: '',
  });
  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log();
   
  
    const response = await fetch(`/api/citas`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        medicoId: doctor.id,
        ...formData
      })
    });

    if (response.ok) {
      alert('Cita reservada con éxito!');
    } else {
      alert('Hubo un error al reservar la cita.');
    }
  };

  return (
    <div>
      {doctor.id}
      <h3>{doctor.nombre}</h3>
      <h3>{doctor.especialidad}</h3>
      {/* {doctor.horarios.map((horario, index) => (
        <div key={index}>
          <p>Día de la semana: {horario.horario}</p>
         
        </div>
      ))} */}
      <h2>Reservar una cita:</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Fecha:
          <input type="date" name="fecha" onChange={handleChange} required />
        </label>
        <label>
          Hora:
          <input type="time" name="hora" onChange={handleChange} required />
        </label>
        <label>
          Nombre:
          <input type="text" name="nombre" onChange={handleChange} required />
        </label>
        <label>
          Teléfono:
          <input type="tel" name="telefono" onChange={handleChange} required />
        </label>
        <button type="submit">Reservar</button>
      </form>
    </div>
  );
}

export default PersonalMedico;
