/* Import App */
import app from "./app";

/* Import Connection */
import { start_connection } from "./database";

const server_port = app.get("port");

async function main() {
  start_connection();
  await app.listen(server_port);
  console.log("Server on port", server_port);
}

main();
