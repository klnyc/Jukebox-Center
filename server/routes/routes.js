const router = require('express').Router()

router.use('/albums', require('./albums'))

router.use((request, response, next) => {
    const error = new Error('API route not found!')
    error.status = 404
    next(err)
  })
  
module.exports = router