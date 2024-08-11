import { sql } from "./db.js";

sql`
ALTER TABLE videos
ADD id TEXT PRIMARY KEY; 
`.then(() => {
  console.log("tabela criada");
});
