import { Schema, model, Types } from "mongoose";

const collection = 'likes'
const schema = new Schema({
    user_id: { type: Types.ObjectId, ref: 'users', required: true },
    itinerary_id: { type: Types.ObjectId, ref: 'itineraries', required: true }
})

const Like = model(collection, schema)
export default Like