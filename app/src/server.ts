import express from 'express';
import cors from 'cors';
import dotEnv from 'dotenv';
import indexRouter from './routers/index.route';

const app = express();
app.use(cors());
app.use(express.json());
dotEnv.config();

app.use('/', indexRouter);

const PORT:string = process.env.PORT || '3000';
app.listen(PORT, ()=>{
    console.log(`port is ${PORT}`);
});