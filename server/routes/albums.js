const router = require('express').Router()
const Albums = require('../database/album')

router.get('/', async (request, response, next) => {
    try {
        const data = await Albums.findAll({
            order: [['year', 'DESC']]
        })
        response.json(data)
    } catch (error) {
        next(error)
    }
})

router.get('/:genre', async (request, response, next) => {
    try {
        const data = await Albums.findAll({
            order: [['year', 'DESC']],
            where: { genre: request.params.genre }
        })
        response.json(data)
    } catch (error) {
        next(error)
    }
})

module.exports = router