const PORT = 5600;

const express = require('express')

const app = express()

const mongoose = require('mongoose')


const router = require('./routes/router')

require('./models/bd')



app.use('/api', router)


app.listen(PORT, () => {
    console.log('Rodando na porta', PORT)
})
