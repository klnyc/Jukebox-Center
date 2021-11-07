const router = require("express").Router()
const Albums = require("../database/albums")

router.get("/", async (request, response, next) => {
    try {
        const albums = await Albums.findAll({
            order: [["year", "DESC"]]
        })
        response.json(albums)
    } catch (error) {
        next(error)
    }
})

router.get("/:genre", async (request, response, next) => {
    try {
        const albums = await Albums.findAll({
            order: [["year", "DESC"]],
            where: { genre: request.params.genre }
        })
        response.json(albums)
    } catch (error) {
        next(error)
    }
})

router.get("/:genre/:id", async (request, response, next) => {
    try {
        const album = await Albums.findByPk(request.params.id)
        response.json(album)
    } catch (error) {
        next(error)
    }
})

module.exports = router