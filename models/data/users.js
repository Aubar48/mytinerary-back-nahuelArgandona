import 'dotenv/config.js'
import { connect } from 'mongoose'
import User from '../User.js'

async function insertUsers() {
  try {
    await connect(process.env.DATABASE_URL);
    const users = [
      {
        name: "Nahuel",
        lastName: "Argandoña",
        mail: "nnahuell.gb@hotmail.com",
        photo: "https://i.ibb.co/x634Wnh/05f13b18-8378-48ea-8b36-1809b87a2a53.png",
        password: "012358aZ8@",
        country: "Argentina"
      },
    ];

    await User.insertMany(users);
    console.log('Hecho user up');
  } catch (error) {
    console.error(error);
  }
}

insertUsers();