"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
// const dbClient = new Client({
//   user: "yash",
//   database: "postgres",
//   port: 5432,
//   host: "localhost",
//   password: "yash1234",
// });
const dbClient = new pg_1.Client({
    connectionString: "postgresql://yash:yash1234@localhost:5432/yash",
});
exports.default = dbClient;
