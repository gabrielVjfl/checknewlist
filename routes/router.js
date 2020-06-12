const express = require('express')

const router = express.Router()

const mongoose = require('mongoose')

require('../models/bd')

const tarefas = mongoose.model('listas')

router.get('/teste', (req, res) => {
    res.send("TESTANDO!")
})

router.get('/count', (req,res) => {
    tarefas.countDocuments((err, count) => {
        if(err) {
            res.send({erro: 'deu erro'})
        }
        else {
            res.send({count: count})
        }
    })
})

router.post('/postar', (req,res) => {
     const {titulo, descricao, status, responsavel, prazo,data} = req.body



    if(!req.body.titulo || typeof retitulo == undefined || typeof titulo == null) {
        res.send({erro: 'Campo obrigatorio'})
    }
    if(!descricao || typeof descricao == undefined || typeof descricao == null) {
        res.send({erro: 'Campo obrigatorio'})
    }
    if(!status || typeof status == undefined || typeof status == null) {
        res.send({erro: 'Campo obrigatorio'})
    }
   if(titulo.length < 4) {
       res.send({erro: 'o titulo tem que ter pelo menos 4 caracteres' }) 

   }
   if(descricao.length < 4) {
    res.send({erro: 'a descricao tem que ter pelo menos 4 caracteres' }) 

}
else {


const postagem =  tarefas.create(req.body).then(() => {
 return    res.send({postagem})

}).catch(() => {
  return   res.send({erro: 'Ocorreu um erro ao salvar'})
})



}
})

module.exports = router
