import { Schema, model } from "mongoose";
const myTinerarySchema = Schema({
    // id: "1",
    name: { type: String, requeried: true },
    pais: { type: String, requeried: true },
    provincia: { type: String, requeried: true },
    urls: ["The_Canada_of_Cordoba.jpg"],
    descripción: { type: String }
},
    { timestamps: true });
    const MyTinerary = model('myTinerary.js', myTinerarySchema)
    export default MyTinerary;