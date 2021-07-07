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
exports.__esModule = true;
var repository_1 = require("../repository");
/**
 *
 * The user service,layer of repository pattern
 * @category Services
 * @class UserService
 * @implements {ICrud<IUser, string>}
 */
var UserService = /** @class */ (function () {
    function UserService() {
    }
    /**
     *
     * Create a user
     * @param {IUser} user - The user to create
     * @return {Promise<IUser>}  A user created
     * @memberof UserService
     */
    UserService.prototype.create = function (user) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        repository_1.UserRepository.create(user)
                            .then(function (user) { return resolve(user); })["catch"](function (err) { return reject(err); });
                    })];
            });
        });
    };
    /**
     *
     * List all users
     * @return {Promise<Array<IUser>>}  A list of tasks
     * @memberof UserService
     */
    UserService.prototype.list = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        repository_1.UserRepository.list()
                            .then(function (user) { return resolve(user); })["catch"](function (err) { return reject(err); });
                    })];
            });
        });
    };
    /**
     *
     * Find by id a user
     * @param {string} id - The id to find
     * @return {Promise<IUser>}  A user
     * @memberof UserService
     */
    UserService.prototype.getById = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        repository_1.UserRepository.getById(id)
                            .then(function (user) { return resolve(user); })["catch"](function (err) { return reject(err); });
                    })];
            });
        });
    };
    /**
     *
     * Remove a user
     * @param {IUser} user - The user to remove
     * @return {Promise<IUser>}  A user removed
     * @memberof UserService
     */
    UserService.prototype.remove = function (user) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
                        var error_1;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    _a.trys.push([0, 3, , 4]);
                                    if (!user._id) return [3 /*break*/, 2];
                                    return [4 /*yield*/, repository_1.UserRepository.remove(user)];
                                case 1:
                                    _a.sent();
                                    _a.label = 2;
                                case 2:
                                    resolve(user);
                                    return [3 /*break*/, 4];
                                case 3:
                                    error_1 = _a.sent();
                                    reject(error_1);
                                    return [3 /*break*/, 4];
                                case 4: return [2 /*return*/];
                            }
                        });
                    }); })];
            });
        });
    };
    /**
     *
     * Remove by id a user
     * @param {string} id - The id to find
     * @return {Promise<IUser>}  A user removed
     * @memberof UserService
     */
    UserService.prototype.removeById = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
                        var userToDelete, error_2;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    _a.trys.push([0, 4, , 5]);
                                    return [4 /*yield*/, repository_1.UserRepository.removeById(id)];
                                case 1:
                                    userToDelete = _a.sent();
                                    if (!userToDelete) return [3 /*break*/, 3];
                                    return [4 /*yield*/, userToDelete.remove()];
                                case 2:
                                    _a.sent();
                                    _a.label = 3;
                                case 3:
                                    resolve(userToDelete);
                                    return [3 /*break*/, 5];
                                case 4:
                                    error_2 = _a.sent();
                                    reject(error_2);
                                    return [3 /*break*/, 5];
                                case 5: return [2 /*return*/];
                            }
                        });
                    }); })];
            });
        });
    };
    /**
     *
     * Update a user
     * @param {IUser} user - The user to updated
     * @return {Promise<IUser>}  A user updated
     * @memberof UserService
     */
    UserService.prototype.update = function (user) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
                        var error_3;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    _a.trys.push([0, 3, , 4]);
                                    if (!user._id) return [3 /*break*/, 2];
                                    return [4 /*yield*/, repository_1.UserRepository.update(user)];
                                case 1:
                                    _a.sent();
                                    _a.label = 2;
                                case 2:
                                    resolve(user);
                                    return [3 /*break*/, 4];
                                case 3:
                                    error_3 = _a.sent();
                                    reject(error_3);
                                    return [3 /*break*/, 4];
                                case 4: return [2 /*return*/];
                            }
                        });
                    }); })];
            });
        });
    };
    /**
     *
     * Update by id a user
     * @param {string} id - The id to find
     * @param {IUser} user - The user to updated
     * @return {Promise<IUser>} A user updated
     * @memberof UserService
     */
    UserService.prototype.updateById = function (id, user) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                // eslint-disable-next-line no-unused-vars
                return [2 /*return*/, new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
                        var userToUpdate, error_4;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    _a.trys.push([0, 2, , 3]);
                                    return [4 /*yield*/, repository_1.UserRepository.updateById(id, user)];
                                case 1:
                                    userToUpdate = _a.sent();
                                    resolve(userToUpdate);
                                    return [3 /*break*/, 3];
                                case 2:
                                    error_4 = _a.sent();
                                    reject(error_4);
                                    return [3 /*break*/, 3];
                                case 3: return [2 /*return*/];
                            }
                        });
                    }); })];
            });
        });
    };
    return UserService;
}());
exports["default"] = new UserService();
