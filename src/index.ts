import app from "./app";

const server_port = app.get("port");

async function main() {
  await app.listen(server_port);
  console.log("Server on port", server_port);
}

main();
