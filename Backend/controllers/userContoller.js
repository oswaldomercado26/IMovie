import User from "../models/UserModel.js"

export const getUsers= async(req, res)=>{
    try{
        const response =await User.findAll();
        res.status(200).json(response);

    }catch(error){
        console.log(error.message);
    }
    
}
export const getUserById= async(req,res)=>{
    try{
        await User.create(req.body);
        res.status(201).json({msg: "Usuario creado"});

    }catch(error){
        console.log(error.message);
    }
}

export const updateUser= async(req,res)=>{
    try{
        await User.create(req.body);
        where:{
            id:req.params.id
        }
        res.status(201).json({msg: "Usuario actualizado"});

    }catch(error){
        console.log(error.message);
    }
}

export const deleteUser= async(req,res)=>{
    try{
        await User.create(req.body);
        where:{
            id:req.params.id
        }
        res.status(201).json({msg: "Usuario eliminado"});

    }catch(error){
        console.log(error.message);
    }
}