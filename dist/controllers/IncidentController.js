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
const Constant_1 = __importDefault(require("../constants/Constant"));
const response_1 = require("../utils/response");
// Controller handle request and response.
class IncidentController {
    constructor(incidentService) {
        this.incidentService = incidentService;
    }
    getIncidents(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { status } = req.query;
                const response = yield this.incidentService.findIncidents(status);
                res.json((0, response_1.responseSuccess)(Constant_1.default.OK.CODE, Constant_1.default.OK.MESSAGE, response));
                return;
            }
            catch (err) {
                throw new Error((0, lodash_1.get)(err, 'message', 'IncidentController.getIncidents'));
            }
        });
    }
    storeIncident(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { title, description, priorityIndex, assignee, reportedBy } = req.body;
                yield this.incidentService.saveIncident(title, description, priorityIndex, assignee, reportedBy);
                res.json((0, response_1.responseSuccess)(Constant_1.default.OK.CODE, Constant_1.default.OK.MESSAGE, {}));
                return;
            }
            catch (err) {
                throw new Error((0, lodash_1.get)(err, 'message', 'IncidentController.storeIncident'));
            }
        });
    }
    deleteIncident(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { _id } = req.params;
                yield this.incidentService.removeIncident(_id);
                res.json((0, response_1.responseSuccess)(Constant_1.default.NO_CONTENT.CODE, Constant_1.default.NO_CONTENT.MESSAGE, {}));
            }
            catch (err) {
                throw new Error((0, lodash_1.get)(err, 'message', 'IncidentController.deleteIncident'));
            }
        });
    }
    updateIncidentStatus(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { _id, newStatus } = req.body;
                yield this.incidentService.updateIncidentStatus(_id, newStatus);
                res.json((0, response_1.responseSuccess)(Constant_1.default.OK.CODE, Constant_1.default.OK.MESSAGE, {}));
                return;
            }
            catch (err) {
                throw new Error((0, lodash_1.get)(err, 'message', 'IncidentController.updateIncidentStatus'));
            }
        });
    }
}
exports.default = IncidentController;
//# sourceMappingURL=IncidentController.js.map