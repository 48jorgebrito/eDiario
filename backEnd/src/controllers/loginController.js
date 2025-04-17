const User = require('../models/users')
const jwt = require('jsonwebtoken')
const passwordHash = require('../services/passwordHash')
require('dotenv').config()
const secret = process.env.SECRET_TOKEN
module.exports = {

    async login(req, res){
        
        const {email, password} = req.body
        try{

            const user = await User.findOne({email})
            if(!user){
                return res.status(401).json({message:"email ou senha estão incorretas"})
                
            }

            //comparando se as senhas conferem
           const checkPassword = await passwordHash.checkPassword(password, user)
            if(!checkPassword){
               return res.status(401).json({message:"email ou senha estão incorretos"})
            }

            //gerando token 
            const token = jwt.sign(                //header
                {id:user._id, email: user.email}, //playload
                secret,                           // secret
                {expiresIn: '1y', subject: '1'}  // tempo de expiracao
            )
           return res.status(200).json({token:token})

        }
        catch(err){
            res.status(402).json({message:"Erro no processo de login", error:err})
        }
    }

}