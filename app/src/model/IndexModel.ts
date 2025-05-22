import { UserLocal } from "../types";
import supabase from "./db/supabase";

export default class IndexModel {
    
    public selectAll() {
        return supabase.from("Usuarios").select("*");
    }

    public select(email: string) {
        return supabase.from("Usuarios").select("*").eq("email", email).single();
    }

    public async insert() {
        return await supabase.from("Usuarios").insert(this.datateste())
    }

    private datateste(): UserLocal {
        const user: UserLocal = {
            name: 'wallace barros',
            email: 'wallace@gmail.com',
            password: '0987654321'
        }

        return user
    }
}