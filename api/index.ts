import { Router, Request, Response } from "express";
import { PrismaClient, User } from '@prisma/client'
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
                    }
                })
                console.log(result);
                res.json(result)
            }else{
                let result = await prisma.user.findMany({})
                res.json(result)
            }
        })
        .post(async (req:Request, res:Response)=>{
            try{

            }catch(err){
                console.log(err);
            }
            console.log(req.body.newUser);
            const user = req.body.newUser as User
            const result = await prisma.user.create({
                data : {
                    email : user.email,
                    firstName : user.firstName,
                    lastName : user.lastName
                },
            })
            res.json({
                message : 'done',
                result
            })
        })

        return router
    }
}