import User from "../models/UserModel.js";
import Mobil from "../models/MobilModel.js";
import Pembayaran from "../models/PembayaranModel.js";



export const getPembayaran = async(req, res) =>{
    try {
        const response = await Pembayaran.findAll({
            attributes:['totalHarga','metodeBayar'],
            include:[{
                model: User,
                attributes:['nama_penyewa','alamat','tgl_sewa','durasi','no_telp','lokasi_ambil','lokasi_kembali']
            }],
            include:[{
                model: Mobil,
                attributes:["nama","harga","foto"]
            }],
        });
        
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const createPembayaran = async(req, res) =>{
    const {userId, totalHarga, metodeBayar, mobId} = req.body;
    try {
        await User.create({
            userId: userId,
            totalHarga: totalHarga,
            metodeBayar: metodeBayar,
            mobId: mobId,
        });
        res.status(201).json({msg: "Selamat Pembayaran Berhasil!"});
    } catch (error) {
        res.status(500).json({msg: error.message})
    }
}