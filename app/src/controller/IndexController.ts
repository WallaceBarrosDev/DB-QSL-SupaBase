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

    public post = async (_req: Request, res: Response) => {
        const { data, error } =  await this._indexModel.insert();
        if (error) { res.json({message: error}); return }
        res.json(data);
    }
}