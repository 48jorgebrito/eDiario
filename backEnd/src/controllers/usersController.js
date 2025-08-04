const User = require('../models/users')
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const createPasswordHash = require('../services/passwordHash')
const passwordHash = require('../services/passwordHash')
module.exports = {
    
    async create(req, res){
        
        try{
            const {cpf, userName, email, password, userType} = req.body
            
            const existEmail = await User.findOne({email})
            const existCpf = await User.findOne({cpf})
            
            if(existCpf || existEmail){
                return res.status(500).json({message:"CPF ou Email estão vinculados a uma outra conta."})
                
            }
           
            
                const passwordHash = await createPasswordHash.createPassword(password)
            

            const newUser = {
                userName,
                cpf,
                email,
                password:passwordHash,
                userType
            }
            await User.create(newUser)
            return res.status(200).json(newUser)
    
        }catch(err){
            console.log(err)
            return res.status(500).json({message: "Error ao registrar o usuário.", error:err.message})
        }
    },
    async list(req, res){
        
        try{
            
            const result = await User.find()
            
            if(result.length == 0){
               return res.json({message:"Não há nenhum usuário cadastrado"})
            }
           return  res.status(200).json(result)
        }  
        catch(err){
            console.log(err)
            return res.status(500).json({message: "Error ao encontar a lista de usuários.", error:err.message})
        }
    },

  
    async show(req, res){
        
        const {id} = req.params
        if(!mongoose.Types.ObjectId.isValid(id)){
            return res.status(400).json({message: "ID inválido"})
        }
        try{
            
            const user = await User.findById(id)
            
            if(user){
                return res.status(200).json(user)
                
            }
                return  res.status(404).json({message:"Este usuário não está cadastrado"})
            
            
        }
        catch(err){
            console.log(err)
           return res.status(500).json({message: "Error ao encontrar o usuário.", error:err.message})
        }
},


    async update(req, res){
        
        const {id} = req.params

        if(!mongoose.Types.ObjectId.isValid(id)){

            return res.status(400).json({message:"ID invalido"})
        }
        try{
            const {cpf, userName, email, password} = req.body
            
            const existEmail = await User.findOne({email})
            const existCpf = await User.findOne({cpf})

            if(existCpf || existEmail){
                return res.status(500).json({message:"CPF ou Email estão vinculados a uma outra conta."})
                
            }
            
            const result = await User.findById(id)
            if(!result){
               return res.status(402).json({message:"Este usuário não existe."})
            }
            const user = {
                userName,
                cpf,
                email,
                password
            }
            const userUpdate = await User.updateOne(user)

           return res.status(200).json({message:"Usuário editado com sucesso"})


        }
        catch(err){
            console.log(err)
           return res.status(500).json({message:"Error ao editar o usuário.", })
        }
    },
    async destroy(req, res){
        const {id} = req.params
        
        if(!mongoose.Types.ObjectId.isValid(id)){
            return res.status(400).json({message:"ID invalido"})
        }
        try{
            const result = await User.findById(id)
            
            if(result){
                await User.deleteOne({_id:id})
                return res.status(200).json({message:"Usuário Excluido com sucesso."})
                
            }
           return res.status(402).json({message:"Este usuário não existe "})
            
        }
        catch(err){
            console.log(err)
            return res.status(500).json({mesage:"error ao deletar usuário"})
        }
    }

   
}