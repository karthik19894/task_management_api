import { Schema, SchemaOptions, model, } from "mongoose";

const schemaOptions: SchemaOptions = {
    timestamps: true
};
const TaskSchema: Schema = new Schema({
    id: Schema.Types.ObjectId,
    name: Schema.Types.String,
    category: Schema.Types.String,
    labels: [Schema.Types.String],
    userId: Schema.Types.String,
    description: Schema.Types.String,
    createdTimeStamp: Schema.Types.Date,
    dueDate: Schema.Types.Date
}, schemaOptions);

export default model('Task', TaskSchema);