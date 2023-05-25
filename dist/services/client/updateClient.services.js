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
exports.updateClientServices = void 0;
const data_source_1 = require("../../data-source");
const client_entity_1 = require("../../entities/client.entity");
const client_schemas_1 = require("../../schemas/client.schemas");
const updateClientServices = (newClientData, clientId) => __awaiter(void 0, void 0, void 0, function* () {
    const clientRepository = data_source_1.AppDataSource.getRepository(client_entity_1.Client);
    const oldClientData = yield clientRepository.findOneBy({
        id: clientId
    });
    const client = clientRepository.create(Object.assign(Object.assign({}, oldClientData), newClientData));
    yield clientRepository.save(client);
    const updatedUser = client_schemas_1.clientUpdateSchema.parse(client);
    return updatedUser;
});
exports.updateClientServices = updateClientServices;
