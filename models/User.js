import { Schema, model } from "mongoose";
const collection = 'users'
const schema = new Schema({
    name: { type: String, required: true },
    lastName: { type: String, required: true },
    mail: { type: String, required: true, unique: true },
    photo: { type: String, default: "https://definicion.de/wp-content/uploads/2019/07/perfil-de-usuario.png" },
    password: { type: String, required: true },
    country: { type: String, required: true },
})

const User = model(collection, schema)
export default User