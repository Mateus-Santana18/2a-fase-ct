import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main(){
    
    const result = await prisma.users.delete({
        where: {
            name: "Guilherme"
        },

    });


    console.log(result);
}

main();