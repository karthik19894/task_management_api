import { Schema, model } from "mongoose";

const CategorySchema: Schema = new Schema({
    name: Schema.Types.String,
    userId: Schema.Types.String,
})

export const Category = model('Category', CategorySchema);