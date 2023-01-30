require('dotenv').config();
const MongoClient = require('mongodb').MongoClient;
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.gpn2l.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true })

let dbConnection;

let featureCollection

async function connectDB(callback = () => { }) {
    client.connect(function (err, db) {
        if (err || !db) {
            console.log("NO_DB", err)
            return
        }

        dbConnection = db.db(process.env.DB_NAME);
        featureCollection = db.db(process.env.DB_NAME).collection('features');
        console.log("Successfully connected to MongoDB.");

        return callback(dbConnection)
    });
}

async function getDB() {
    return dbConnection;
}

async function getFeatures() {
    return featureCollection;
}

// const featureCollection = async () => {
//     let instance
//     try {
//         await connectDB(async (db) => {
//             instance = await db.collection('features');
//         })
//         return instance
//     } catch (err) {
//         console.log("ERROR>>>", err)
//     }
// }
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
    connectDB,
    getDB,
}