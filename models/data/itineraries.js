import 'dotenv/config.js'
import { connect } from 'mongoose'
import Itinerary from '../Itinerary.js'
import City from '../City.js'

const itineraries = [{
    name: 'Angkor Wats Temple Complex',
    city_id: 'Siem Reap',
    price: 200,
    duration: 120,
    tags: ['#siemreap', '#adventure', '#budism'],
    photo: 'https://www.mundo-nomada.com/wp-content/uploads/2020/03/Templos-de-Angkor-Wat-e1590459718747-1200x900.jpg'
}, {
    name: 'Temple of Water',
    city_id: 'Bali',
    price: 20,
    duration: 60,
    tags: ['#nature', '#temple', '#peace'],
    photo: 'https://images-ext-1.discordapp.net/external/hJTN2F_gs1ELLRWELD4hp6JH5HDQN8__NIhq_dQuAEg/https/theworldtravelguy.com/wp-content/uploads/2019/03/DSCF4529_1200.jpg?width=1014&height=676'
}, {
    name: 'Mount Fuji',
    city_id: 'Honshu Island',
    price: 200,
    duration: 480,
    tags: ['#culture', '#snow', '#hikkinglove'],
    photo: 'https://www.meteorologiaenred.com/wp-content/uploads/2020/04/Vistas-del-monte.jpg'
}, {
    name: 'Matira beach',
    city_id: 'Bora Bora Island',
    price: 100,
    duration: 300,
    tags: ['#beach', '#adventure', '#sun'],
    photo: 'https://images-ext-2.discordapp.net/external/5JogXXNw2iYuKd0LqSkDidZ7UnJlGJEWDivz6zgb4_Q/https/media.kiwi.com/wp-content/uploads/2021/06/veligandu-island-beach-of-the-maldives-795x360.jpg'
}, {
    name: 'Mount Otemanu',
    city_id: 'Bora Bora Island',
    price: 120,
    duration: 240,
    tags: ['#beach', '#adventure', '#treking'],
    photo: 'https://images-ext-1.discordapp.net/external/ENkeAeE0mgvgdWCKzVzYC2NQh-yhcC2FnBNkEqlzMpA/https/www.gototravelguides.net/images/photos/borabora_P1000780.jpg?width=901&height=676'
}, {
    name: 'National Park Roraima',
    city_id: 'Bolívar',
    price: 200,
    duration: 480,
    tags: ['#', '#', '#'],
    photo: 'https://dam.ngenespanol.com/wp-content/uploads/2021/04/GettyImages-139812035.jpg'
}, {
    name: 'Angel Falls',
    city_id: 'Bolívar',
    price: 200,
    duration: 120,
    tags: ['#', '#', '#'],
    photo: 'http://t2.gstatic.com/licensed-image?q=tbn:ANd9GcSybaIKh9qn2LWwkRlWHc694clhB4kB7t-VxxbLMQd14usIcjB3XzKwQnz7huOfgXz1'
}, {
    name: 'Honshu Tour',
    city_id: 'Honshu Island',
    price: 20,
    duration: 160,
    tags: ['#interesting', '#culture', '#croud'],
    photo: 'https://s3-ap-northeast-1.amazonaws.com/bhive-jp/media/yabai/article/2699/43.jpg'
}, {
    name: 'Tsunami Monument',
    city_id: 'Maldives Islands',
    price: 10,
    duration: 60,
    tags: ['#nature', '#beach', '#peace'],
    photo: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/af/19/85/tsunami-monument.jpg?w=1200&h=-1&s=1'
}, {
    name: 'Through the Fields',
    city_id: 'Bali',
    price: 20,
    duration: 160,
    tags: ['#nature', '#peace'],
    photo: 'https://d18sx48tl6nre5.cloudfront.net/webp_md_28ddbaa5efa991d343efc7c1d602432d.webp'
}, {
    name: 'Veligandu Island Beach',
    city_id: 'Maldives Islands',
    price: 20,
    duration: 160,
    tags: ['#nature', '#beach', '#peace'],
    photo: 'https://i.im.ge/2022/09/06/OZ78aa.veligandu-island-beach-of-the-maldives-795x360.jpg'
}, {
    name: 'Ubud',
    city_id: 'Bali',
    price: 20,
    duration: 160,
    tags: ['#nature', '#beach', '#peace'],
    photo: 'https://gadsventure.com/wp-content/uploads/2019/12/Webp.net-resizeimage-2019-12-18T144431.703-800x600.jpg'
}, {
    name: 'Traditional',
    city_id: 'Zambia',
    price: 20,
    duration: 160,
    tags: ['#tradition', '#dance', '#happyness'],
    photo: 'https://gpjs3bucket.s3.amazonaws.com/wp-content/uploads/2018/08/26141032/GPJNew_Zambia_PP_Crowds-1_Web.jpg'
}, {
    name: 'Adventure Time',
    city_id: 'Zambia',
    price: 20,
    duration: 160,
    tags: ['#nature', '#adrenaline', '#power'],
    photo: 'https://www.southluangwasafaris.com/wp-content/uploads/2018/04/livadv_2013-03-207.x89638.jpg'
}, {
    name: 'Fauna and Flora',
    city_id: 'Zambia',
    price: 20,
    duration: 160,
    tags: ['#nature', '#animals', '#peace'],
    photo: 'https://www.enkosiafrica.com/wp-content/uploads/2018/01/enkosi-africa-safari-zambia-lower-zambezi-sausage-tree-camp-.jpg'
}, {
    name: 'Water, Sand and Air',
    city_id: 'Cairo Citadel',
    price: 20,
    duration: 160,
    tags: ['#nature', '#adventure', '#amazing'],
    photo: 'https://images.memphistours.com/large/495962174_Cairo%20City%20Tour.jpg'
}, {
    name: 'City Food Tour',
    city_id: 'Cairo Citadel',
    price: 20,
    duration: 160,
    tags: ['#yummy!', '#restaurant', '#delicious'],
    photo: 'https://c.myholidays.com/blog/blog/content/images/2021/12/Citadel-View-Restaurant-Savoring-French-Cuisines-min.jpg'
}, {
    name: 'Citadel Tour',
    city_id: 'Cairo Citadel',
    price: 20,
    duration: 160,
    tags: ['#culture', '#peace'],
    photo: 'https://i.im.ge/2022/08/31/OERMl1.salahCitadelCairoCity.png'
}]

async function createItineraries(arrayItineraries) {
    try {
        await connect(process.env.LINK_DB);
        for (let itinerary of arrayItineraries) {
            let city = await City.findOne({ city: itinerary.city_id });
            if (city) {
                itinerary.city_id = city._id;
                await Itinerary.create(itinerary);
            } else {
                console.log(`La ciudad '${itinerary.city_id}' no se encontró en la base de datos.`);
            }
        }
        console.log('¡Hecho!');
    } catch (error) {
        console.log(error);
    }
}

createItineraries(itineraries);
