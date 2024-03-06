import { Client } from "pg";

// const dbClient = new Client({
//   user: "yash",
//   database: "postgres",
//   port: 5432,
//   host: "localhost",
//   password: "yash1234",
// });

const dbClient = new Client({
  connectionString: "postgresql://yash:yash1234@localhost:5432/yash",
});

export default dbClient;
