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
exports.ensureEmailAndTelephoneExistsMiddlewaresContact = void 0;
const data_source_1 = require("../data-source");
const contacts_entity_1 = require("../entities/contacts.entity");
const error_1 = require("../error");
const ensureEmailAndTelephoneExistsMiddlewaresContact = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const contactRepository = data_source_1.AppDataSource.getRepository(contacts_entity_1.Contact);
    if (!req.body.email && !req.body.telephone) {
        return next();
    }
    const findEmail = yield contactRepository.findBy({
        email: req.body.email
    });
    const findTelephone = yield contactRepository.findBy({
        telephone: req.body.telephone
    });
    if (findEmail.length > 0 || findTelephone.length > 0) {
        throw new error_1.AppError("Email and Telephone exists", 409);
    }
    return next();
});
exports.ensureEmailAndTelephoneExistsMiddlewaresContact = ensureEmailAndTelephoneExistsMiddlewaresContact;