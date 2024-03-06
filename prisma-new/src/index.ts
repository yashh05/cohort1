import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// async function getTodo(userId: number) {
//   const res = await prisma.todo.findMany({
//     where: { userId },
//   });
//   console.log(res);
// }

async function getTodoAndUserDetails(userId: number) {
  const res = await prisma.todo.findMany({
    where: { userId },
    select: {
      id: true,
      title: true,
      description: true,
      user: {
        select: {
          id: true,
          firstname: true,
          lastname: true,
        },
      },
    },
  });
  console.log(res);
}

async function createTodo() {
  const res = await prisma.todo.create({
    data: {
      title: "hello this is my first",
      description: "this is desc",
      userId: 100,
    },
  });
}

// getTodoAndUserDetails(1);
createTodo();
