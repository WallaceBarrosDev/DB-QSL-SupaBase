import { Request, Response } from "express";
import indexModel from "../model/index.model";

export default async function indexControler(_res: Request, res: Response) {
    const { data, error } = await indexModel().getall();

    if (error) res.status(401).json({message: 'pronblema ao conectar ao servidor, tende mais tarde'});

    res.status(500).json(data);
}