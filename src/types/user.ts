export interface User {
    id: string;
    fullName: string;
    email: string;
    admin: boolean;
    social: string;
    anonymous: boolean;
}

export interface UserWithPassword extends User {
    password: string;
}
