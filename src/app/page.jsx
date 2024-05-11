import React from "react";
import MedicoCarta from "@/components/medicoCarta";
import { prisma } from "@/libs/prisma";

async function loadMedicos() {
  const medicos = await prisma.medico.findMany();
  return medicos;
}

async function ConsultaMedicos() {
  const medicos = await loadMedicos();
  return (
    <section className="container mx-auto">
      <div className="grid grid-cols-3 gap-3 mt-10">
        <MedicoCarta medicos={medicos} /> 
      </div>
    </section>
  );
}

export default ConsultaMedicos;
