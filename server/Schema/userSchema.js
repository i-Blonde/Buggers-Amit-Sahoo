

module.exports = (conn , DataTypes)=>{
    const users = conn.define("sign_tbl",{
        name:{
            type:DataTypes.STRING,
            required:true
        },
        email:{
            type:DataTypes.STRING,
            required:true
        },
        phone:{
            type:DataTypes.INTEGER,
            required:true
        },
        password:{
            type:DataTypes.STRING,
            required:true
        },token:{
            type:DataTypes.STRING
        }
    })
    return users
}