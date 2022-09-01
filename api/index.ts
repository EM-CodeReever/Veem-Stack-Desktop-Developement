import { Router, Request, Response } from "express";
import { PrismaClient, User} from '@prisma/client'
import { LoginResponse } from "../src/Interfaces";
import bcrypt from 'bcrypt'
const prisma = new PrismaClient()

export default class Routes{
    static routes():Router{

        const router:Router = Router()

        router.post('/',async (req:Request, res:Response)=>{
            res.json({message:'hello world! 😊'})
        })

        router.route('/users/:id?')
        .get(async (req:Request, res:Response)=>{
            let id = req.params.id
            if(id){
                let result = await prisma.user.findFirst({
                    where : {
                        id : id
                    },
                    include : {
                        reviews : true
                    }
                })
                console.log(result);
                res.json(result)
            }else{
                let result = await prisma.user.findMany({
                    include : {
                        reviews : true
                    }
                })
                res.json(result)
            }
        })
        .post(async (req:Request, res:Response)=>{
            try{
                console.log(req.body.newUser);
                const user = req.body.newUser as User
                let hash = await bcrypt.hash(user.passwordHash as string, 10)
                const result = await prisma.user.create({
                    data : {
                        email : user.email,
                        phoneNumber : user.phoneNumber,
                        firstName : user.firstName,
                        lastName : user.lastName,
                        userName : user.userName,
                        role : user.role,
                        gender : user.gender,
                        passwordHash : hash
                    },
                })
                res.json({
                    message : 'done',
                    result
                })
            }catch(err){
                console.log(err);
            }
        })
        router.post('/login',async (req:Request, res:Response) => {
            let user = req.body.user as User
            let loginRes : LoginResponse
            try {
                let result = await prisma.user.findFirst({
                    where : {
                        userName : user.userName
                    },
                    include : {
                        reviews : true
                    }
                })
                if(result?.passwordHash){
                    if (await bcrypt.compare(user.passwordHash as string, result?.passwordHash as string)) {
                        loginRes = {
                            login : true,
                            message : "Login Success",
                            user : result,
                        }
                        
                    }else{
                        loginRes = {
                            login : false,
                            message : "Incorrect Password",
                            user : null,
                        }
                    }
                }else{
                    loginRes = {
                        login : false,
                        message : "Incorrect Username",
                        user : null,
                    }
                }
                res.json(loginRes)
            } catch (error) {
                console.log(error);
            }
        })
        return router
    }
}