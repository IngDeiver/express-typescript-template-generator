"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var Server_1 = __importDefault(require("./server/Server"));
var database_1 = __importDefault(require("./config/database"));
require("./config/dotenv");
var utils_1 = require("./utils");
var PORT = process.env.PORT ? parseInt(process.env.PORT) : 3000;
var server = Server_1["default"].init(PORT);
// database
database_1["default"].connect();
// START
// eslint-disable-next-line no-console
if (process.env.NODE_ENV !== 'test') {
    server.listen(function () { return utils_1.logger.info("\uD83D\uDE80 App listening on the port " + PORT); });
}
exports["default"] = server;
