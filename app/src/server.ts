import { createClient } from '@supabase/supabase-js';
import express, { Request, Response } from 'express';
import dotenv from 'dotenv';

const app = express();
const PORT: number = 3000
dotenv.config();

const supabaseURL = process.env.SUPABASE_URL as string
const supabaseKey = process.env.SUPABASE_KEY as string
const supabase = createClient(supabaseURL, supabaseKey);

app.get('/', async (_req: Request, res: Response) => {
    const { data, error } = await supabase.from("Usuarios").select("*");
    if (error) { res.json({message: error}); return; };    
    res.json(data);
});

app.listen(PORT, () => {
    console.log("server na porta:" + PORT);
})