import exp from "constants";

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