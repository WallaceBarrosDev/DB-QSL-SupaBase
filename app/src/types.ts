export type User = {
    id: number,
    created_at: string,
    name: string,
    email: string,
    password: string
}

export type UserLocal = Omit<User, 'id' | 'created_at'>