const router = require('express').Router()
const Users = require('../database/user')

router.get('/', async (request, response, next) => {
    if (request.user) {
        try {
            const user = await Users.findByPk(request.user.dataValues.id)
            response.json(user)
        } catch (error) {
            next(error)
        }
    } else {
        response.sendStatus(401)
    }
})

router.post('/login', async (request, response, next) => {
    try {
        const user = await Users.findOne({ where: { email: request.body.email } })
        if (!user) {
            response.status(401).send('Invalid email or password')
        } else if (!user.correctPassword(request.body.password)) {
            response.status(401).send('Incorrect password')
        } else {
            request.login(user, (error) => error ? next(error) : response.json(user))
        }
    } catch (error) {
        next(error)
    }
})

router.post('/signup', async (request, response, next) => {
    try {
        console.log('route hit:', request.body)
        const user = await Users.create(request.body)
        request.login(user, (error) => error ? next(error) : response.json(user))
    } catch (error) {
        if (error.name === 'SequelizeUniqueConstraintError') {
            response.status(401).send('User already exists')
        } else {
            next(error)
        }
    }
})

module.exports = router