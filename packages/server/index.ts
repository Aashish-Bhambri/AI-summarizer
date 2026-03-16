import { configDotenv } from 'dotenv';
import express from 'express';
import type { Request, Response } from 'express';
import { chatController } from './controllers/chat.controller';
import router from './routes';


const app = express();
app.use(express.json());
app.use(router);

const port = process.env.PORT || 3000;

configDotenv();

app.listen(port, () => {
   console.log(`Server is runnning on http://localhost:${port}`);
});
 