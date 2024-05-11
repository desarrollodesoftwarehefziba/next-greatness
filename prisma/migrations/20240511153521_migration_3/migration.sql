/*
  Warnings:

  - You are about to drop the column `fechadecita` on the `citamedica` table. All the data in the column will be lost.
  - You are about to drop the column `horario` on the `disponibilidad` table. All the data in the column will be lost.
  - Added the required column `fecha` to the `CitaMedica` table without a default value. This is not possible if the table is not empty.
  - Added the required column `medicoId` to the `CitaMedica` table without a default value. This is not possible if the table is not empty.
  - Added the required column `diaSemana` to the `Disponibilidad` table without a default value. This is not possible if the table is not empty.
  - Added the required column `horaFin` to the `Disponibilidad` table without a default value. This is not possible if the table is not empty.
  - Added the required column `horaInicio` to the `Disponibilidad` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `citamedica` DROP COLUMN `fechadecita`,
    ADD COLUMN `fecha` DATETIME(3) NOT NULL,
    ADD COLUMN `medicoId` INTEGER NOT NULL,
    MODIFY `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

-- AlterTable
ALTER TABLE `disponibilidad` DROP COLUMN `horario`,
    ADD COLUMN `diaSemana` VARCHAR(191) NOT NULL,
    ADD COLUMN `horaFin` DATETIME(3) NOT NULL,
    ADD COLUMN `horaInicio` DATETIME(3) NOT NULL;

-- AlterTable
ALTER TABLE `medico` MODIFY `biografia` VARCHAR(191) NULL;

-- CreateIndex
CREATE INDEX `cita_fecha_index` ON `CitaMedica`(`medicoId`, `fecha`);

-- CreateIndex
CREATE INDEX `disponibilidad_medico_dia_index` ON `Disponibilidad`(`medicoId`, `diaSemana`);

-- AddForeignKey
ALTER TABLE `CitaMedica` ADD CONSTRAINT `CitaMedica_medicoId_fkey` FOREIGN KEY (`medicoId`) REFERENCES `Medico`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
