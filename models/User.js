import { model, Schema } from "mongoose";

let collection = 'users'
let schema = new Schema({
    name: { type: String, required: true },
    lastName: { type: String, required: true },
    mail: { type: String, required: true, unique: true },
    photo: { type: String, required: true },
    password: { type: String, required: true },
    country: { type: String, required: true }
},{
    timestamps:true
}
)

let User = model(collection, schema)
export default User