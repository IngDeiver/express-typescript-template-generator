"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
/* eslint-disable no-console */
// getting-started.js
var mongoose_1 = __importDefault(require("mongoose"));
var utils_1 = require("../utils");
/**
 *
 * The clas for database managament
 * @class Database
 *
 */
var Database = /** @class */ (function () {
    function Database() {
    }
    /**
     *
     * Make a conecttion with database configured
     * @static
     * @return Connection  return a new connection
     * @memberof Database
     */
    Database.connect = function () {
        mongoose_1["default"].connect(process.env.DB_URI || '', { useNewUrlParser: true, useUnifiedTopology: true })
            .then(function () { return utils_1.logger.info('🟢 The database is connected.'); })["catch"](function (error) { return utils_1.logger.error("\uD83D\uDD34 Unable to connect to the database: " + error + "."); });
        this.db = mongoose_1["default"].connection;
        return this.db;
    };
    /**
     *
     * CLose the current connection
     * @static
     * @memberof Database
     */
    Database.close = function () {
        this.db.close();
    };
    return Database;
}());
exports["default"] = Database;
