import {defineStore} from "pinia";
import { Gender, Role, User } from "@prisma/client";


let currentUser: User  =  {
    id: "",
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber : "1234567890",
    passwordHash: "",
    role : Role.USER,
    userName : "",
    gender : Gender.NA
};

// let newUser: User  =  {
//     id: "",
//     firstName: "",
//     lastName: "",
//     email: "",
//     passwordHash: "",
//     role : Role.USER,
//     userName : ""
// };



export const currentUserStore = defineStore("currentUser", {
    state:()=>({
        user : currentUser,
        loggedIn : false,
    }),
    actions:{
        setCurrentUser(user:User){
            this.loggedIn = true
            this.user = user
            this.user.passwordHash = ""
        }
    },
    getters:{
        fullName():string{
            return this.user.firstName + " " + this.user.lastName;
        },
        isAdmin():boolean{
            return this.user.role == Role.ADMIN
        },
        isManager():boolean{
            return this.user.role == Role.MANAGER
        },
        isUser():boolean{
            return this.user.role == Role.USER
        }
    },
    // persist: true
})




