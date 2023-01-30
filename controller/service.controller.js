const { ObjectId } = require('bson');
const { connectDB } = require('../config/dbConfig');
exports.getAllServices = async (req, res) => {
    try {
        await connectDB(async (db) => {
            await db.collection('services').find({})
                .toArray((err, documents) => {
                    res.send(documents)
                })
        })
    } catch (err) {
        console.log(`GOT AN ERROR :`, err);
        res.send(false);
    }
}
exports.getServiceById = async (req, res) => {
    try {
        await connectDB(async (db) => {
            const { id } = req.params;
            db.collection('services').find({ _id: ObjectId(`${id}`) })
                .toArray((err, documents) => {
                    res.send(documents[0])
                })
        })
    } catch (err) {
        console.log(`GOT AN ERROR :`, err);
        res.send(false);
    }
}


exports.addService = async (req, res) => {
    try {
        await connectDB(async (db) => {
            const title = req.body.title;
            const price = req.body.price;
            const subType = req.body.subType;
            const speed = req.body.speed;
            const realIp = req.body.realIp;
            const opticFiber = req.body.opticFiber;
            const bdix = req.body.bdix;
            const router = req.body.router;
            const file = req.files.file;
            const encImg = file.data.toString('base64');
            const image = {
                constentType: file.mimetype,
                size: file.size,
                img: Buffer.from(encImg, 'base64')
            };
            await db.collection('services').insertOne({ title, price, subType, speed, realIp, opticFiber, bdix, router, image })
                .then((result) => {
                    res.send(result.insertedCount > 0)
                })
        })
    } catch (err) {
        console.log(`GOT AN ERROR :`, err);
        res.send(false);
    }
}