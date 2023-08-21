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
        name: "Sacred Heart Church (of the Capuchin Fathers).",
        photo: "https://e8s3v3w7.rocketcdn.me/wp-content/uploads/2017/11/argentinien-cordoba-die-markante-iglesia-del-sagrado-corazon-gilt-mit-ihrem-aussergewocc88hnlichen-dekor-als-bunteste-kirche-von-cordoba-argentinien-aiko3p-shutterstock.jpg",
        description: "Visit the Sacred Heart Church in Cordoba, an architectural masterpiece by the Capuchin Fathers. Experience a blend of spiritual serenity and captivating design.",
        admin_id: 'nnahuell.gb@hotmail.com'
    },
    {
        country: "Argentina",
        province: "Córdoba Capital",
        name: "Sarmiento Park Stairs Viewpoint.",
        photo: "https://pickvisa.com/storage/public/articles/sarmiento-park-stairs-viewpoint.jpg",
        description: "Experience Cordoba's charm from a new perspective at the Sarmiento Park Stairs Viewpoint. Climb the stairs and relish panoramic city vistas that beautifully blend urban life with natural splendor.",
        admin_id: 'nnahuell.gb@hotmail.com'
    },
    {
        country: "Argentina",
        province: "Córdoba Capital",
        name: "The Biodiversity Park.",
        photo: "https://sanluis24.com.ar/wp-content/uploads/2023/05/ca-min.png",
        description: "The Biodiversity Park in Cordoba Capital is a vibrant sanctuary, showcasing the rich ecological diversity of the region.",
        admin_id: 'nnahuell.gb@hotmail.com'
    },
    {
        country: "Argentina",
        province: "Córdoba Capital",
        name: "Super Park.",
        photo: "https://telefe-static2.akamaized.net/media/445011/whatsapp-image-2022-07-12-at-32423-pm.jpeg?v=20220712155134000&format=extraLarge&width=929&height=523&mode=crop",
        description: "Welcome to Super Park, the only amusement park in Córdoba capital, with more than 40 years offering fun to Cordovan families.",
        admin_id: 'nnahuell.gb@hotmail.com'
    },
    {
        country: "Argentina",
        province: "Córdoba Capital",
        name: "Sarmiento Park - Duck Island.",
        photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Parque_Sarmiento_-_Isla_de_los_patos.jpg/800px-Parque_Sarmiento_-_Isla_de_los_patos.jpg",
        description: "Duck Island, located in Córdoba's Sarmiento Park, is a serene haven for waterfowl and a lovely spot for wildlife viewing.",
        admin_id: 'nnahuell.gb@hotmail.com'
    },
    {
        country: "Argentina",
        province: "Córdoba Capital",
        name: "Superior Museum of Fine Arts Ferreyra Palace.",
        photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Fachadapalacioferreyra.JPG/1280px-Fachadapalacioferreyra.JPG",
        description: "The superior Museum of Fine Arts in Palacio Ferreyra is a captivating cultural institution in Cordoba, Argentina. Housed in a magnificent palace, it features an exquisite collection of fine art, making it a must-see for art aficionados.",
        admin_id: 'nnahuell.gb@hotmail.com'
    },
    {
        country: "Argentina",
        province: "Córdoba Capital",
        name: "Provincial Museum of Fine Arts Emilio Caraffa.",
        photo: "https://www.museocaraffa.org.ar/images/slide1.jpg",
        description: "The Provincial Museum of Fine Arts Emilio Caraffa (M.E.C.) is a prominent art museum in Cordoba, Argentina. It boasts a diverse and impressive collection of fine art, making it a cultural treasure and a must-visit destination for art lovers.",
        admin_id: 'nnahuell.gb@hotmail.com'
    },
    {
        country: "Argentina",
        province: "Córdoba Capital",
        name: "The urban man Córdoba.",
        photo: "https://i.pinimg.com/736x/ce/c9/40/cec940e59f71514e86079ed38f305d00.jpg",
        description: "At the end of the 1990s, in the management of then mayor Rubén Américo Martí, Antonio Seguí offered the city the first of these works: Urban Man, the enormous painted steel sculpture, which is located in the Nudo Vial Miter.",
        admin_id: 'nnahuell.gb@hotmail.com'
    },
    {
        country: "Argentina",
        province: "Córdoba Capital",
        name: "The the urban woman Córdoba.",
        photo: "https://www.lavoz.com.ar/resizer/ksq3RXfjHx_YO-mCUGQftVbSoCI=/1023x682/smart/cloudfront-us-east-1.images.arcpublishing.com/grupoclarin/R4XXLOCQBVHAPF2UAAYHLZ34MQ.jpeg",
        description: "The urban woman, located at Nudo Vial 14, a work that in turn was also intervened by other artists on several occasions.",
        admin_id: 'nnahuell.gb@hotmail.com'
    },
    {
        country: "Argentina",
        province: "Córdoba Capital",
        name: "The urban children Córdoba.",
        photo: "https://www.lavoz.com.ar/resizer/5vgAAoHTN3WTYISX7CkaYHNV-1I=/1023x682/smart/cloudfront-us-east-1.images.arcpublishing.com/grupoclarin/MAMTSXWNXJGYZDDRSKBVFKHRDE.jpeg",
        description: "The urban children, who are in Parque del Aeropuerto.",
        admin_id: 'nnahuell.gb@hotmail.com'
    },
    {
        country: "Argentina",
        province: "Córdoba Capital",
        name: "Walk of the Good Shepherd.",
        photo: "https://www.clarin.com/img/2016/09/21/el-paseo-del-buen-pastor___BJfuq0ntNe_720x0.jpg",
        description: "Walk of the Good Shepherd, in the city of Córdoba, was first a prison and then a clandestine center of repression. But it was reconverted in 2007 and these days it has just relaunched its art room with international parameters.",
        admin_id: 'nnahuell.gb@hotmail.com'
    },
    {
        country: "Argentina",
        province: "Córdoba Capital",
        name: "Square San Martin.",
        photo: "https://a.travel-assets.com/findyours-php/viewfinder/images/res70/128000/128760-Plaza-San-Martin.jpg",
        description: "The square San Martín is a green space located in the center of Córdoba, Argentina, the historic center and current microcenter.",
        admin_id: 'nnahuell.gb@hotmail.com'
    },
    {
        country: "Argentina",
        province: "Córdoba Capital",
        name: "Historical Museum UNC Jesuit Block.",
        photo: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/91/46/4e/manzana-jesuitica-jesuit.jpg?w=1200&h=-1&s=1",
        description: "The Historical Museum of the National University of Córdoba is located in the Old Rectorate, within the Jesuit Block (World Heritage - UNESCO).",
        admin_id: 'nnahuell.gb@hotmail.com'
    },
    {
        country: "Argentina",
        province: "Patio Olmos Shopping",
        name: "The Biodiversity Park in Cordoba Capital.",
        photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Patio_Olmos_2011-12-22.jpg/1200px-Patio_Olmos_2011-12-22.jpg",
        description: "Patio Olmos Shopping is a bustling retail and entertainment hub located in the heart of Cordoba, Argentina. This multi-level shopping complex offers a wide range of stores, dining options, and entertainment facilities, making it a vibrant destination for both locals and tourists.",
        admin_id: 'nnahuell.gb@hotmail.com'
    },
    {
        country: "Argentina",
        province: "Córdoba Capital",
        name: "The Gran Rex Cinema.",
        photo: "https://canalc.com.ar/wp-content/uploads/2020/12/gran-rex.jpg",
        description: "The Gran Rex Cinema, located in the heart of Buenos Aires, is an iconic movie theater known for its grandeur and historical significance. With its stunning Art Deco architecture and state-of-the-art facilities, it provides a captivating cinematic experience that transports visitors to a bygone era of elegance and film magic.",
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