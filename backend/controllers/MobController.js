import Mobil from "../models/MobilModel.js";

export const getMobil = async(req, res) =>{
    try {
        const response = await Mobil.findAll({
            attributes: ["nama","harga","foto"]
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
    try {
        await Mobil.create(req.body);
        res.status(201).json({msg: "Data Berhasil Ditambahkan"});
    } catch (error) {
        console.log(error.message);
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