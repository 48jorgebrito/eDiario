const Escolas = require('../models/escola')

module.exports  = {

    async addEscola(req, res){

        try{

            const { nomeEscola,  endereco } = req.body
            

            const existEscola = await Escolas.findOne({nomeEscola})

            if(existEscola){
                
                return res.status(500).json({message:'está escola ja está cadastrada'})
                
            }
                

                 const newEscola = {
                            nomeEscola,
    
                            endereco: {
                                rua: endereco.rua,
                                bairro: endereco.bairro,
                                numero:endereco.numero,
                                cidade:endereco.cidade 
                                }
                            
                            }
                await Escolas.create(newEscola)
              return  res.status(200).json({message:'escola cadastrada com sucesso', newEscola})



        }catch(err){
            console.log(err)
           return res.status(500).json({message: "Erro ao adicionar a escola.", error:err.message})
        }

    },
    async listaDeEscolas(req, res){

        try{

            const escolas = await Escolas.find()
            if(escolas.length == 0){
                return res.status(500).json({message:'Não há escola cadastrada.'})
            }
             return res.status(200).json({message:"Estas são todas as escolas cadastradas".toLocaleUpperCase(), escolas})


        }catch(err){
            console.log(err)
           return res.status(500).json({message:'Erro ao buscar as escolas cadastradas', error:err})
        }
    },

    async escola(req, res){
        try{
            
            const {escolaId} = req.params
            const escola = await Escolas.findById(escolaId)
               if(!escola){
                    return res.status(401).json({message: "Escola não encontada"})
                }
           return res.status(200).json({message:"escola encontrada".toUpperCase(), escola})


        }catch(err){
            console.log(err)
           return res.status(500).json({message:'Erro ao buscar esta escola', error:err})
        }
    },

    async editarEscola(req, res){
            
        try{
            const {escolaId} = req.params
            const { nomeEscola,  endereco } = req.body
            const escola = await Escolas.findById(escolaId)
                 if(!escola){
                    return res.status(401).json({message: "Escola não encontada"})
                   
                   
                }
                await Escolas.updateOne({
                            nomeEscola,
    
                            endereco: {
                                rua: endereco.rua,
                                bairro: endereco.bairro,
                                numero:endereco.numero,
                                cidade:endereco.cidade 
                                }
                            
                            })

            return res.status(200).json(`A escola foi atualizada com sucesso`)
        }catch(err){
            console.log(err)
            res.status(500).json({message:"error ao editar a escola"})
        }
          
    },
    
    async excluirEscola(req, res){
            
            const {escolaId} = req.params
            const escola = await Escolas.findById(escolaId)
                 if(!escola){
                    return res.status(401).json({message: "Escola não encontada"})
                }
                await Escolas.deleteOne(escola)

            return res.status(200).json(`A escola ${escola} foi excluida com sucesso`)
    }
    
    
    
    

}