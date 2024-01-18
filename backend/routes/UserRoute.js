import express from "express";
import { 
    getUsers,
    getUserById,
    createUsers
} from "../controllers/UserController.js";

const router = express.Router();

router.get('/users', getUsers);
router.get('/users/:id', getUserById);
router.post('/users', createUsers);


export default router;