require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const connectDB = require('./config/db');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const {createProduct} = require("./services/product.service");
// Tao server side
connectDB()
    .then(()=>{
        app.listen(port, () => {
            console.log(`Listening on port: ${port}`);
        })
    }).catch((err)=>{
        console.log(err.message);
        process.exit(1);
    });



app.get('/', (req, res) => {
    res.send("<h1>Hello World! ABC</h1>");
})
app.get('/about', (req, res) => {
    res.send("<h1>About Me!</h1>");
})
app.post('/product/create', async (req, res) => {
    const product = await createProduct(req.body);
    res.status(201).json({
        success: true,
        message: 'Product Created',
        data: product
    });
})