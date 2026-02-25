"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorCode = void 0;
/**
 * Centralized error codes used across services
 */
var ErrorCode;
(function (ErrorCode) {
    // Generic
    ErrorCode["INTERNAL_ERROR"] = "INTERNAL_ERROR";
    ErrorCode["VALIDATION_ERROR"] = "VALIDATION_ERROR";
    ErrorCode["UNAUTHORIZED"] = "UNAUTHORIZED";
    ErrorCode["FORBIDDEN"] = "FORBIDDEN";
    ErrorCode["NOT_FOUND"] = "NOT_FOUND";
    // Auth
    ErrorCode["INVALID_CREDENTIALS"] = "INVALID_CREDENTIALS";
    ErrorCode["USER_ALREADY_EXISTS"] = "USER_ALREADY_EXISTS";
    ErrorCode["TOKEN_EXPIRED"] = "TOKEN_EXPIRED";
})(ErrorCode || (exports.ErrorCode = ErrorCode = {}));
