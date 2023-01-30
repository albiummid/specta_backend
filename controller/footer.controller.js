const { connectDB } = require("../config/dbConfig");

exports.getFooter = async (req, res) => {
    try {
        await connectDB(async (db) => {
            await db.collection('footer').find({})
                .toArray((err, documents) => {
                    res.send(documents)
                })
        })

    } catch (err) {
        console.log(`GOT AN ERROR :`, err);
        res.send(false);
    }
}