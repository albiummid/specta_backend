const { connectDB } = require("../config/dbConfig");
const { ObjectId } = require('bson');
exports.addOrder = async (req, res) => {
    try {

        await connectDB(async (db) => {
            await db.collection('orders').insertOne(req.body)
                .then(result => {
                    res.send(result.insertedCount > 0);
                })
        })
    } catch (err) {
        console.log(`GOT AN ERROR :`, err);
        res.send(false);
    }
}
exports.deleteOrder = async (req, res) => {
    try {
        await connectDB(async (db) => {
            await db.collection('orders').deleteOne({ _id: ObjectId(`${req.params.id}`) })
                .then(result => {
                    res.send(result.deletedCount > 0)
                })
        })
    } catch (err) {
        console.log(`GOT AN ERROR :`, err);
        res.send(false);
    }
}
exports.updateOrder = async (req, res) => {
    try {
        await connectDB(async (db) => {
            await db.collection('orders').updateOne({ _id: ObjectId(`${req.params.id}`) }, {
                $set: { status: req.body.status }
            })
                .then(result => res.send(result.modifiedCount > 0))
        })

    } catch (err) {
        console.log(`GOT AN ERROR :`, err);
        res.send(false);
    }
}
exports.orderByEmail = async (req, res) => {
    try {
        await connectDB(async (db) => {
            await db.collection('orders').find({ email: req.query.email })
                .toArray((err, documents) => {
                    res.send(documents);
                })
        })

    } catch (err) {
        console.log(`GOT AN ERROR :`, err);
        res.send(false);
    }
}
exports.getAllOrders = async (req, res) => {
    try {

        await connectDB(async (db) => {
            await db.collection('orders').find({})
                .toArray((err, documents) => {
                    res.send(documents);
                })
        })
    } catch (err) {
        console.log(`GOT AN ERROR :`, err);
        res.send(false);
    }
}