import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";

export async function GET() {
  const citamedica = await prisma.citaMedica.findMany();
  console.log(citamedica);
  return NextResponse.json("obteniendo citas");
}

export async function POST(request) {
  const { fecha, nombre, telefono, medicoId } = await request.json();
 
  
 
  const nuevaCita = await prisma.citaMedica.create({
    data: {
      fecha,
      nombre,
      telefono,
      medicoId,
    },
  });
  return NextResponse.json(nuevaCita);
}
