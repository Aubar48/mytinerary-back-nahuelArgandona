import { model, Schema } from "mongoose";

let collection = 'users'
let schema = new Schema({
    name: { type: String, default: "Name" },
    lastName: { type: String, default: "Last Name" },
    mail: { type: String, required: true, unique: true },
    photo: { type: String, default: "https://cdn-icons-png.flaticon.com/512/3607/3607444.png" },
    password: { type: String, required: true },
    country: { type: String, required: true }
},{
    timestamps:true
}
)

let User = model(collection, schema)
export default User