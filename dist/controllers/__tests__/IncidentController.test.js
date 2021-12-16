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
const IncidentController_1 = __importDefault(require("../IncidentController"));
const Constant_1 = __importDefault(require("../../constants/Constant"));
describe('Incident Controller - getIncidents', () => {
    const mockData = [
        {
            title: 'test 1',
            description: 'description 1',
            status: 'stat 1',
            priorityIndex: 1,
            assignee: { _id: '61b5b832643f28575d569eb3' },
            reportedBy: { _id: '61b5b832643f28575d569ec3' },
            createdAt: '2021-01-01 00:00:00',
            updatedAt: '2021-01-01 00:00:00',
        },
    ];
    it('Should response list of incident', () => __awaiter(void 0, void 0, void 0, function* () {
        // Mock service with mock data
        const mockIncidentService = {
            findIncidents: jest.fn(() => __awaiter(void 0, void 0, void 0, function* () { return mockData; })),
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
            message: Constant_1.default.OK.MESSAGE,
            statusCode: Constant_1.default.OK.CODE,
        });
    }));
    it('Should response error', () => __awaiter(void 0, void 0, void 0, function* () {
        // Mock service with promise reject
        const mockIncidentService = {
            findIncidents: jest.fn(() => __awaiter(void 0, void 0, void 0, function* () { return Promise.reject(); })),
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
describe('Incident Controller - storeIncident', () => {
    it('Should storeIncident with success', () => __awaiter(void 0, void 0, void 0, function* () {
        // Mock service with mock data
        const mockIncidentService = {
            saveIncident: jest.fn(),
        };
        const incidentController = new IncidentController_1.default(mockIncidentService);
        const mockRequest = {
            body: {
                title: 'test 1',
                description: 'description 1',
                status: 'stat 1',
                priorityIndex: 1,
                assignee: { _id: '61b5b832643f28575d569eb3' },
                reportedBy: { _id: '61b5b832643f28575d569ec3' },
                createdAt: '2021-01-01 00:00:00',
                updatedAt: '2021-01-01 00:00:00',
            },
        };
        const mockResponse = {
            json: jest.fn(),
        };
        yield incidentController.storeIncident(mockRequest, mockResponse);
        expect(mockResponse.json).toBeCalledWith({
            data: {},
            message: Constant_1.default.OK.MESSAGE,
            statusCode: Constant_1.default.OK.CODE,
        });
    }));
    it('Should response error', () => __awaiter(void 0, void 0, void 0, function* () {
        // Mock service with promise reject
        const mockIncidentService = {
            saveIncident: jest.fn(() => __awaiter(void 0, void 0, void 0, function* () { return Promise.reject(); })),
        };
        const incidentController = new IncidentController_1.default(mockIncidentService);
        const mockRequest = {
            body: {
                title: 'test 1',
                description: 'description 1',
                status: 'stat 1',
                priorityIndex: 1,
                assignee: { _id: '61b5b832643f28575d569eb3' },
                reportedBy: { _id: '61b5b832643f28575d569ec3' },
                createdAt: '2021-01-01 00:00:00',
                updatedAt: '2021-01-01 00:00:00',
            },
        };
        const mockResponse = {
            response: jest.fn(),
        };
        try {
            yield incidentController.storeIncident(mockRequest, mockResponse);
        }
        catch (error) {
            expect(error).toEqual(new Error('IncidentController.storeIncident'));
        }
    }));
});
describe('Incident Controller - deleteIncident', () => {
    it('Should deleteIncident with success', () => __awaiter(void 0, void 0, void 0, function* () {
        // Mock service with mock data
        const mockIncidentService = {
            removeIncident: jest.fn(),
        };
        const incidentController = new IncidentController_1.default(mockIncidentService);
        const mockRequest = {
            params: {
                _id: '61b5b832643f28575d569eb3',
            },
        };
        const mockResponse = {
            json: jest.fn(),
        };
        yield incidentController.deleteIncident(mockRequest, mockResponse);
        expect(mockResponse.json).toBeCalledWith({
            data: {},
            message: Constant_1.default.NO_CONTENT.MESSAGE,
            statusCode: Constant_1.default.NO_CONTENT.CODE,
        });
    }));
    it('Should response error', () => __awaiter(void 0, void 0, void 0, function* () {
        // Mock service with promise reject
        const mockIncidentService = {
            removeIncident: jest.fn(() => __awaiter(void 0, void 0, void 0, function* () { return Promise.reject(); })),
        };
        const incidentController = new IncidentController_1.default(mockIncidentService);
        const mockRequest = {
            params: {
                _id: '61b5b832643f28575d569eb3',
            },
        };
        const mockResponse = {
            response: jest.fn(),
        };
        try {
            yield incidentController.deleteIncident(mockRequest, mockResponse);
        }
        catch (error) {
            expect(error).toEqual(new Error('IncidentController.deleteIncident'));
        }
    }));
});
describe('Incident Controller - updateIncidentStatus', () => {
    it('Should updateIncidentStatus with success', () => __awaiter(void 0, void 0, void 0, function* () {
        // Mock service with mock data
        const mockIncidentService = {
            updateIncidentStatus: jest.fn(),
        };
        const incidentController = new IncidentController_1.default(mockIncidentService);
        const mockRequest = {
            body: {
                _id: '61b5b832643f28575d569eb3',
                newStatus: 'In Progress',
            },
        };
        const mockResponse = {
            json: jest.fn(),
        };
        yield incidentController.updateIncidentStatus(mockRequest, mockResponse);
        expect(mockResponse.json).toBeCalledWith({
            data: {},
            message: Constant_1.default.OK.MESSAGE,
            statusCode: Constant_1.default.OK.CODE,
        });
    }));
    it('Should response error', () => __awaiter(void 0, void 0, void 0, function* () {
        // Mock service with promise reject
        const mockIncidentService = {
            updateIncidentStatus: jest.fn(() => __awaiter(void 0, void 0, void 0, function* () { return Promise.reject(); })),
        };
        const incidentController = new IncidentController_1.default(mockIncidentService);
        const mockRequest = {
            body: {
                _id: '61b5b832643f28575d569eb3',
                newStatus: 'In Progress',
            },
        };
        const mockResponse = {
            response: jest.fn(),
        };
        try {
            yield incidentController.updateIncidentStatus(mockRequest, mockResponse);
        }
        catch (error) {
            expect(error).toEqual(new Error('IncidentController.updateIncidentStatus'));
        }
    }));
});
//# sourceMappingURL=IncidentController.test.js.map