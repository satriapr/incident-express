"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const incidentSchema = new mongoose_1.Schema({
    title: String,
    description: String,
    status: String,
    priorityIndex: Number,
    priorityLabel: String,
    assignee: { type: mongoose_1.Schema.Types.ObjectId, ref: 'User' },
    reportedBy: { type: mongoose_1.Schema.Types.ObjectId, ref: 'User' },
    active: Number,
}, { collection: 'incident', timestamps: true });
exports.default = (0, mongoose_1.model)('Incident', incidentSchema);
//# sourceMappingURL=IncidentModel.js.map