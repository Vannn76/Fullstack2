import {Sequelize} from "sequelize";
import db from "../config/database.js";

const {DataTypes} = Sequelize;

const Mobil = db.define('mobil',{
    nama: DataTypes.STRING,
    harga: DataTypes.INTEGER(25),
    foto: DataTypes.STRING,
},{
    freezeTableName:true
});

export default Mobil;