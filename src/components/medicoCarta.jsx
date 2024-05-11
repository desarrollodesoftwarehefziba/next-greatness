"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

function MedicoCarta({ medicos }) {
  const [busqueda, setBusqueda] = useState("");
  const router = useRouter();

  const handleSearch = (e) => {
    setBusqueda(e.target.value);
  };

  const medicosFiltrados = medicos.filter(
    (medico) =>
      medico.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
      medico.especialidad.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        value={busqueda}
        onChange={handleSearch}
        placeholder="Buscar por nombre o especialidad"
        className="w-full border border-gray-300 rounded-md p-2 mb-4"
      />
      {medicosFiltrados.map((medico) => (
        <div
          key={medico.id}
          className="border border-gray-300 rounded-md p-3 hover:bg-gray-50 hover:cursor-pointer mb-4"
          onClick={() => {
            router.push("/doctors/" + medico.id);
          }}
        >
          <h3 className="font-bold text-xl mb-2">{medico.nombre}</h3>
          <h3 className="text-gray-600">{medico.especialidad}</h3>
          <p className="text-gray-700">{medico.biografia}</p>
        </div>
      ))}
    </div>
  );
}

export default MedicoCarta;
