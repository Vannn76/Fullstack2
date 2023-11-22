import User from "../models/UserModel.js";
import Destinasi from "../models/DestinasiModel.js";


export const getUsers = async(req, res) =>{
    try {
        const response = await User.findAll({
            attributes:['id','nama','tgl_lahir','tgl_booking','tgl_berangkat','jml_penumpang','email','no_telp','layanan'],
            include:[{
                model: Destinasi,
                attributes:['tujuan','harga']
            }]
        });
        
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const createUsers = async(req, res) =>{
    const {nama,tgl_lahir,tgl_booking,tgl_berangkat,jml_penumpang,email,no_telp,layanan, desId} = req.body;
    try {
        await User.create({
            nama: nama,
            tgl_lahir: tgl_lahir,
            tgl_booking: tgl_booking,
            tgl_berangkat: tgl_berangkat,
            jml_penumpang: jml_penumpang,
            email: email,
            no_telp: no_telp,
            layanan: layanan,
            desId: desId
        });
        res.status(201).json({msg: "Selamat Registrasi Berhasil!"});
    } catch (error) {
        res.status(500).json({msg: error.message})
    }
}