const router = require('express').Router()

router.use('/albums', require('./albums'))
router.use('/user', require('./user'))

router.use((request, response, next) => {
    const error = new Error('API route not found!')
    error.status = 404
    next(error)
  })
  
module.exports = router