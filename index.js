// npm init 
// npm i express
// instalar a extensão RapidAPI client

const express = require("express")
const app = express()
const port = 3000
app.use(express.json())
const fs = require("fs")

app.post("/clientes", (req, res) => {
    const cliente = req.body

    try {
        // abrir arquivo 
        const bd = JSON.parse(fs.readFileSync("bd.json","utf8"))
        //adicionar cliente
        bd.push(cliente)
        // salvar o arquivo
        fs.writeFileSync("bd.json", JSON.stringify(bd), "utf8")
        //resposta
        res.status(201).json({resposta: "cliente cadastrado!"})

    } catch (erro) {
        res.status(500).json({erro: erro.message})
    }

})

app.get("/ola", (req, res) => {
    res.json({ resposta: "ola mundo" })
})

app.get("/perfil", (req, res) => {
    res.json({
        resposta: "Rafael Klosowski", idade: "16 anos"
    })
})

app.get("/clientes", (req, res) => {
    try{
    // abrir arquivo 
    const bd = JSON.parse(fs.readFileSync("bd.json","utf8"))
    res.status(200).json({resposta: bd})
    }catch{
        res.status(500).json({erro: erro.message})
    }
})

app.listen(port, () => {
    console.log("API rodando na porta " + port)
})


// http://localhost:3000/perfil
// http://localhost:3000/clientes