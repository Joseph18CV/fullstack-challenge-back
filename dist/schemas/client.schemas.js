"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.clientUpdateSchema = exports.clientSchemaResponse = exports.clientSchemaRequest = exports.clientSchema = void 0;
const zod_1 = require("zod");
const clientSchema = zod_1.z.object({
    id: zod_1.z.number(),
    name: zod_1.z.string().max(127),
    email: zod_1.z.string().email().max(127),
    password: zod_1.z.string().max(127),
    telephone: zod_1.z.string().max(13).min(13),
    createdAt: zod_1.z.string()
});
exports.clientSchema = clientSchema;
const clientSchemaRequest = clientSchema.omit({
    id: true,
    createdAt: true
});
exports.clientSchemaRequest = clientSchemaRequest;
const clientSchemaResponse = clientSchema.omit({
    password: true
});
exports.clientSchemaResponse = clientSchemaResponse;
const clientUpdateSchema = clientSchemaRequest.partial();
exports.clientUpdateSchema = clientUpdateSchema;
