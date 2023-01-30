exports.getAllFeatures = async (req, res) => {
    try {
        const { title, price, subType, speed, realIp, opticFiber, bdix, router } = req.body;
        const { file } = req.files;
        const encImg = file.data.toString('base64');
        const image = {
            constentType: file.mimetype,
            size: file.size,
            img: Buffer.from(encImg, 'base64')
        };
        serviceCollection.insertOne({ title, price, subType, speed, realIp, opticFiber, bdix, router, image })

    } catch (err) {
        console.log(`GOT AN ERROR :`, err);
        res.send(false);
    }
}