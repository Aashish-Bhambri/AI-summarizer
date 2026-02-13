import { configDotenv } from "dotenv";
import express from "express";
import type { Request,Response } from "express";
const app = express();
const port = process.env.PORT || 3000;

configDotenv();
app.get('/',(req:Request,res:Response)=>{
    res.send("Hello World!")
});
app.listen(port,()=>{
    console.log(`Server is runnning on http://localhost:${port}`)
}
)