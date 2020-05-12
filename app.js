const express = require('express')

const app  = express();

const productRoutes = require('./api/routes/products')

const ordersRoutes = require('./api/routes/orders')
;
/**
 * sets up a middleware
 * incoming request has to go through the app.use and then to the other method
 */
app.use('/products', productRoutes)

app.use('/orders', ordersRoutes )

module.exports = app;