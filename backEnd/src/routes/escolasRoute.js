const express = require('express')
const router = express.Router()
const escolasController = require('../controllers/escolasController')
const turmasController = require('../controllers/turmasController') 
const alunosController = require('../controllers/alunosController')


router.post('/addEscola', escolasController.addEscola)
router.get('/escolas', escolasController.listaDeEscolas)
router.get('/escola/:escolaId', escolasController.escola)


router.post('/escola/:escolaId/addTurma', turmasController.addTurma)
router.get('/escola/:escolaId/turmas', turmasController.listaDeTurmas)
router.get('/escola/:escolaId/turma/:turmaId', turmasController.turma)


router.post('/escola/:escolaId/turma/:turmaId/matricular', alunosController.matricularAluno)


module.exports = router 