const express = require('express');

const router = express.Router()


router.get('/', (req, res, next) => {
    res.status(200).json({
        message: "this is GET /product list api"
    })
})

router.post('/', (req, res, next) => {
    const product ={
        name : req.body.name,
        price: req.body.price
    }
    res.status(201).json({
        message: "this is POST /product list api",
        createdProduct: product
    })
})

router.get('/:productId', (req, res, next) => {
    const id = req.params.productId;
    if (id === "special") {
        res.status(200).json({
            message: "this is the special id",
            id: id
        })
    } else {
        res.status(200).json({
            message: "product detail",
            id: id
        })
    }
})

router.patch('/:productId', (req, res, next) => {
    res.status(200).json({
        message: "product is updated",
    })
})

router.delete('/:productId', (req, res, next) => {
    res.status(200).json({
        message: "product is deleted",
    })
})


module.exports = router;