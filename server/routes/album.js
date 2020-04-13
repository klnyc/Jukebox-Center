const Sequelize = require('sequelize')
const router = require('express').Router()
const Album = require('../database/album')

router.get('/', async (request, response, next) => {
    try {
        const albums = await Album.findAll({
            limit: 24
        })
        response.json(albums)
    } catch (error) {
        next(error)
    }
})