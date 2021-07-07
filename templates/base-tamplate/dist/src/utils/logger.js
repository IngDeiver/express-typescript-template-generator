"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.stream = exports.logger = void 0;
var winston_1 = __importDefault(require("winston"));
// winston format
var printf = winston_1["default"].format.printf;
// Define log format
// eslint-disable-next-line no-shadow
var logFormat = printf(function (_a) {
    var level = _a.level, message = _a.message;
    return level + ": " + message;
});
// simple log console with winston
var logger = winston_1["default"].createLogger({
    format: logFormat,
    transports: [
        new winston_1["default"].transports.Console({
            format: winston_1["default"].format.combine(winston_1["default"].format.splat(), winston_1["default"].format.colorize(), winston_1["default"].format.simple())
        }),
    ]
});
exports.logger = logger;
var stream = {
    write: function (message) {
        logger.info(message.substring(0, message.lastIndexOf('\n')));
    }
};
exports.stream = stream;
