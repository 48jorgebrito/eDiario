const express = require('express')
const router = express.Router()
const escolasController = require('../controllers/escolasController')

router.post('/addEscolas', escolasController.addEscola)
router.post('/addEscolas/:id', escolasController.addTurmas)

module.exports = router 