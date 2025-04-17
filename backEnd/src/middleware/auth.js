const jwt = require('jsonwebtoken')
const secret = process.env.SECRET_TOKEN

module.exports = {

    async authToken(req, res, next){
        //pega o cabeçalho Autorization
        const autoHeader = req.headers['authorization'] 

        //virificar se o token existe
        const token = autoHeader && autoHeader.split(' ')[1]

        if(!token){
            return res.status(401).json({message:"Token não enviado. Acesso negado."})

        }

        try{
            const decoded = await jwt.verify(token, secret)

            req.user = decoded
            return next()

        }catch(err){
            return res.status(403).json({message: "Token invalido ou expirado."})
        }
    }
}