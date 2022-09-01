import { User } from "@prisma/client";

export interface LoginResponse { 
    login : boolean,
    message : string,
    user : User | null
}