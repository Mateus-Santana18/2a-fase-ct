/*
  Warnings:

  - You are about to alter the column `cpf` on the `user` table. The data in that column could be lost. The data in that column will be cast from `Double` to `VarChar(191)`.

*/
-- AlterTable
ALTER TABLE `user` MODIFY `cpf` VARCHAR(191) NOT NULL;
