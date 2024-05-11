"use client";
import React from "react";
import { useRouter } from "next/navigation";
function MedicoCarta({ medico }) {
  const router = useRouter();
  return (
    <div className="bg-slate-900 p-3 hover:bg-slate-800 hover:cursor-pointer"
    onClick={() => {
        router.push('/doctors/' + medico.id)
    }}
    >
      <h3 className="font-bold text-2xl mb-2">{medico.nombre}</h3>
      <h3>{medico.especialidad}</h3>
      <p>{medico.biografia}</p>
    </div>
  );
}

export default MedicoCarta;
