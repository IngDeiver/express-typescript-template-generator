"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
/**
 *
 *
 * Is a custom exception for implmented with the error handler
 * @category Exceptions
 * @class HttpException
 *  @param {number} status - THe status of error
 *  @param {string} message -The message of error
 * @extends {Error}
 */
var HttpException = /** @class */ (function (_super) {
    __extends(HttpException, _super);
    /**
     * Creates an instance of HttpException.
     * @param {number} status - The status of error
     * @param {string} message - he message  of error
     * @memberof HttpException
     */
    function HttpException(status, message) {
        var _this = _super.call(this, message) || this;
        _this.status = status;
        _this.message = message;
        return _this;
    }
    return HttpException;
}(Error));
exports["default"] = HttpException;
