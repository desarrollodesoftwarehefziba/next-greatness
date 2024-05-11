import {NextResponse} from 'next/server'

import { prisma } from "@/libs/prisma";


async function obtenerMedicos() {
    const user = await prisma.medico.findMany()
    //console.log(user)
    return user
  }
export async function GET(request, {params}){
    const medico = await obtenerMedicos()
console.log(medico)
    return NextResponse.json("obtenerxid")
}