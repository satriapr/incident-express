"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
    fullName: String,
    role: String,
    email: String,
    password: String,
    active: Number,
}, { collection: 'user', timestamps: true });
exports.default = (0, mongoose_1.model)('User', userSchema);
//# sourceMappingURL=UserModel.js.map