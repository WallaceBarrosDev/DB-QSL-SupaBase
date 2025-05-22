import { Request, Response } from "express";
import IndexModel from "../model/IndexModel";

export default class IndexController {
    private _indexModel: IndexModel;

    constructor() {
        this._indexModel = new IndexModel();
    }

    public async get(_req: Request, res: Response) {
        const { data, error } =  await this._indexModel.selectAll();
        if (error) res.json({message: error});
        res.json(data);
    }
}