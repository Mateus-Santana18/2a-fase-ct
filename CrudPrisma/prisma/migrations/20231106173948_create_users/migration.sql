-- CreateTable
CREATE TABLE `user` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `fullname` VARCHAR(191) NOT NULL,
    `cpf` DOUBLE NOT NULL,
    `address` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `user_name_key`(`name`),
    UNIQUE INDEX `user_fullname_key`(`fullname`),
    UNIQUE INDEX `user_cpf_key`(`cpf`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
