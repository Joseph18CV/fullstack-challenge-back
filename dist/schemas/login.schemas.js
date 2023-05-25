"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginSchema = void 0;
const zod_1 = require("zod");
const loginSchema = zod_1.z.object({
    email: zod_1.z.string().email().max(127),
    password: zod_1.z.string().max(127)
});
exports.loginSchema = loginSchema;
