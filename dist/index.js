"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* Import App */
const app_1 = __importDefault(require("./app"));
/* Import Connection */
const database_1 = require("./database");
const server_port = app_1.default.get("port");
async function main() {
    database_1.start_connection();
    await app_1.default.listen(server_port);
    console.log("Server on port", server_port);
}
main();
