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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = __importDefault(require("./db"));
// import { insertUserAndAddress } from "./queries/UsersQuery";
// import { CREATE_TABLE_ADDRESSES } from "./queries/schemaQueries";
// import { insertUser } from "./queries/UsersQuery";
// import { CREATE_TABLE_USERS } from "./queries/schemaQueries";
// async function createTable(query: string) {
//   dbClient.connect();
//   const result = await dbClient.query(query);
//   console.log(result);
// }
// async function runQuery(query: string) {
//   dbClient.connect();
//   const result = await dbClient.query(query, [
//     "username2",
//     "email2",
//     "password2",
//   ]);
//   console.log(result);
// }
function runTransaction() {
    return __awaiter(this, void 0, void 0, function* () {
        db_1.default.connect();
        yield db_1.default.query("BEGIN;");
        const res = yield db_1.default.query("INSERT INTO users(id,username,email,password) VALUES($1,$2,$3,$4);", [2, "username2", "email2", "password2"]);
        console.log(res);
        yield db_1.default.query("INSERT INTO addresses(user_id,city,country,street,pincode) VALUES($1,$2,$3,$4,$5);", [1, "delhi", "india", "delhi", 110044]);
        yield db_1.default.query("COMMIT;");
    });
}
// createTable(CREATE_TABLE_USERS);
// runQuery("insert into users(username,email,password) values($1,$2,$3)");
// createTable(CREATE_TABLE_ADDRESSES);
// runQuery(insertUserAndAddress);
runTransaction();
