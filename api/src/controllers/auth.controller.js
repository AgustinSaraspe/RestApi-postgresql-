import {User} from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

//Login
export const signIn = (req,res)=>{
   
    const {email, password} = req.body;
        
    //Buscar usuario
    User.findOne({
        where: {
            email: email
        }
    }).then(user => {
        if(!user){
            res.status(404).json({msg: "Usuario no encontrado"});
        }else{
            if(bcrypt.compareSync(""+password, user.password)){
                //Devolvemos token
                let token = jwt.sign({ user : user }, "trololo",{
                    expiresIn: "24h"
                });
                 
                res.json({
                    user: user,
                    token: token
                })
                    

            }else{
                res.status(401).json({msg: "Contraseña incorrecta"});
            }
        }
    }).catch(err => {
        res.status(500).json({err: err.message})
    })

}

//Registro
export const signUp = (req,res)=>{
   //Crea un usuario   
     const {name, email, password} = req.body;

     //Encriptamos la contraseña
     let newPassword = bcrypt.hashSync(""+password, Number.parseInt("10"));
   
      User.create({
        name,
        email,
        password : newPassword
      }).then(user => {
        let token = jwt.sign({ user : user }, "trololo",{
           expiresIn: "24h"
        });

        res.json({
           user:user,
           token:token
        });
     }).catch(err => res.status(500).json({error:err}));
};