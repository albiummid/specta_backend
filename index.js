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



const feature = require('./routes/feature');
const admin = require('./routes/admin');
const footer = require('./routes/footer');
const review = require('./routes/review');
const service = require('./routes/service');
const order = require('./routes/order');


app.use(feature);
app.use(admin);
app.use(footer);
app.use(review);
app.use(service);
app.use(order);


app.listen(port, () => {
    console.log(`SERVER STARTED AT PORT: ${port}`);
})