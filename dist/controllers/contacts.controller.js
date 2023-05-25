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
exports.deleteContactController = exports.updateContactController = exports.listContactsController = exports.createContactController = void 0;
const createContact_services_1 = require("../services/contacts/createContact.services");
const listContact_services_1 = require("../services/contacts/listContact.services");
const updateContact_services_1 = require("../services/contacts/updateContact.services");
const deleteContact_services_1 = require("../services/contacts/deleteContact.services");
const createContactController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const contactData = req.body;
    const clientId = Number(req.user.id);
    const newContact = yield (0, createContact_services_1.createContactServices)(contactData, clientId);
    return res.status(201).json(newContact);
});
exports.createContactController = createContactController;
const listContactsController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const contacts = yield (0, listContact_services_1.listContactsServices)();
    return res.json(contacts);
});
exports.listContactsController = listContactsController;
const updateContactController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const contactData = req.body;
    const contactId = Number(req.params.id);
    const updateContact = yield (0, updateContact_services_1.updateContactServices)(contactData, contactId);
    return res.status(201).json(updateContact);
});
exports.updateContactController = updateContactController;
const deleteContactController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, deleteContact_services_1.deleteContactServices)(parseInt(req.params.id));
    return res.status(204).send();
});
exports.deleteContactController = deleteContactController;
