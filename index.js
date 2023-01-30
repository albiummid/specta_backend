const express = require('express')
const cors = require('cors')
const fileUpload = require('express-fileupload');
require('dotenv').config();
const port = process.env.PORT || 5000;
const { connectToServer } = require('./config/dbConfig');



const app = express();
app.use(cors());
app.use(express.static('feature'));
app.use(fileUpload());
app.use(express.json());
const { ObjectId } = require('bson');

connectToServer();

const feature = require('./routes/feature');


app.use(feature);





// router.post('/addAFeature', (req, res) => {
//     const subject = req.body.subject;
//     const details = req.body.details;
//     const file = req.files.file;
//     const encImg = file.data.toString('base64');
//     const icon = {
//         constentType: file.mimetype,
//         size: file.size,
//         img: Buffer.from(encImg, 'base64')
//     };
//     featuresCollection.insertOne({ subject, details, icon })
//         .then(result => {
//             res.send(result.insertedCount > 0)
//         })

// })

// // get feature
// router.get('/features', (req, res) => {
//     featuresCollection.find({})
//         .toArray((err, documents) => {
//             res.send(documents)
//         })
// })


// // addService
// router.post('/addService', (req, res) => {
//     const e = req.query.e
//     const title = req.body.title;
//     const price = req.body.price;
//     const subType = req.body.subType;
//     const speed = req.body.speed;
//     const realIp = req.body.realIp;
//     const opticFiber = req.body.opticFiber;
//     const bdix = req.body.bdix;
//     const router = req.body.router;
//     const file = req.files.file;
//     const encImg = file.data.toString('base64');
//     const image = {
//         constentType: file.mimetype,
//         size: file.size,
//         img: Buffer.from(encImg, 'base64')
//     };
//     serviceCollection.insertOne({ title, price, subType, speed, realIp, opticFiber, bdix, router, image })
//         .then((result) => {
//             res.send(result.insertedCount > 0)
//         })
// })

// // getService
// router.get('/services', (req, res) => {
//     serviceCollection.find({})
//         .toArray((err, documents) => {
//             res.send(documents)
//         })
// })

// // get servicesbyID
// router.get('/serviceById/:id', (req, res) => {
//     const id = req.params.id;
//     serviceCollection.find({ _id: ObjectId(`${id}`) })
//         .toArray((err, documents) => {
//             res.send(documents[0])
//         })
// })

// // addReview
// router.post('/addReview', (req, res) => {
//     const comment = req.body.comment;
//     const name = req.body.name;
//     const location = req.body.location;
//     const file = req.files.file;
//     const encImg = file.data.toString('base64');
//     const image = {
//         constentType: file.mimetype,
//         size: file.size,
//         img: Buffer.from(encImg, 'base64')
//     };
//     reviewCollection.insertOne({ name, location, comment, image })
//         .then(result => {
//             res.send(result.insertedCount > 0)
//         })

// })
// // getReview
// router.get('/reviews', (req, res) => {
//     reviewCollection.find({})
//         .toArray((err, documents) => {
//             res.send(documents)
//         })
// })

// // addAdmin
// router.post('/addAdmin', (req, res) => {
//     const email = req.body;
//     adminCollection.insertOne(email)
//         .then(result => {
//             res.send(result.insertedCount > 0)
//         })
// })
// // geAdmin
// router.get('/isAdmin', (req, res) => {
//     const email = req.query.email;
//     adminCollection.find({ email: email })
//         .toArray((err, documents) => {
//             res.send(documents.length > 0)
//         })

// })

// // addOrders
// router.post('/addOrder', (req, res) => {
//     const order = req.body;
//     orderCollection.insertOne(order)
//         .then(result => {
//             res.send(result.insertedCount > 0);
//         })
// })
// // deleteOrder
// router.delete('/deleteOrder/:id', (req, res) => {
//     orderCollection.deleteOne({ _id: ObjectId(`${req.params.id}`) })
//         .then(result => {
//             res.send(result.deletedCount > 0)
//         })
// })

// // updateOrder
// router.patch('/updateOrder/:id', (req, res) => {
//     orderCollection.updateOne({ _id: ObjectId(`${req.params.id}`) }, {
//         $set: { status: req.body.status }
//     })
//         .then(result => res.send(result.modifiedCount > 0))
// })

// router.get('/ordersByEmail', (req, res) => {
//     const email = req.query.email;
//     orderCollection.find({ email: email })
//         .toArray((err, documents) => {
//             res.send(documents);
//         })
// })
// router.get('/allOrders', (req, res) => {
//     orderCollection.find({})
//         .toArray((err, documents) => {
//             res.send(documents);
//         })
// })

// // footerInser
// router.get('/footer', (req, res) => {
//     footerCollection.find({})
//         .toArray((err, documents) => {
//             res.send(documents)
//         })
// });


// router.get('/tokenCheck/:id', (req, res) => {
//     console.log();
// })





app.listen(port, () => {
    console.log(`SERVER STARTED AT PORT: ${port}`);
})