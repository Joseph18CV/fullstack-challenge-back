"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.contactUpdateSchema = exports.contactSchemaRequest = exports.contactSchema = void 0;
const zod_1 = require("zod");
const contactSchema = zod_1.z.object({
    id: zod_1.z.number(),
    name: zod_1.z.string().max(127),
    email: zod_1.z.string().email().max(127),
    telephone: zod_1.z.string().max(13).min(13),
    createdAt: zod_1.z.string()
});
exports.contactSchema = contactSchema;
const contactSchemaRequest = contactSchema.omit({
    id: true,
    createdAt: true,
});
exports.contactSchemaRequest = contactSchemaRequest;
const contactUpdateSchema = contactSchemaRequest.partial();
exports.contactUpdateSchema = contactUpdateSchema;
