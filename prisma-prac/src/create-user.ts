import { Prisma, PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  console.log("main");

  await prisma.user.create({
    data: {
      name: "Yash Sharma",
      email: "yashsharma@gmail.com",
    },
  });
}

main();
