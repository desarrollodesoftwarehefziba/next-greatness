import { prisma } from "@/libs/prisma";
import PersonalMedico from "@/components/personalMedico";

async function obtenerDoctoresxunidad({ params }) {
  console.log(params);
  const user = await prisma.medico.findMany({
    where: {
      id: parseInt(params.id), // Convertimos el ID a un número entero
    },
    include: {
      horarios: true,
    },
  });
  console.log(user);
  return user;
}

async function Doctores({ params }) { // Pasamos los parámetros como argumento
  const doctor = await obtenerDoctoresxunidad({ params }); // Usamos los parámetros directamente
  console.log(doctor);
  return (
    <div>
      <h2>
        {doctor.map((doc) => (
          <PersonalMedico doctor={doc} key={doctor.id} /> // Usamos doc.id en lugar de doctor.id
        ))}
      </h2>
    </div>
  );
}

export default Doctores;
