"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
// async function getTodo(userId: number) {
//   const res = await prisma.todo.findMany({
//     where: { userId },
//   });
//   console.log(res);
// }
function getTodoAndUserDetails(userId) {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield prisma.todo.findMany({
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
    });
}
function createTodo() {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield prisma.todo.create({
            data: {
                title: "hello this is my first",
                description: "this is desc",
                userId: 100,
            },
        });
    });
}
// getTodoAndUserDetails(1);
createTodo();
