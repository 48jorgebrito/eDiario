const bcrypt = require('bcrypt')

module.exports = {

    //criptografando a senha
    async createPassword(password){
        const saltRouds = 10
        const salt  = bcrypt.genSaltSync(saltRouds)
            return bcrypt.hashSync(password, salt)
        
    },
    //verificando se a senha fornecida está correnta
    async checkPassword(password, user){
        return bcrypt.compare(password, user.password)
    }


}