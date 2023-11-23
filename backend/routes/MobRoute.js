import express from "express";
import { 
    getMobil,
    getMobilById,
    createMobil,
    updateMobil
} from "../controllers/MobController.js";

const router = express.Router();

router.get('/mobil', getMobil);
router.get('/mobil/:id', getMobilById);
router.post('/mobil', createMobil);
router.patch('/mobil/:id', updateMobil);


export default router;