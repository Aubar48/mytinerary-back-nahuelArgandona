import { Schema, model, Types } from "mongoose";
const collection = 'cities'
const schema = new Schema({
    country: { type: String, required: true },
    province: { type: String, required: true },
    name: { type: String, required: true },
    photo: { type: String, default: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Map_of_country_subdivisions_%28provinces%29.svg/350px-Map_of_country_subdivisions_%28provinces%29.svg.png" },
    description: { type: String, default: 'edit later' },
    admin_id: { type: Types.ObjectId, required: true, ref: 'users' }
})

const City = model(collection, schema)
export default City