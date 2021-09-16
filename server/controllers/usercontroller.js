const db = require('../config/connection')

const User = db.users;

const register = async(req,res)=>{
    console.log(User)
    try{
        const {name , email , phone , password} = req.body;
        console.log(phone)
        const emailExists = await User.findOne({
            where:{
                email:email
            }
        })

        if(emailExists){
            res.status(401).json({"statustext":"email already exists"})
        }else{
            const newUser = await User.create({name,email,phone,password});
            if(newUser){
                res.status(200).json({"statustext":"registered successfully"})
            }else{
                res.status(500).json({"statustext":"notv registered"})
            }
        }
    }catch(error){
        console.log(error);
        res.status(500)
    }
}

module.exports = {
    register
}