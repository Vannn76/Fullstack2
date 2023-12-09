import User from "../models/UserModel.js";
import Mobil from "../models/MobilModel.js";


export const getUsers = async(req, res) =>{
    try {
        const response = await User.findAll({
            attributes:['id','nama_penyewa','alamat','tgl_sewa','durasi','lokasi_ambil','lokasi_kembali','no_telp','email','totalHarga'],
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

export const getUserById = async(req, res) =>{
    try {
        const response = await User.findOne({
            attributes:['id','nama_penyewa','alamat','tgl_sewa','durasi','lokasi_ambil','lokasi_kembali','no_telp','email','totalHarga'],
            where: {
                id: req.params.id
            },
            include:[{
                model: Mobil,
                attributes:['nama','harga','foto']
            }]
        });
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}

export const createUsers = async(req, res) =>{
    const {nama_penyewa,alamat,tgl_sewa,durasi,lokasi_ambil,lokasi_kembali,email,no_telp,totalHarga,mobId} = req.body;
    try {
        await User.create({
            nama_penyewa: nama_penyewa,
            alamat: alamat,
            tgl_sewa: tgl_sewa,
            durasi: durasi,
            lokasi_ambil: lokasi_ambil,
            lokasi_kembali: lokasi_kembali,
            email: email,
            no_telp: no_telp,
            totalHarga: totalHarga,
            mobId: mobId
        });
        res.status(201).json({msg: "Selamat Registrasi Berhasil!"});
    } catch (error) {
        res.status(500).json({msg: error.message})
    }
}