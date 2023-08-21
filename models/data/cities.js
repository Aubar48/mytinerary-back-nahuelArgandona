import 'dotenv/config.js'
import { connect } from 'mongoose'
import City from '../City.js'
import User from '../User.js'

const cities = [
    {
        country: "Argentina",
        province: "Córdoba Capital",
        name: "The Cañada of Córdoba",
        photo: "https://upload.wikimedia.org/wikipedia/commons/d/d9/La_Ca%C3%B1ada_de_C%C3%B3rdoba_2010-08-23_01.jpg",
        description: "Cañada Córdoba is the partial channeling of the La Cañada stream that crosses the city of Córdoba, Argentina, from southwest to north.",
        admin_id: 'nnahuell.gb@hotmail.com'
    },
    {
        country: "Argentina",
        province: "Córdoba Capital",
        name: "The Cañada of Córdoba",
        photo: "https://e8s3v3w7.rocketcdn.me/wp-content/uploads/2017/11/argentinien-cordoba-die-markante-iglesia-del-sagrado-corazon-gilt-mit-ihrem-aussergewocc88hnlichen-dekor-als-bunteste-kirche-von-cordoba-argentinien-aiko3p-shutterstock.jpg",
        description: "Visit the Sacred Heart Church in Cordoba, an architectural masterpiece by the Capuchin Fathers. Experience a blend of spiritual serenity and captivating design.",
        admin_id: 'nnahuell.gb@hotmail.com'
    },
];

async function insertCities(arrayCities) {
    try {
        await connect(process.env.DATABASE_URL);

        for (let city of arrayCities) {
            let user = await User.findOne({ mail: city.admin_id })
            let admin_id = await user._id
            city.admin_id = admin_id
            await City.create(city)
        }

        console.log('Hecho city up');
    } catch (error) {
        console.error(error);
    }
}

insertCities(cities);