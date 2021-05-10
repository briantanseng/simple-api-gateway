let express = require('express');
let adminRoutes = express.Router()
const { getAllServices } = require('../config/config');

adminRoutes.get('/admin/routes', (req, res) => {
    res.send(getAllServices())
})

module.exports = adminRoutes