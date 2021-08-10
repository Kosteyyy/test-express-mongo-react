import express from 'express';
import mongoose from 'mongoose';
import { DB_URL } from "./db_access.js";
import Contact from "./Contact.js";
import router from './router.js';

const PORT = 5000;

const app = express();
app.use(express.json());
app.use('/api', router);



async function startApp() {
	await mongoose.connect(DB_URL, { useNewUrlParser: true, useUnifiedTopology: true });
	app.listen(PORT, () => console.log(`SERVER STARTED AT PORT ${PORT}`));
}

startApp();