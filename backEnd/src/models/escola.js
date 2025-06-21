const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const alunosSchema = new Schema({
    
        nome:String,
        sobrenome:String
    
})
const turmasSchema = new Schema({
    
        sala:String,
        serie:String,
        alunos:[alunosSchema]
    
})
const escolaSchema = new Schema({
    nomeEscola: { type: String, required: true },
    diretor:[{
            nome:String, 
            cpf:Number,
            email:String,
            celular:Number
        }],
    endereco:{ 
            rua:String,
            bairro:String,
            numero:String,
            cidade:String
        },
    turmas:[ turmasSchema]

  
  

   
}, { timestamps: true });

module.exports = mongoose.model('Escolas', escolaSchema);


