import {Sequelize} from "sequelize";
import db from "../config/database.js";
import Mobil from "./MobilModel.js";

const {DataTypes} = Sequelize;
const User = db.define('user',{
    nama_penyewa: DataTypes.STRING,
    alamat: DataTypes.STRING,
    tgl_sewa: DataTypes.STRING,
    durasi: DataTypes.STRING,
    no_telp: DataTypes.INTEGER,
    lokasi_ambil: DataTypes.STRING,
    lokasi_kembali: DataTypes.STRING,
    mobId: DataTypes.INTEGER,
},{
    freezeTableName:true
});

User.belongsTo(Mobil, {foreignKey: 'mobId'});

export default User;