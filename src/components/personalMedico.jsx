"use client";
import { useState } from "react";

function PersonalMedico({ doctor }) {
  const [formData, setFormData] = useState({
    fecha: "",
    nombre: "",
    telefono: "",
    hora: "",
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const fechaHora = `${formData.fecha}T${formData.hora}:00`;
    const fechaHoraZona = `${fechaHora}Z`;

    const response = await fetch(`/api/citas`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        medicoId: doctor.id,
        fecha: fechaHoraZona,
        nombre: formData.nombre,
        telefono: formData.telefono,
      }),
    });

    if (response.ok) {
      alert("Cita reservada con éxito!");
    } else {
      alert("Hubo un error al reservar la cita.");
    }
  };

  return (
    <div className="bg-white shadow-md rounded-md p-6">
      <h2 className="text-xl font-semibold mb-4">{doctor.nombre}</h2>
      <h3 className="text-lg font-medium mb-2">{doctor.especialidad}</h3>
      <div className="mb-4">
        {doctor.horarios.map((horario, index) => (
          <div key={index} className="mb-2">
            <p><span className="font-semibold">Día:</span> {horario.diaSemana}</p>
            <p><span className="font-semibold">Inicio:</span> {new Date(horario.horaInicio).toLocaleTimeString()}</p>
            <p><span className="font-semibold">Fin:</span> {new Date(horario.horaFin).toLocaleTimeString()}</p>
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div>
            <label className="block mb-2">Fecha:</label>
            <input type="date" name="fecha" onChange={handleChange} required className="p-2 border rounded-md w-full" />
          </div>
          <div>
            <label className="block mb-2">Hora:</label>
            <input type="time" name="hora" onChange={handleChange} required className="p-2 border rounded-md w-full" />
          </div>
          <div>
            <label className="block mb-2">Nombre:</label>
            <input type="text" name="nombre" onChange={handleChange} required className="p-2 border rounded-md w-full" />
          </div>
          <div>
            <label className="block mb-2">Teléfono:</label>
            <input type="tel" name="telefono" onChange={handleChange} required className="p-2 border rounded-md w-full" />
          </div>
        </div>
        <button type="submit" className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 mt-4 transition duration-300">Reservar</button>
      </form>
    </div>
  );
}

export default PersonalMedico;

