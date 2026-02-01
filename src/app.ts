import express, { Request, Response } from 'express'
import cors from 'cors'
import { userRoutes } from './modules/User/user.routes'

const app = express()

app.use(express.json())
app.use(cors())

app.use('/api/v1/user', userRoutes)



app.get('/', (req:Request, res:Response)=>{
    res.send('running practise beckend')
})



export default app;