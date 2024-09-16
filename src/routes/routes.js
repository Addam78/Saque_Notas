const express = require('express')
const router = express.Router()

//CONSTANTE QUE RECEBE O ARQUIVO DE CONTROLLERS
const calcula = require('../controllers/logica')

router.get('/ver', calcula.area_inicial)
router.post('/calcula_saque',calcula.saque_notas )

module.exports = router