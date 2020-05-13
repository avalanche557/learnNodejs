const express = require('express')

const app = express();
const morgan = require('morgan');
const productRoutes = require('./api/routes/products')
const ordersRoutes = require('./api/routes/orders');
const bodyParser = require('body-parser');


app.use(morgan('dev'))
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', "*")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authrization");
    if(req.method === "OPTIONS") {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET')
        return res.status(200).json({})
    }
    next()
})

/**
 * sets up a middleware
 * incoming request has to go through the app.use and then to the other method
 */
app.use('/products', productRoutes)

app.use('/orders', ordersRoutes)

app.use((req, res, next) => {
    const error = new Error("Not Found")
    error.status = 404;
    next(error)
})

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    })
})

module.exports = app;