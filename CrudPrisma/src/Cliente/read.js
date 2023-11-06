import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main(){

    const result = await prisma.users.findMany({
        where: {
            name: {
                equals: 'Mateus'
            }
        }
    });

    console.log(result);
}

main();