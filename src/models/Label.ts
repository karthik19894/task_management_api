import { Schema, model } from "mongoose";

const LabelSchema: Schema = new Schema({
    id: Schema.Types.ObjectId,
    name: Schema.Types.String
})

export const Label =  model('Label', LabelSchema)