"use strict";
exports.__esModule = true;
var class_validator_1 = require("class-validator");
var class_transformer_1 = require("class-transformer");
var exceptions_1 = require("../exceptions");
/**
 *
 * Valid the body of DTO
 * @category Middlewares
 * @param {*} dto - the dto to validate
 * @param {('body' | 'query' | 'params')} value - the prperty to get from the request
 * @param {boolean} [skipMissingProperties=false] - true if should accept propertys unknow
 * @return {*}  {RequestHandler}
 */
var validationMiddleware = function (dto, skipMissingProperties, // true when need update
value) {
    if (skipMissingProperties === void 0) { skipMissingProperties = false; }
    if (value === void 0) { value = 'body'; }
    return function (req, res, next) {
        // plainToClass is a mapping
        class_validator_1.validate(class_transformer_1.plainToClass(dto, req[value]), {
            validationError: { target: false },
            skipMissingProperties: skipMissingProperties,
            whitelist: true,
            forbidUnknownValues: true
        }).then(function (errors) {
            if (errors.length > 0) {
                var message = errors
                    .map(function (error) {
                    if (error.constraints) {
                        return Object.values(error.constraints);
                    }
                    ;
                    return error.property + ": validation error";
                })
                    .join(', ');
                next(new exceptions_1.HttpException(400, message));
            }
            else {
                next();
            }
        });
    };
};
exports["default"] = validationMiddleware;
