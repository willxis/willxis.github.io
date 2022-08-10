const {Router} = require('express')
const router = Router()
const homeController = require('../controllers/home.controller')

router.get("/",homeController.loadHome)

module.exports = router
