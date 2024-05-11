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
      />
      {medicosFiltrados.map((medico) => (
        <div
          key={medico.id}
          className="bg-slate-900 p-3 hover:bg-slate-800 hover:cursor-pointer"
          onClick={() => {
            router.push("/doctors/" + medico.id);
          }}
        >
          <h3 className="font-bold text-2xl mb-2">{medico.nombre}</h3>
          <h3>{medico.especialidad}</h3>
          <p>{medico.biografia}</p>
        </div>
      ))}
    </div>
  );
}

export default MedicoCarta;
