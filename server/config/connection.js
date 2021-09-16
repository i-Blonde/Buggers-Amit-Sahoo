const { Sequelize  , DataTypes } = require('sequelize');

const conn = new Sequelize("buggers","root","",{
    host:'localhost',
    dialect:'mysql'
})

conn.authenticate().
then(()=>{
    console.log("connection successful")
}).catch((error)=>{
    console.log(error)
})

const db={}
db.Sequelize =Sequelize;
db.conn = conn;

db.conn.sync().
then(()=>{
    console.log('re-sync')
}).catch((error)=>{
    console.log(error)
})
db.users = require('../Schema/userSchema')(conn,DataTypes)

module.exports = db