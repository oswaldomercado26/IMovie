import {sequelize} from "sequelize";

const db= Sequelize('imovie','root','',{
    host:'localhost',
    dialect: 'mysql'
});

export default db;