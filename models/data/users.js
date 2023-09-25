import 'dotenv/config.js'
import { connect } from 'mongoose'
import User from '../User.js'

const users = [{
  name: "Nahuel",
  lastName: "Argandoña",
  mail: "nnahuell.gb@hotmail.com",
  photo: "https://pps.whatsapp.net/v/t61.24694-24/368010532_1025619035108122_1847167025504561721_n.jpg?ccb=11-4&oh=01_AdRkf31_uA5BBuiJvuaFeoY5usT5t2d6jekZ7wwqrXTX7A&oe=651BCB2F&_nc_sid=000000&_nc_cat=100",
  password: "012358aZ8@",
  country: "Argentina"
}]

connect(process.env.LINK_DB)
  .then(() => {
    User.insertMany(users)
    console.log('done!');
  })
  .catch(err => console.log(err))