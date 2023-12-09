import {Sequelize} from "sequelize";
import db from "../config/database.js";
import User from "./UserModel.js";

const {DataTypes} = Sequelize;
const Pembayaran = db.define('pembayaran',{
    metodeBayar: DataTypes.STRING,
    userId: DataTypes.INTEGER,
},{
    freezeTableName:true
});

Pembayaran.belongsTo(User, {foreignKey: 'userId'});

export default Pembayaran;