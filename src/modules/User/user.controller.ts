import { Request, Response } from "express";
import { userServices } from "./user.services";

const createUser= async (req:Request, res:Response)=>{
    try {
        const user= req.body
        const result= await userServices.createUserIntoDB(user)
        res.status(200).json({
            success:true,
            message: 'user created successfully',
            data:result,
        })
    } catch (error) {
        
    }
}

export const userController={
    createUser
}