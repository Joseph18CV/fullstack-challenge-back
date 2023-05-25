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
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteClientController = exports.updateClientController = exports.listClientController = exports.createClientController = void 0;
const createClient_services_1 = require("../services/client/createClient.services");
const listClient_services_1 = require("../services/client/listClient.services");
const updateClient_services_1 = require("../services/client/updateClient.services");
const deleteClient_services_1 = require("../services/client/deleteClient.services");
const createClientController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const clientData = req.body;
    const newClient = yield (0, createClient_services_1.createClientServices)(clientData);
    return res.status(201).json(newClient);
});
exports.createClientController = createClientController;
const listClientController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const clientId = Number(req.params.id);
    const client = yield (0, listClient_services_1.listClientServices)(clientId);
    return res.status(201).json(client);
});
exports.listClientController = listClientController;
const updateClientController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const clientData = req.body;
    const clientId = Number(req.params.id);
    const updateClient = yield (0, updateClient_services_1.updateClientServices)(clientData, clientId);
    return res.status(201).json(updateClient);
});
exports.updateClientController = updateClientController;
const deleteClientController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, deleteClient_services_1.deleteClientServices)(parseInt(req.params.id));
    return res.status(204).send();
});
exports.deleteClientController = deleteClientController;
