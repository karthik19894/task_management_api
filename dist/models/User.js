"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const schemaOptions = {
    timestamps: true
};
const UserSchema = new mongoose_1.Schema({
    id: mongoose_1.Schema.Types.ObjectId,
    name: mongoose_1.Schema.Types.String
}, schemaOptions);
exports.default = mongoose_1.model('User', UserSchema);
//# sourceMappingURL=User.js.map