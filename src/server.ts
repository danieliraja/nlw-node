import express from "express";

const app = express();


// GET = Buscas
// POST = Criação
// PUT = Alteração
// DELETE = Deletar
// PATCH = ALterar uma informação especifica

app.get('/', (req, res) => {
    return res.json({message: "Ola NLW5!"})
})
app.post('/', (req, res) => {
    return res.json({message: "Usuario salvo com sucesso!"})
})

app.listen(3333, () => console.log("server is running on port 3333"));