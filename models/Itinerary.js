import { model, Schema, Types } from "mongoose";

let collection = "itineraries"
let schema = new Schema({
    name: { type: String, required: true },
    city_id: { type: Types.ObjectId, required: true, ref: 'cities' },
    price: { type: Number },
    duration: { type: Number },
    tags: { type: [String], required: true },
    photo: { type: String, required: true }
})


let Itinerary = model(collection, schema)
export default Itinerary