import User from "../models/UserModel.js";
import Mobil from "../models/MobilModel.js";


export const getUsers = async(req, res) =>{
    try {
        const response = await User.findAll({
            attributes:['id','nama_penyewa','alamat','tgl_sewa','durasi','no_telp','lokasi_ambil','lokasi_kembali'],
            include:[{
                model: Mobil,
                attributes:['nama','harga']
            }]
        });
        
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const createUsers = async(req, res) =>{
    const {nama_penyewa,alamat,tgl_sewa,durasi,no_telp,lokasi_ambil,lokasi_kembali,mobId} = req.body;
    try {
        await User.create({
            nama_penyewa: nama_penyewa,
            alamat: alamat,
            tgl_sewa: tgl_sewa,
            durasi: durasi,
            no_telp: no_telp,
            lokasi_ambil: lokasi_ambil,
            lokasi_kembali: lokasi_kembali,
            mobId: mobId,
        });
        res.status(201).json({msg: "Selamat Registrasi Berhasil!"});
    } catch (error) {
        res.status(500).json({msg: error.message})
    }
}