import express, { Router } from 'express';
import indexControler from '../controller/index.controller';

const indexRouter: Router = express.Router();

indexRouter.get('/', indexControler)

export default indexRouter