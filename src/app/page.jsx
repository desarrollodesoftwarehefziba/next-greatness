import React from "react";
import MedicoCarta from '@/components/medicoCarta'
import { prisma } from "@/libs/prisma";
// async function loadMedicos() {
//   const res = await fetch('http://localhost:3000/api/medicos')
//   const data = await res.json()
//   console.log(data)
// }
async function loadMedicos() {
  const medicos = await prisma.medico.findMany();
  //console.log(medicos)
  return medicos;
}

async function ConsultaMedicos() {
  const medicos = await loadMedicos();
  console.log(medicos);
  return (
    <section className="container mx-auto">
      <div className="grid grid-cols-3 gap-3 mt-10">
        {medicos.map((medico) => (
         <MedicoCarta medico={medico} key={medico.id}/>
        ))}
      </div>
    </section>
  );
}

export default ConsultaMedicos;
