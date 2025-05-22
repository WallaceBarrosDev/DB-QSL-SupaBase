import { UserLocal } from "../types";
import supabase from "./db/supabase";

export default class IndexModel {
    
    public selectAll() {
        return supabase.from("Usuarios").select("*");
    }

    public selectByEmail(email: string) {
        return supabase.from("Usuarios").select("*").eq("email", email).single();
    }

    public insertNew(user: UserLocal) {
        return supabase.from("Usuarios").insert(user);
    }

    public updateByEmail(newName: string, email: string) {
        return supabase.from("Usuarios").update({name: newName}).eq("email", email);
    }

    public deleteByEmail(email: string) {
        return supabase.from("Usuarios").delete().eq("email", email);
    }
}