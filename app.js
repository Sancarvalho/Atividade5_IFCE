const express = require('express')
const app = express()
const alunos = require('./alunos.json') 
const conversaoMoeda = require('./rotas/conversaoMoeda')


app.get('/',(req,res) =>{
    res.send('Atividade 5') 
    })

app.listen(3000,()=>{
        console.log('app rodando na porta 3000')
    })

  
    app.get('/alunos/todos',(req,res) =>{
        let alunos = [
            {"nome": "San", "turma": "6° semestre" },
            {"nome": "Pedro", "turma": "6° semestre"},
            {"nome": "Eduardo", "turma": "6° semestre"},
            {"nome": "Lucas", "turma": "6° semestre"}
        ]

        res.json(alunos) 
    })


    app.get('/moeda/:valor_real', conversaoMoeda.conversor)