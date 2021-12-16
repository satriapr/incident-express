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
const IncidentModel_1 = __importDefault(require("../../models/IncidentModel"));
const IncidentService_1 = __importDefault(require("../../services/IncidentService"));
jest.mock('../../models/IncidentModel', () => ({
    save: jest.fn()
}));
describe('saveIncident', () => {
    test('saveIncident should be call 1 time', () => __awaiter(void 0, void 0, void 0, function* () {
        // const mockIncidentModel = {
        //   save: jest.fn().mockResolvedValue({
        //     id: '61b5b832643f28575d569eb3',
        //   }),
        // }
        const mockIncidentModel = new IncidentModel_1.default();
        const incidentService = new IncidentService_1.default();
        // incidentModel.title = 'test 1'
        // incidentModel.description = 'description 1'
        // incidentModel.priorityIndex = 1
        // incidentModel.assignee = { _id: '61b5b832643f28575d569eb3' }
        // incidentModel.reportedBy = { _id: '61b5b832643f28575d569eb3' }
        // await incidentService.saveIncident(incidentModel)
        yield incidentService.saveIncident('test 1', 'description 1', 1, { _id: '61b5b832643f28575d569eb3' }, { _id: '61b5b832643f28575d569ec3' });
        expect(mockIncidentModel.save).toBeCalledTimes(1);
    }));
});
//# sourceMappingURL=IncidentService.test.js.map