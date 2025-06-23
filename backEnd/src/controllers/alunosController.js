const Escolas = require('../models/escola')

module.exports = {

async matricularAluno(req, res){

    try{
        const {escolaId, turmaId} = req.params
        const {nome, idade} = req.body

    
        const escola = await Escolas.findById(escolaId)
        const listaDeturmas =  escola.turmas
        const turma = listaDeturmas.id(turmaId)
       
        turma.alunos.push({nome, idade})
         await escola.save()
        
        res.status(200).json({message:`O aluno  foi ${nome} matriculado com sucesso.`, turma})


    }catch(err){
        console.log(err)
        res.status(500).json({message:"Erro ao matricular o aluno."})
    }

    }


    }
     /*
        const matricular = turma.alunos.push({nome, idade})
        */