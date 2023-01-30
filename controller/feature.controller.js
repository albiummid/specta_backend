const { getDB, connectDB } = require("../config/dbConfig");

exports.addFeature = async (req, res) => {
    try {
        await connectToServer(async (db) => {
            const Features = await db.collection('features');
            const { subject, details } = req.body;
            const { file } = req.files;
            const encImg = file.data.toString('base64');
            const icon = {
                constentType: file.mimetype,
                size: file.size,
                img: Buffer.from(encImg, 'base64')
            };

            let insertFeature = await Features.insertOne({ subject, details, icon });
            res.send(result.insertedCount > 0)
        })

    } catch (err) {
        console.log(`GOT AN ERROR :`, err);
        res.send(false);
    }
}

exports.getAllFeatures = async (req, res) => {
    try {
        await connectDB(async (db) => {
            let features = await db.collection('features').find({}).toArray((err, documents) => {
                res.send(documents)
            });
        })
    } catch (err) {
        console.log(`GOT AN ERROR :`, err);
        res.send(false);
    }
}