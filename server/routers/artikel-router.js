let express = require('express')
let router = express.Router()
let artikel = require('../controllers/artikel-controllers')

router.post('/',artikel.addArtikel)
router.get('/',artikel.getArtikelAll)
router.put('/:id',artikel.updateArtikel)
router.get('/:id',artikel.getArtikelOne)
router.get('/cat/:category',artikel.getArtikelCategori)
router.delete('/:id',artikel.deleteArikel)

module.exports = router
