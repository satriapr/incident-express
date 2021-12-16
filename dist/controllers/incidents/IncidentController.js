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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = require("lodash");
const constants_1 = __importDefault(require("../../constants"));
const response_1 = require("../../utils/response");
// Controller handle request and response.
class IncidentController {
    constructor(incidentService) {
        this.incidentService = incidentService;
    }
    getIncidents(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.incidentService.getIncidents();
                res.json((0, response_1.responseSuccess)(constants_1.default.OK.CODE, constants_1.default.OK.MESSAGE, response));
            }
            catch (err) {
                throw new Error((0, lodash_1.get)(err, 'message', 'IncidentController.getIncidents'));
            }
        });
    }
}
exports.default = IncidentController;
//# sourceMappingURL=IncidentController.js.map