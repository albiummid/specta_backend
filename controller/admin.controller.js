const { connectDB } = require("../config/dbConfig");

exports.addAdmin = async (req, res) => {
    try {
        await connectDB(async (db) => {
            await db.collection('admins').insertOne(email)
                .then(result => {
                    res.send(result.insertedCount > 0)
                })
        })

    } catch (err) {
        console.log(`GOT AN ERROR :`, err);
        res.send(false);
    }
}


exports.getAdmin = async (req, res) => {
    try {
        const { email } = req.query;
        await connectDB(async (db) => {
            db.collection('admins').find({ email: email })
                .toArray((err, documents) => {
                    res.send(documents.length > 0)
                })
        })
    } catch (err) {
        console.log("ERROR:", err)
    }
}