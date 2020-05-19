import { Schema, SchemaOptions, model, } from "mongoose";

const schemaOptions: SchemaOptions = {
    timestamps: true
};
const UserSchema: Schema = new Schema({
    id: Schema.Types.ObjectId,
    name: Schema.Types.String

}, schemaOptions);

export default model('User', UserSchema);