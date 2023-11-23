import {Sequelize} from "sequelize";
import db from "../config/database.js";
import User from "./UserModel.js";
import Mobil from "./MobilModel.js";

const {DataTypes} = Sequelize;
const Pembayaran = db.define('pembayaran',{
    userId: DataTypes.INTEGER,
    totalHarga: DataTypes.INTEGER,
    metodeBayar: DataTypes.STRING,
    mobId: DataTypes.INTEGER,
},{
    freezeTableName:true
});

Pembayaran.belongsTo(User, {foreignKey: 'userId'});
Pembayaran.belongsTo(Mobil, {foreignKey: 'mobId'});

export default Pembayaran;