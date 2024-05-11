import { prisma } from "@/libs/prisma";
import PersonalMedico from "@/components/personalMedico";

async function obtenerDoctoresxunidad({ params }) {
  console.log(params);
  const user = await prisma.medico.findMany({
    where: {
      id: parseInt(params.id),
    },
    include: {
      horarios: true,
    },
  });
  console.log(user);
  return user;
}

async function Doctores({ params }) {
  const doctor = await obtenerDoctoresxunidad({ params });
  console.log(doctor);
  return (
    <div>
      <h2>
        {doctor.map((doc) => (
          <PersonalMedico doctor={doc} key={doctor.id} />
        ))}
      </h2>
    </div>
  );
}

export default Doctores;
