let express = require('express')
let router = express.Router()
let user = require('../controllers/user-controllers')

router.post('/',user.addUser)
router.post('/login',user.loginUser)

module.exports = router
