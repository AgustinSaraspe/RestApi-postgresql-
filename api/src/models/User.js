import {DataTypes} from "sequelize";
import {sequelize} from "../database/database.js";


export const User = sequelize.define("user",{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
       type: DataTypes.STRING,
       allowNull: false,
       validate: {
        isAlpha: {
          msg: "El nombre solo puede tener letras"
        },
        len:{
          args: [2, 200],
          msg: "El nombre tiene que se minimo de dos letras"
        }
       }

    },
    password:{
        type: DataTypes.STRING,
        allowNull:false,
        validate: {
            len: {
                args: [6, 200],
                msg:"La contraseña tiene que tener como minimo 6 caracteres"
            }
        }
    },
    email:{
        type: DataTypes.STRING,
        allowNull:false,
        unique: true,
        validate: {
            isEmail:{
                msg: "El email tiene que ser un correo valido"
            }
        }
    }
},{
    timestamps:true
});