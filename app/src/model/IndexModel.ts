import supabase from "./db/supabase";

export default class IndexModel {
    
    public selectAll() {
        return supabase.from("Usuarios").select("*");
    }
}