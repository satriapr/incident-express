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
const IncidentModel_1 = __importDefault(require("../models/IncidentModel"));
const Constant_1 = __importDefault(require("../constants/Constant"));
const UserModel_1 = __importDefault(require("../models/UserModel"));
// Query and business logic
class IncidentService {
    // Find active record
    findIncidents(status) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield IncidentModel_1.default.find(Object.assign({ active: 1 }, (status ? { status } : {})))
                .sort({ createdAt: -1 })
                .populate('assignee', 'fullName role', UserModel_1.default)
                .populate('reportedBy', 'fullName role', UserModel_1.default);
            return response;
        });
    }
    // Create new record
    saveIncident(title, description, priorityIndex, assignee, reportedBy) {
        return __awaiter(this, void 0, void 0, function* () {
            const newIncidentModel = new IncidentModel_1.default({
                title,
                description,
                status: Constant_1.default.STATUS.OPEN,
                priorityIndex,
                priorityLabel: Constant_1.default.PRIORITY_LABEL[priorityIndex],
                assignee,
                reportedBy,
                active: 1,
            });
            yield newIncidentModel.save();
        });
    }
    // Update incident status
    updateIncidentStatus(_id, status) {
        return __awaiter(this, void 0, void 0, function* () {
            yield IncidentModel_1.default.findByIdAndUpdate(_id, { status });
        });
    }
    // Soft delete
    removeIncident(_id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield IncidentModel_1.default.findByIdAndUpdate(_id, { active: 0 });
        });
    }
}
exports.default = IncidentService;
//# sourceMappingURL=IncidentService.js.map