const express = require('express')
const router = express.Router()
const userController = require('../controllers/usersController')
const loginController = require('../controllers/loginController')
const auth = require('../middleware/auth')

// Rotas publicas
router.post('/login', loginController.login)
router.post('/register', userController.create)

//router.use(auth.authToken)

//Rotas privadas
router.get('/users', userController.list)
router.get('/users/:id', userController.show)
router.put('/users/:id', userController.update)
router.delete('/users/:id', userController.destroy)



module.exports = router 