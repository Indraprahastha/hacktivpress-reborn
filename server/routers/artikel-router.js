let express = require('express')
let router = express.Router()
let artikel = require('../controllers/artikel-controllers')

router.post('/',artikel.addArtikel)
router.get('/',artikel.getArtikelAll)
router.put('/:id',artikel.updateArtikel)

module.exports = router
