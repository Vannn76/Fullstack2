import {Sequelize} from "sequelize";
import db from "../config/database.js";

const {DataTypes} = Sequelize;

const Destinasi = db.define('destinasi',{
    tujuan: DataTypes.STRING,
    harga: DataTypes.STRING
},{
    freezeTableName:true
});

export default Destinasi;