import express from "express";
import { 
    getPembayaran,
    createPembayaran
} from "../controllers/BayarController.js";

const router = express.Router();

router.get('/pembayaran', getPembayaran);
router.post('/pembayaran', createPembayaran);


export default router;