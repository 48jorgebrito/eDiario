const express = require('express')
const cors = require('cors')

const app = express()
const routesUsers = require('./src/routes/userRoute')
const  mongoose  = require('mongoose')


app.use(cors())
app.use(express.json())

app.use(routesUsers)


mongoose.connect('mongodb://localhost:27017/eDiario').then(()=>{
app.listen(8080)
console.log('servidor rodando na porta 8080')
}).catch((error)=>{
    console.log(error)
})
