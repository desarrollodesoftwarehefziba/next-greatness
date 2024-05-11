-- CreateTable
CREATE TABLE `Disponibilidad` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `medicoId` INTEGER NOT NULL,
    `horario` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Disponibilidad` ADD CONSTRAINT `Disponibilidad_medicoId_fkey` FOREIGN KEY (`medicoId`) REFERENCES `Medico`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
