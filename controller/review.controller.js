const { connectDB } = require("../config/dbConfig");

exports.addReview = async (req, res) => {
    try {
        const comment = req.body.comment;
        const name = req.body.name;
        const location = req.body.location;
        const file = req.files.file;
        const encImg = file.data.toString('base64');
        const image = {
            constentType: file.mimetype,
            size: file.size,
            img: Buffer.from(encImg, 'base64')
        };
        await connectDB(async (db) => {
            await db.collection('reviews').insertOne({ name, location, comment, image })
                .then(result => {
                    res.send(result.insertedCount > 0)
                })
        })
    } catch (err) {
        console.log(`GOT AN ERROR :`, err);
        res.send(false);
    }
}

exports.getAllReviews = async (req, res) => {
    try {
        await connectDB(async (db) => {
            await db.collection('reviews').find({})
                .toArray((err, documents) => {
                    res.send(documents)
                })
        })

    } catch (err) {
        console.log(`GOT AN ERROR :`, err);
        res.send(false);
    }
}