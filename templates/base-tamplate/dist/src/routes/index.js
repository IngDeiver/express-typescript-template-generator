"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = require("express");
var user_route_1 = __importDefault(require("./user.route"));
var router = express_1.Router();
var prefix = '/api';
router.use(prefix + "/user", user_route_1["default"]);
exports["default"] = router;
