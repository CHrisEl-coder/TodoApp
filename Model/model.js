import { Schema, model } from "mongoose";


export const todoSchema = new Schema({
    "todo": String,
    "date": String

}, {
    timestamps: true
})

export const Todo = model('Todo', todoSchema);

