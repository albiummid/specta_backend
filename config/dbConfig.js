require('dotenv').config();
const MongoClient = require('mongodb').MongoClient;
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.gpn2l.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true })

let dbConnection;

async function connectToServer(callback = () => { }) {
    client.connect(function (err, db) {
        if (err || !db) {
            console.log("NO_DB", err)
            return callback(err);
        }

        dbConnection = db.db(process.env.DB_NAME);
        console.log("Successfully connected to MongoDB.");

        return callback(db);
    });
}

async function getDB() {
    return dbConnection;
}

const featureCollection = async () => {
    const dbConnect = await getDB()
    return await dbConnect.collection('features')
}
const adminCollection = async () => {
    const dbConnect = await getDB()
    return await dbConnect.collection('admins')
}
const footerCollection = async () => {
    const dbConnect = await getDB()
    return await dbConnect.collection('footer')
}
const orderCollection = async () => {
    const dbConnect = await getDB()
    return await dbConnect.collection('orders')
}
const reviewCollection = async () => {
    const dbConnect = await getDB()
    return await dbConnect.collection('reviews')
}
const serviceCollection = async () => {
    const dbConnect = await getDB()
    return await dbConnect.collection('services')
}

module.exports = {
    connectToServer,
    getDB,
    featureCollection
}

// const dbConnect = getDB();
// const Features = await dbConnect.collection("features");

// client.connect(err => {
//     if (err) {
//         console.log("DATABASE_CONNECTION FAIELD !")
//     }
//     console.log(`DATABASE Conneced successfully...`);

// });;


// // all collections
// const Features = client.db(`${process.env.DB_NAME}`).collection('features');
// const Services = client.db(`${process.env.DB_NAME}`).collection('services');
// const Reviews = client.db(`${process.env.DB_NAME}`).collection('reviews');
// const Admins = client.db(`${process.env.DB_NAME}`).collection('admins');
// const Orders = client.db(`${process.env.DB_NAME}`).collection('orders');
// const Footers = client.db(`${process.env.DB_NAME}`).collection('footer');

// module.exports = {
//     Features,
//     Services,
//     Reviews,
//     Admins,
//     Orders,
//     Footers
// }