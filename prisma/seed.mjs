import { PrismaClient } from '@prisma/client';

const prisma= new PrismaClient()

async function main(){

    const membershipuser= await prisma.membership.create({
        data:{
            username:'darvi',
            password:'darvi@123'
        },
    })
    console.log('created', membershipuser)
    const membershipuser2= await prisma.membership.create({
        data:{
            username:'darvitest',
            password:'darvitest@123'
        },
    })
    console.log('created', membershipuser2)
}
main().then(() => prisma.$disconnect()).catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit()
})