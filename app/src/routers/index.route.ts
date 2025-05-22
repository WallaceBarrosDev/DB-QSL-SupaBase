import express, { Router } from 'express';
import IndexController from '../controller/IndexController';

const indexRouter: Router = express.Router();
const indexControler = new IndexController

indexRouter.get('/', indexControler.get)
indexRouter.post('/', indexControler.post)

export default indexRouter