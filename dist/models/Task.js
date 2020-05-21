"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const schemaOptions = {
    timestamps: true
};
const TaskSchema = new mongoose_1.Schema({
    id: mongoose_1.Schema.Types.ObjectId,
    name: mongoose_1.Schema.Types.String,
    category: mongoose_1.Schema.Types.String,
    labels: mongoose_1.Schema.Types.Array,
    userId: mongoose_1.Schema.Types.Number,
    description: mongoose_1.Schema.Types.String,
    createdTimeStamp: mongoose_1.Schema.Types.Date
}, schemaOptions);
exports.default = mongoose_1.model('Task', TaskSchema);
//# sourceMappingURL=Task.js.map