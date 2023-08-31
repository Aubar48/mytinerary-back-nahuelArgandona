import { model, Schema, Types } from "mongoose";

let collection = "itineraries"
let schema = new Schema({
    name: { type: String, required: true },
    city_id: { type: Types.ObjectId, required: true, ref: 'cities' },
    price: { type: Number, min: 1, max: 5 },
    duration: { type: Number },
    tags: { type: [String], required: true },
    like: { type: Number, min: 0, max: 1 },
    profilePicture: { type: String },
    profileName: { type: String },
    comment: { type: String },
    photo: { type: String, required: true }
})


let Itinerary = model(collection, schema)
export default Itinerary