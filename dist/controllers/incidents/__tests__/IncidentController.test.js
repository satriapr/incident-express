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
require("jest");
const IncidentController_1 = __importDefault(require("../IncidentController"));
const constants_1 = __importDefault(require("../../../constants"));
describe('Incident Controller - getIncidents', () => {
    const mockData = [
        {
            title: 'test 1',
            description: 'description 1',
            status: 'stat 1',
            priority: 'prio 1',
            reportedBy: 222,
            assignee: 333,
            createdAt: '2021-01-01 00:00:00',
        },
    ];
    it('Should response list of incident', () => __awaiter(void 0, void 0, void 0, function* () {
        // Mock service with mock data
        const mockIncidentService = {
            getIncidents: jest.fn(() => __awaiter(void 0, void 0, void 0, function* () { return mockData; })),
        };
        const incidentController = new IncidentController_1.default(mockIncidentService);
        const mockRequest = {
            query: {},
        };
        const mockResponse = {
            json: jest.fn(),
        };
        yield incidentController.getIncidents(mockRequest, mockResponse);
        expect(mockResponse.json).toBeCalledWith({
            data: mockData,
            message: constants_1.default.OK.MESSAGE,
            statusCode: constants_1.default.OK.CODE,
        });
    }));
    it('Should response error', () => __awaiter(void 0, void 0, void 0, function* () {
        // Mock service with promise reject
        const mockIncidentService = {
            getIncidents: jest.fn(() => __awaiter(void 0, void 0, void 0, function* () { return Promise.reject(); })),
        };
        const incidentController = new IncidentController_1.default(mockIncidentService);
        const mockRequest = {
            query: {},
        };
        const mockResponse = {
            response: jest.fn(),
        };
        try {
            yield incidentController.getIncidents(mockRequest, mockResponse);
        }
        catch (error) {
            expect(error).toEqual(new Error('IncidentController.getIncidents'));
        }
    }));
});
//# sourceMappingURL=IncidentController.test.js.map