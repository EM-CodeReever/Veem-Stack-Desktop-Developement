import axios from "axios";
import type { User } from "@prisma/client";
const URL = 'http://localhost:4545/api'
export default class DataService {
    static async createUser(newUser:User){
        try{
            const res = await axios.post(URL + "/users",{
                newUser
            })
            return res.data
        }catch(err){
            console.log(err);
        }
    }
    static async getAllUsers(){
        try{
            const res = await axios.get(URL + "/users")
            return res.data
        }catch(err){

        }
    }
    static async getUser(id:string){
        try {
            const res = await axios.get(URL + `/users/${id}`)
            return res.data
        } catch (error) {
            console.log(error);
        }
    }
}
