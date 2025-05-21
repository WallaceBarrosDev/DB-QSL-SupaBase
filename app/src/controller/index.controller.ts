import { Request, Response } from "express";

export default function indexControler(_res: Request, res: Response) {
    res.status(500).json({message: 'rota index'});
}