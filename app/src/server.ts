import express from 'express';
import cors from 'cors';
import dotEnv from 'dotenv';

const app = express();
app.use(cors());
app.use(express.json());
dotEnv.config();

const PORT:string = process.env.PORT || '3000';
app.listen(PORT, ()=>{
    console.log(`port is ${PORT}`);
});