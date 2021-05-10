let express = require('express');
let router = express.Router()
let mountedRoutes = require('./services')
let adminRoutes = require('./adminServices')

// add routes manually (without configuration)
let dadJokesService = require('./dadJokesService')
let chuckNorrisJokesService = require('./chuckNorrisJokesService')

router.use((req, res, next) => {
    console.log("Called: ", req.path)
    next()
})

router.use(mountedRoutes)
router.use(adminRoutes)

router.use(dadJokesService)
router.use(chuckNorrisJokesService)

module.exports = { router }