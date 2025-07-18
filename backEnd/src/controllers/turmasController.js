const Escolas = require('../models/escola')

module.exports = {

    
    async addTurma(req, res){
        
        try{
    
            const {escolaId} = req.params
            const {sala, serie} = req.body
            

            const escola = await Escolas.findById(escolaId)

            if(!escola){
               return res.status(500).json({message:'A escola informada não está cadastrada'})
            }

                
                escola.turmas.push({sala, serie})
                await escola.save()

                res.status(200).json({ message: 'turma adicionada com sucesso', escola })



        }catch(err){
            console.log(err)
            res.status(500).json({message: 'erro ao cadastrar a turma', error:err})
        } 

    },
    async listaDeTurmas(req, res){
        try{
            const {escolaId} = req.params
            const escola = await Escolas.findById(escolaId)
            const listaDeturmas =  escola.turmas
             
            res.status(200).json(listaDeturmas)

        }catch(err){
            console.log(err)
            res.status(500).json({message:"erro ao buscar lista de turmas"})
        }
    },
    async turma(req, res){
        try{
            const {escolaId, turmaId} = req.params
            const escola = await Escolas.findById(escolaId)
            const listaDeturmas =  escola.turmas
            const turma = listaDeturmas.id(turmaId)
            
            
            res.status(200).json({turma})

        }catch(err){
            console.log(err)
            res.status(500).json({message:"erro ao buscar a turma "})
        }
    }
}