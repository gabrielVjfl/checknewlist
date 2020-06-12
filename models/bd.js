const sequelize = require('sequelize')

const seq = new sequelize('techtin', 'root', 'Info@3304', {
    host: 'localhost',
    dialect: 'mysql',
})
seq.authenticate().then(() => {
    console.log(deu)
}).catch(() => {
    console.log('erro')
})
