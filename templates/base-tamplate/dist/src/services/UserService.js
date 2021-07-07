"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var models_1 = require("../models");
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
                return [2 /*return*/, repository_1.UserRepository.list()];
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
                return [2 /*return*/, repository_1.UserRepository.getById(id)];
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
            return __generator(this, function (_a) {
                return [2 /*return*/, repository_1.UserRepository.remove(user)];
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
            var taskToDelete;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getById(id)];
                    case 1:
                        taskToDelete = _a.sent();
                        if (!taskToDelete) return [3 /*break*/, 3];
                        return [4 /*yield*/, taskToDelete.remove()];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3: return [2 /*return*/, taskToDelete];
                }
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
            return __generator(this, function (_a) {
                return [2 /*return*/, repository_1.UserRepository.update(user)];
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
    UserService.prototype.updateById = function (id, body) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                // eslint-disable-next-line no-unused-vars
                return [2 /*return*/, new Promise(function (resolve, _) {
                        models_1.User.findOneAndUpdate({ _id: id }, __assign({}, body), { "new": true }, function (error, task) { return resolve(task); });
                    })];
            });
        });
    };
    return UserService;
}());
exports["default"] = new UserService();
