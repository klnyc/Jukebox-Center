const router = require('express').Router()
const Users = require('../database/user')

router.get('/', (request, response, next) => {
    try {
        response.json(request.user)
    } catch (error) {
        next(error)
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

router.delete('/logout', (request, response) => {
    request.logout()
    request.session.destroy()
    response.sendStatus(204)
})

router.put('/profile', async (request, response) => {
    try {
        
    } catch (error) {
        next(error)
    }
})

module.exports = router