"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginRouters = void 0;
const express_1 = require("express");
const login_controllers_1 = require("../controllers/login.controllers");
const ensureDataIsValid_middlewares_1 = require("../middlewares/ensureDataIsValid.middlewares");
const login_schemas_1 = require("../schemas/login.schemas");
const loginRouters = (0, express_1.Router)();
exports.loginRouters = loginRouters;
loginRouters.post("", (0, ensureDataIsValid_middlewares_1.ensureDataIsValidMiddleware)(login_schemas_1.loginSchema), login_controllers_1.createLoginController);