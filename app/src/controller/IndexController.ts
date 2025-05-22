import { Request, Response } from "express";
import IndexModel from "../model/IndexModel";

export default class IndexController {
    private _indexModel: IndexModel;

    constructor() {
        this._indexModel = new IndexModel();
    }

    public get = async (_req: Request, res: Response) => {
        const { data, error } =  await this._indexModel.selectAll();
        if (error) { res.json({message: error}); return }
        res.json(data);
    }

    public getUser = async (req: Request, res: Response) => {
        const email = req.params.email
        const { data, error} = await this._indexModel.select(email)
        if (error) { res.json({error: error}); return}
        res.json(data); 
    }

    public post = async (_req: Request, res: Response) => {
        const { data, error } =  await this._indexModel.insert();
        if (error) { res.json({message: error}); return }
        res.json({message: "Usuario cirado"});
    }
}