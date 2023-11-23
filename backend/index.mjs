import express from "express";
import cors from "cors";
import UserRoute from "./routes/UserRoute.js";
import MobRoute from "./routes/MobRoute.js";
import db from "./config/database.js";
import BayarRoute from "./routes/BayarRoute.js";


const app = express()
app.use(cors({ credentials:true, origin:'http://localhost:3000' }));
app.use(express.json());
app.use(UserRoute);
app.use(MobRoute);
app.use(BayarRoute);

try {
    await db.authenticate();
    console.log('Database connected...');
    // await db.sync();
} catch (error) {
    console.log(error);
}

app.listen(5000, ()=> console.log('Server up and running...'));