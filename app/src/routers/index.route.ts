import express, { Router } from 'express';
import IndexController from '../controller/IndexController';

const indexRouter: Router = express.Router();
const indexControler = new IndexController

indexRouter.get('/', indexControler.get)
indexRouter.get('/:email', indexControler.getUser)
indexRouter.post('/', indexControler.post)
indexRouter.delete('/:email', indexControler.deleteUser)

export default indexRouter