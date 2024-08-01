const { Sequelize} = require ('sequelize')
const sequelize = new Sequelize('rel_1_n', 'root', 'senai',{
    host:'localhost',
    dialect:'mysql'
})

sequelize.authenticate()

.then(()=>{
    console.log('certo')
})

.catch((err)=>{
    console.error('erro',err)
})

module.exports = sequelize