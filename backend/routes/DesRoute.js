import express from "express";
import { 
    getDestinasi,
    getDestinasiById,
    createDestinasi,
    updateDestinasi
} from "../controllers/DesController.js";

const router = express.Router();

router.get('/destinasi', getDestinasi);
router.get('/destinasi/:id', getDestinasiById);
router.post('/destinasi', createDestinasi);
router.patch('/destinasi/:id', updateDestinasi);


export default router;