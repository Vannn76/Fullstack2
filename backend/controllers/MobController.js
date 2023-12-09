import Mobil from "../models/MobilModel.js";

export const getMobil = async(req, res) =>{
    try {
        const response = await Mobil.findAll({
            attributes: ["id","nama","harga","foto"]
        });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const getMobilById = async(req, res) =>{
    try {
        const mobil = await Mobil.findOne({
            where: {
                id: req.params.id
            }
        });
        if(!mobil) return res.status(404).json({msg: "Data tidak ditemukan"});
        const response = await Mobil.findOne({
                attributes:["id","nama","harga","foto"],
                where:{
                    id: mobil.id
                }
            });
            res.status(200).json(response);
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}

export const createMobil = async(req, res) =>{
    const {nama, harga, foto} = req.body;
    try {
        await Mobil.create({
            nama: nama,
            harga: harga,
            foto: foto,
        });
        res.status(201).json({msg: "Data Berhasil Ditambahkan"});
    } catch (error) {
        res.status(500).json({msg: error.message})
    }
}

export const updateMobil = async(req, res) =>{
    try {
        const mobil = await Mobil.findOne({
            where: {
                id: req.params.id
            }
        });
        if(!mobil) return res.status(404).json({msg: "Data tidak ditemukan"});
        const {nama, harga, foto} = req.body;
        await Mobil.update({nama, harga, foto},{
            where: {
                id: mobil.id
            }
        });
        res.status(200).json({msg: "Data Berhasil di Update!"});
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}