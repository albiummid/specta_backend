// const { Features } = require("../config/dbConfig");

const { getDB, connectToServer, featureCollection } = require("../config/dbConfig");


exports.addFeature = async (req, res) => {
    const Features = await featureCollection();

    try {
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
    } catch (err) {
        console.log(`GOT AN ERROR :`, err);
        res.send(false);
    }
}

exports.getAllFeatures = async (req, res) => {
    const Features = await featureCollection();
    try {
        let features = await Features.find({})
            .toArray((err, documents) => {
                res.send(documents)
            });

    } catch (err) {
        console.log(`GOT AN ERROR :`, err);
        res.send(false);
    }
}