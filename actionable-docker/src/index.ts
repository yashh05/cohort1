import dbClient from "./db";
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

async function runTransaction() {
  dbClient.connect();
  await dbClient.query("BEGIN;");
  const res = await dbClient.query(
    "INSERT INTO users(id,username,email,password) VALUES($1,$2,$3,$4);",
    [2, "username2", "email2", "password2"]
  );
  console.log(res);

  await dbClient.query(
    "INSERT INTO addresses(user_id,city,country,street,pincode) VALUES($1,$2,$3,$4,$5);",
    [1, "delhi", "india", "delhi", 110044]
  );
  await dbClient.query("COMMIT;");
}

// createTable(CREATE_TABLE_USERS);
// runQuery("insert into users(username,email,password) values($1,$2,$3)");
// createTable(CREATE_TABLE_ADDRESSES);
// runQuery(insertUserAndAddress);
runTransaction();
