// src/app.ts
import express, { json, urlencoded } from "express";
// import { RegisterRoutes } from "../build/routes";

export const app = express();

// Use body parser to read sent json payloads
app.use(
  urlencoded({
    extended: true,
  })
);
app.use(json());

// RegisterRoutes(app);
app.listen(3000, () =>
  console.log(`Example app listening at http://localhost}`)
);
