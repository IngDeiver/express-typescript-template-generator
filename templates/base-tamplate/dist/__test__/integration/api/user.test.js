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
/* eslint-disable no-underscore-dangle */
/* eslint-disable jest/valid-expect-in-promise */
/* eslint-disable jest/expect-expect */
var supertest_1 = __importDefault(require("supertest"));
var app_1 = __importDefault(require("../../../src/app"));
var app;
var request;
var baseUri = '/api/user';
beforeAll(function () {
    app = app_1["default"].app;
    request = supertest_1["default"](app);
});
// list
it('should get list users', function () { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, request.get(baseUri)];
            case 1:
                response = _a.sent();
                expect(response.status).toBe(200);
                expect(response.body).toBeInstanceOf(Array);
                return [2 /*return*/];
        }
    });
}); });
// get by id
describe('should get user by id', function () {
    it('should response with 200 status', function () { return __awaiter(void 0, void 0, void 0, function () {
        var id, response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    id = '60228ef97b60c097608374da';
                    return [4 /*yield*/, request.get(baseUri + "/" + id)];
                case 1:
                    response = _a.sent();
                    expect(response.status).toBe(200);
                    return [2 /*return*/];
            }
        });
    }); });
    it('should response with 404 status', function () { return __awaiter(void 0, void 0, void 0, function () {
        var id, response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    id = '5fe0287346956c638f701222';
                    return [4 /*yield*/, request.get(baseUri + "/" + id)];
                case 1:
                    response = _a.sent();
                    expect(response.status).toBe(404);
                    expect(response.body.username).toBeUndefined();
                    return [2 /*return*/];
            }
        });
    }); });
});
// save
describe('should save user', function () {
    it('should save with 200 status', function () { return __awaiter(void 0, void 0, void 0, function () {
        var user, response, responseRemove;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    user = {
                        username: 'user update with test',
                        email: "test@" + Math.random().toString(5) + ".com",
                        password: "password"
                    };
                    return [4 /*yield*/, request.post(baseUri)
                            .send(user)
                            .set('Accept', 'application/json')];
                case 1:
                    response = _a.sent();
                    expect(response.status).toBe(200);
                    expect(response.body.username).toBeDefined();
                    expect(response.body.username).toEqual(user.username);
                    return [4 /*yield*/, request["delete"](baseUri + "/" + response.body._id)];
                case 2:
                    responseRemove = _a.sent();
                    expect(responseRemove.status).toBe(200);
                    expect(responseRemove.body.username).toBeDefined();
                    return [2 /*return*/];
            }
        });
    }); });
    it('should fail save without body with 400 status', function () { return __awaiter(void 0, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, request.post(baseUri)
                        .set('Accept', 'application/json')];
                case 1:
                    response = _a.sent();
                    expect(response.status).toBe(400);
                    expect(response.body.username).toBeUndefined();
                    return [2 /*return*/];
            }
        });
    }); });
});
// update
describe('should update a user', function () {
    it('should update with 200 status', function () { return __awaiter(void 0, void 0, void 0, function () {
        var id, user, response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    id = '60228ef97b60c097608374da';
                    user = {
                        username: 'user update with test',
                        email: "test@" + Math.random().toString(5) + ".com",
                        password: "password"
                    };
                    return [4 /*yield*/, request.put(baseUri + "/" + id)
                            .send(user)];
                case 1:
                    response = _a.sent();
                    expect(response.status).toBe(200);
                    expect(response.body.username).toEqual(user.username);
                    return [2 /*return*/];
            }
        });
    }); });
    it('should fail with 404 status', function () { return __awaiter(void 0, void 0, void 0, function () {
        var id, response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    id = '5fe0287346956c638f701bd2';
                    return [4 /*yield*/, request.put(baseUri + "/" + id)
                            .send({ username: 'user update with test',
                            email: "test@" + Math.random().toString(5) + ".com",
                            password: "password" })];
                case 1:
                    response = _a.sent();
                    expect(response.status).toBe(404);
                    expect(response.body.username).toBeUndefined();
                    return [2 /*return*/];
            }
        });
    }); });
});
// remove
describe('should remove a user', function () {
    it('should fail with 404 status', function () { return __awaiter(void 0, void 0, void 0, function () {
        var id, response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    id = '5fe0287346956c638f701bd2';
                    return [4 /*yield*/, request["delete"](baseUri + "/" + id)];
                case 1:
                    response = _a.sent();
                    expect(response.status).toBe(404);
                    expect(response.body.username).toBeUndefined();
                    return [2 /*return*/];
            }
        });
    }); });
});
