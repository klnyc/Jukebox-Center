const router = require('express').Router()
const Albums = require('../database/album')

router.get('/', async (request, response, next) => {
    try {
        const data = await Albums.findAll({
            limit: 24
        })
        response.json(data)
    } catch (error) {
        next(error)
    }
})

module.exports = router