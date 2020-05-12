const express = require('express');

const router = express.Router()


router.get('/', (req, res, next) => {
    res.status(200).json({
        message: "this is GET /order list api"
    })
})

router.post('/', (req, res, next) => {
    res.status(201).json({
        message: "this is POST /order list api"
    })
})

router.get('/:orderId', (req, res, next) => {
    res.status(200).json({
        message: "order details",
        id: req.params.orderId
    })
})

router.delete('/:orderId', (req, res, next) => {
    res.status(200).json({
        message: "order deleted",
    })
})



module.exports = router;