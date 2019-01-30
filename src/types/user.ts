export interface User {
    id: string;
    fullName: string;
    email: string;
    admin: boolean;
    social: string;
}

export interface UserWithPassword extends User {
    password: string;
}
