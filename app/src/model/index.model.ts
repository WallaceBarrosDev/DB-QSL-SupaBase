import supabase from "./db/supabase";

export default function indexModel() {
    return {
        getall : () => supabase.from("Usuarios").select("*")
    }
}