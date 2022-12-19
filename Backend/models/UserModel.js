import { Sequelize } from "sequelize"; // Sequelize: Permite importar mySQL
import db from "../config/Database.js";

const {DataTypes}= Sequelize;
const User= db.define('users',{ //Se define la tabla
    name: DataTypes.STRING,
    email:DataTypes.STRING,
    platform:DataTypes.STRING,
    preferences:DataTypes.STRING,
    password:DataTypes.STRING

},{
    freezeTableName:true // Funciona para que no se puedan añadir mas campos a la tabla
});