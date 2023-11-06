import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main(){
    const result = await prisma.users.create({ 
        data: {
            name: "Mateus",
            fullname: "Santana",
            cpf: "000.000.000-11",
            address: "Saco Grande - SC 401"
        },
    });
    console.log(result);
}

main();