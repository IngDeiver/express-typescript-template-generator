"use strict";
exports.__esModule = true;
var express_1 = require("express");
var controller_1 = require("../controller");
var middlewares_1 = require("../middlewares");
var dtos_1 = require("../dtos");
/**
 *
 * Managament the routes of user
 * @category Routes
 * @class UserRouter
 * @implements {IRoute}
 */
var UserRouter = /** @class */ (function () {
    function UserRouter() {
        this.router = express_1.Router();
        this.pathIdParam = '/:id';
        this.createRoutes();
    }
    UserRouter.prototype.createRoutes = function () {
        // get user by Id
        this.router.get(this.pathIdParam, middlewares_1.isRequiredParamMiddleware(), function (req, res, next) { return controller_1.UserControler
            .getById(req, res, next); });
        // list users
        this.router.get('/', function (req, res, next) { return controller_1.UserControler
            .list(req, res, next); });
        // Save user
        this.router.post('/', middlewares_1.validationMiddleware(dtos_1.UserDTO), function (req, res, next) { return controller_1.UserControler
            .create(req, res, next); });
        // Update user
        this.router.put(this.pathIdParam, middlewares_1.isRequiredParamMiddleware(), middlewares_1.validationMiddleware(dtos_1.UserDTO, true), function (req, res, next) { return controller_1.UserControler
            .updateById(req, res, next); });
        // Remove user
        this.router["delete"](this.pathIdParam, middlewares_1.isRequiredParamMiddleware(), function (req, res, next) { return controller_1.UserControler
            .removeById(req, res, next); });
    };
    return UserRouter;
}());
exports["default"] = new UserRouter().router;
