import {Sequelize} from "sequelize";
import db from "../config/database.js";
import Destinasi from "./DestinasiModel.js";

const {DataTypes} = Sequelize;
const User = db.define('user',{
    nama: DataTypes.STRING,
    tgl_lahir: DataTypes.STRING,
    tgl_booking: DataTypes.STRING,
    tgl_berangkat: DataTypes.STRING,
    desId: DataTypes.INTEGER,
    jml_penumpang: DataTypes.INTEGER,
    email: DataTypes.STRING,
    no_telp: DataTypes.STRING,
    layanan: DataTypes.STRING
},{
    freezeTableName:true
});

User.belongsTo(Destinasi, {foreignKey: 'desId'});

export default User;