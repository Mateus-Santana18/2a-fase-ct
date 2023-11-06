import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main(){
    
    const result = await prisma.users.update({
        where: {
            name: 'Mateus'
        },
        data: {
            name: "Guilherme",
            fullname: "Agostinho",
            cpf: "111.111.111-22",
            address: "Monte Verde"
        }
    });


    console.log(result);
}

main();