import app from "./app.js";
import {sequelize} from "./database/database.js";

// import "./models/User.js"

async function main(){
    try{
        await sequelize.sync({force: false})
        console.log("Conexion establecida con exito.")

        app.listen("3001",()=>{
            console.log("servidor conectado");
        });

    } catch(error){
        console.log("Conexion fallida: ", error.message);
    }
}

main();