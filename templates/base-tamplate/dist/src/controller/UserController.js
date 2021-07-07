"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var models_1 = require("../models");
var exceptions_1 = require("../exceptions");
var services_1 = require("../services");
var bcrypt_1 = __importDefault(require("bcrypt"));
/**
 *
 * The user controller
 * @category Controllers
 * @class UserController
 */
var UserController = /** @class */ (function () {
    function UserController() {
    }
    /**
     *
     * List all users
     * @static
     * @param {Request} req - The request
     * @param {Response} res - The response
     * @param {NextFunction} next - The next middleware in queue
     * @return {JSON} - A list of users
     * @memberof UserController
     */
    UserController.list = function (req, res, next) {
        return __awaiter(this, void 0, void 0, function () {
            var users, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, services_1.UserService.list()];
                    case 1:
                        users = _a.sent();
                        res.json(users);
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _a.sent();
                        return [2 /*return*/, next(new exceptions_1.HttpException(error_1.status || 500, error_1.message))];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    /**
     *
     * create a new user
     * @static
     * @param {Request} req - The request
     * @param {Response} res - The response
     * @param {NextFunction} next - The next middleware in queue
     * @return {JSON} - A user creted
     * @memberof UserController
     */
    UserController.create = function (req, res, next) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, username, email, password, user, userSaved, error_2;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        _a = req.body, username = _a.username, email = _a.email, password = _a.password;
                        // Encrypt password
                        password = bcrypt_1["default"].hashSync(password, 10);
                        user = new models_1.User({ username: username, email: email, password: password });
                        return [4 /*yield*/, services_1.UserService.create(user)];
                    case 1:
                        userSaved = _b.sent();
                        res.json(userSaved);
                        return [3 /*break*/, 3];
                    case 2:
                        error_2 = _b.sent();
                        return [2 /*return*/, next(new exceptions_1.HttpException(error_2.status || 500, error_2.message))];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    /**
     *
     * Get user by id
     * @static
     * @param {Request} req - The request
     * @param {Response} res - The response
     * @param {NextFunction} next - The next middleware in queue
     * @return {JSON} - A list of users
     * @memberof UserController
     */
    UserController.getById = function (req, res, next) {
        return __awaiter(this, void 0, void 0, function () {
            var id, user, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        id = req.params.id;
                        return [4 /*yield*/, services_1.UserService.getById(id)];
                    case 1:
                        user = _a.sent();
                        if (!user)
                            throw new exceptions_1.HttpException(404, 'User not found');
                        res.json(user);
                        return [3 /*break*/, 3];
                    case 2:
                        error_3 = _a.sent();
                        return [2 /*return*/, next(new exceptions_1.HttpException(error_3.status || 500, error_3.message))];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    /**
     *
     * Remove user by id
     * @static
     * @param {Request} req - The request
     * @param {Response} res - The response
     * @param {NextFunction} next - The next middleware in queue
     * @return {JSON} - A list of userS
     * @memberof UserController
     */
    UserController.removeById = function (req, res, next) {
        return __awaiter(this, void 0, void 0, function () {
            var id, user, error_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        id = req.params.id;
                        return [4 /*yield*/, services_1.UserService
                                .removeById(id)];
                    case 1:
                        user = _a.sent();
                        if (!user)
                            throw new exceptions_1.HttpException(404, 'User not found');
                        res.json(user);
                        return [3 /*break*/, 3];
                    case 2:
                        error_4 = _a.sent();
                        return [2 /*return*/, next(new exceptions_1.HttpException(error_4.status || 500, error_4.message))];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    /**
     *
     * Update user by id
     * @static
     * @param {Request} req - The request
     * @param {Response} res - The response
     * @param {NextFunction} next - The next middleware in queue
     * @return {JSON} - A list of userS
     * @memberof UserController
     */
    UserController.updateById = function (req, res, next) {
        return __awaiter(this, void 0, void 0, function () {
            var id, _a, username, email, password, userUpdated, error_5;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        id = req.params.id;
                        _a = req.body, username = _a.username, email = _a.email, password = _a.password;
                        return [4 /*yield*/, services_1.UserService
                                .updateById(id, { username: username, email: email, password: password })];
                    case 1:
                        userUpdated = _b.sent();
                        if (!userUpdated)
                            throw new exceptions_1.HttpException(404, 'User not found');
                        res.json(userUpdated);
                        return [3 /*break*/, 3];
                    case 2:
                        error_5 = _b.sent();
                        return [2 /*return*/, next(new exceptions_1.HttpException(error_5.status || 500, error_5.message))];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    return UserController;
}());
exports["default"] = UserController;
