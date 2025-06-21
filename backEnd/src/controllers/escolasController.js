const Escolas = require('../models/escola')

module.exports  = {

    async addEscola(req, res){

        try{

            const { nomeEscola, diretor, endereco, turmas } = req.body
            

            const existEscola = await Escolas.findOne({nomeEscola})

            if(existEscola){
                
                return res.status(500).json({message:'está escola ja está cadastrada'})
                
            }
                

                 const newEscola = {
                            nomeEscola,
                            diretor:{
                                nome:diretor.nome,
                                cpf:diretor.cpf,
                                email:diretor.email,
                                ceular:diretor.ceular
                            },
                            endereco: {
                                rua: endereco.rua,
                                bairro: endereco.bairro,
                                numero:endereco.numero,
                                cidade:endereco.cidade 
                                },
                            turmas:{
                                salaDeAula: turmas.salaDeAula,
                                serie: turmas.serie
                            }
                            }
                await Escolas.create(newEscola)
                res.status(200).json({message:'escola cadastrada com sucesso', newEscola})



        }catch(err){
            console.log(err)
            res.status(500).json({message: "Error ao adicionar a escola.", error:err.message})
        }

    },
    
    
    async addTurmas(req, res){
        
        try{
    
            const {id} = req.params
            const {sala, serie, nome, sobrenome} = req.body
            

            const escola = await Escolas.findById(id)

            if(!escola){
               return res.status(500).json({message:'A escola informada não está cadastrada'})
            }

                escola.alunos.push({nome, sobrenome})
                escola.turmas.push({sala, serie})
                await escola.save()

                res.status(200).json({ message: 'turma adicionada com sucesso', escola })



        }catch(err){
            console.log(err)
            res.status(500).json({message: 'error ao cadastrar a turma', error:err})
        } 

    }

}