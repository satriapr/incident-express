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
const UserController_1 = __importDefault(require("../UserController"));
const Constant_1 = __importDefault(require("../../constants/Constant"));
describe('UserController - getUsers', () => {
    const mockData = [
        {
            fullName: 'Admin 1',
            role: 'admin',
            email: 'admin@example.com',
            password: '',
            active: 1,
            createdAt: '2021-01-01 00:00:00',
            updatedAt: '2021-01-01 00:00:00',
            mobilePhone: '+6599999999',
        },
    ];
    it('Should response list of user', () => __awaiter(void 0, void 0, void 0, function* () {
        const mockUserService = {
            findUsers: jest.fn(() => __awaiter(void 0, void 0, void 0, function* () { return mockData; })),
        };
        const userController = new UserController_1.default(mockUserService);
        const mockRequest = {
            query: {},
        };
        const mockResponse = {
            json: jest.fn(),
        };
        yield userController.getUsers(mockRequest, mockResponse);
        expect(mockResponse.json).toBeCalledWith({
            data: mockData,
            message: Constant_1.default.OK.MESSAGE,
            statusCode: Constant_1.default.OK.CODE,
        });
    }));
    it('Should response error', () => __awaiter(void 0, void 0, void 0, function* () {
        // Mock service with promise reject
        const mockUserService = {
            findUsers: jest.fn(() => __awaiter(void 0, void 0, void 0, function* () { return Promise.reject(); })),
        };
        const userController = new UserController_1.default(mockUserService);
        const mockRequest = {
            query: {},
        };
        const mockResponse = {
            response: jest.fn(),
        };
        try {
            yield userController.getUsers(mockRequest, mockResponse);
        }
        catch (error) {
            expect(error).toEqual(new Error('UserController.getUsers'));
        }
    }));
});
//# sourceMappingURL=UserController.test.js.map