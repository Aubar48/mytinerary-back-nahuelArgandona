import { Schema, model } from "mongoose";
const myTinerarySchema = Schema({
    // id: "1",
    name: { type: String, requeried: true },
    pais: { type: String, requeried: true },
    provincia: { type: String, requeried: true },
    urls: { type: String, requeried: true },
    descripción: { type: String }
},
    { timestamps: true });
    const MyTinerary = model('myTinerary.js', myTinerarySchema)
    export default MyTinerary;