import {User} from "@prisma/client";

export interface UserCreateDto{
    name:string;
    email:string;
    password:string;
}

export interface UserLocalLoginDto{
    email:string;
    password:string;
}
export interface UserLoginResponseDto{
    success:boolean;
    payload?:string;
}

export type safeUser=Omit<User,"createdAt"| "updatedAt"| "emailVerified">&{
    createdAt:string;
    updatedAt:string;
    emailVerified:string|null;
}