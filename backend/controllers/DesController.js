import Destinasi from "../models/DestinasiModel.js";

export const getDestinasi = async(req, res) =>{
    try {
        const response = await Destinasi.findAll({
            attributes: ["id","tujuan","harga"]
        });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const getDestinasiById = async(req, res) =>{
    try {
        const destinasi = await Destinasi.findOne({
            where: {
                id: req.params.id
            }
        });
        if(!destinasi) return res.status(404).json({msg: "Data tidak ditemukan"});
        const response = await Destinasi.findOne({
                attributes:['id','tujuan','harga'],
                where:{
                    id: destinasi.id
                }
            });
            res.status(200).json(response);
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}

export const createDestinasi = async(req, res) =>{
    try {
        await Destinasi.create(req.body);
        res.status(201).json({msg: "Data Berhasil Ditambahkan"});
    } catch (error) {
        console.log(error.message);
    }
}

export const updateDestinasi = async(req, res) =>{
    try {
        const destinasi = await Destinasi.findOne({
            where: {
                id: req.params.id
            }
        });
        if(!destinasi) return res.status(404).json({msg: "Data tidak ditemukan"});
        const {tujuan,harga} = req.body;
        await Destinasi.update({tujuan,harga},{
            where: {
                id: destinasi.id
            }
        });
        res.status(200).json({msg: "Data Berhasil di Update!"});
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}