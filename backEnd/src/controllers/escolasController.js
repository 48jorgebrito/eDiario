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
                res.status(200).json({message:'escola cadastrada com sucesso', newEscola})



        }catch(err){
            console.log(err)
            res.status(500).json({message: "Erro ao adicionar a escola.", error:err.message})
        }

    },
    async listaDeEscolas(req, res){

        try{
            const escolas = await Escolas.find()
             res.status(200).json({message:"Estas são todas as escolas cadastradas".toLocaleUpperCase(), escolas})


        }catch(err){
            console.log(err)
            res.status(500).json({message:'Erro ao buscar as escolas cadastradas', error:err})
        }
    },

    async escola(req, res){
        try{
            
            const {escolaId} = req.params
            const escola = await Escolas.findById(escolaId)

            res.status(200).json({message:"escola encontrada".toUpperCase(), escola})


        }catch(err){
            console.log(err)
            res.status(500).json({message:'Erro ao buscar esta escola', error:err})
        }
    }
    
    
    
    

}