import { Request, Response } from "express";
import IndexModel from "../model/IndexModel";
import { UserLocal } from "../types";

export default class IndexController {
    private _indexModel: IndexModel;

    constructor() {
        this._indexModel = new IndexModel();
    }

    public getAllUser = async (_req: Request, res: Response) => {
        const { data, error } =  await this._indexModel.selectAll();
        if (error) { res.json({message: error}); return }
        res.json(data);
    }

    public getUser = async (req: Request, res: Response) => {
        const email = req.params.email
        const { data, error} = await this._indexModel.selectByEmail(email)
        if (error) { res.json({error: error}); return}
        res.json(data); 
    }

    public insertUser = async (req: Request, res: Response) => {
        const user: UserLocal = req.body.user;
        const { data, error } =  await this._indexModel.insertNew(user);
        if (error) { res.json({message: error}); return }
        res.json({message: "Usuario cirado"});
    }

    public deleteUser = async (req: Request, res: Response) => {
        const email = req.params.email;
        const { data, error } = await this._indexModel.deleteByEmail(email);
        if (error) { res.json({error: error}); return};
        res.json({message: `Usuairio do email: ${email}, Deletado`});
    }
}