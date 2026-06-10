// npm init 
// npm i express
// instalar a extensão RapidAPI client

const express = require("express")
const app = express()
const port = 3000
app.use(express.json())

app.get("/ola", (req,res) => {
    res.json({resposta: "ola mundo"})
})

app.get("/perfil", (req,res) => {
    res.json({resposta: "Rafael Klosowski", idade: "16 anos"
})
})

app.listen(port,() => {
    console.log("API rodando na porta " + port)
})
