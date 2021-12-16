"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const IncidentController_1 = __importDefault(require("../controllers/IncidentController"));
const IncidentService_1 = __importDefault(require("../services/IncidentService"));
const UserController_1 = __importDefault(require("../controllers/UserController"));
const UserService_1 = __importDefault(require("../services/UserService"));
const routes = (0, express_1.Router)();
// incident route
const incidentController = new IncidentController_1.default(new IncidentService_1.default());
routes.get(`/incidents`, (req, res) => incidentController.getIncidents(req, res));
routes.post(`/incident`, (req, res) => incidentController.storeIncident(req, res));
routes.put(`/incident-status`, (req, res) => incidentController.updateIncidentStatus(req, res));
routes.delete(`/incident/:_id`, (req, res) => incidentController.deleteIncident(req, res));
// user route
const userController = new UserController_1.default(new UserService_1.default());
routes.get(`/users`, (req, res) => userController.getUsers(req, res));
exports.default = routes;
//# sourceMappingURL=index.js.map