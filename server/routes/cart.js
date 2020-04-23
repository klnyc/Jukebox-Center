const router = require('express').Router()
const Users = require('../database/users')
const Albums = require('../database/albums')
const Orders = require('../database/orders')
const Cart = require('../database/cart')

router.get('/', async (request, response, next) => {
    try {
        let order = await Orders.findOne({
            where: {
                purchased: false,
                userId: request.user.id
            },
            include: [{ model: Albums }]
        })
        if (!order) {
            order = await Orders.create({
                address: request.user.address,
                purchased: false,
                userId: request.user.id
            })
        }
        response.json(order)
    } catch (error) {
        next(error)
    }
})

router.post('/add', async (request, response, next) => {
    try {
        let order = await Orders.findOne({
            where: {
                purchased: false,
                userId: request.user.id
            }
        })
        if (!order) {
            order = await Orders.create({
                address: request.user.address,
                purchased: false,
                userId: request.user.id
            })
        }
        const album = await Cart.create({
            quantity: request.body.quantity,
            price: request.body.price,
            albumId: request.body.id,
            orderId: order.id
        })
        response.status(200).json(album)
    } catch (error) {
        next(error)
    }
})
module.exports = router