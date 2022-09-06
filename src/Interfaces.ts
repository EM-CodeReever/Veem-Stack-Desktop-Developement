import { User } from "@prisma/client";

export interface LoginResponse { 
    login : boolean,
    message : string,
    user : User | null
}

export class UserValidation {
    static  email(emailString:string):boolean{
        const regex = new RegExp(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)/);
        return regex.test(emailString)
    }
    static phone(number:string):boolean {
        const regex = new RegExp(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im);
        return regex.test(number);
    }
}