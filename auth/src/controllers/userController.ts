import { Request, Response } from 'express'
import { usersCollection, User} from '../models/userModel'
import { generateToken} from './authController'
import bcrypt from 'bcrypt'


export const login = async (req: Request, res: Response) :Promise <void> => {
    try {
        const userEmail: string = req.body.Email;
        const userDetails: User | null = await usersCollection.findOne({Email: userEmail})
        if (userDetails) {
            const passwordMatching: boolean = await bcrypt.compare(req.body.Password, userDetails.Password);
            if (passwordMatching) {
                const jwtToken = await generateToken(userDetails._id)
                res.cookie('userJwt', jwtToken, {maxAge: 30 * 24 * 60 * 60 * 1000 })
                res.json({success: true, message: 'verified user'})
            }
            else {
                throw new Error ('invalid credentials')
            }
        }
        else {
            throw new Error ('invalid credentials')
        }
    } catch (error) {
        res.json({success: false, message: error})
    }
}

export const signUp = async (req: Request, res: Response) :Promise <void> => {
    try {
        req.body.Password = bcrypt.hashSync(req.body.Password, 10)
        const { Email, Password, Phone}: User = req.body;

        const newUser: User = await usersCollection.create({
            Email, Password, Phone
        })
        if (newUser) {
            res.json({success: true, message: 'successfully created an account'})
        } else {
            throw new Error('something went wrong')
        }
    } catch (error: any) {
        if (error && error.code === 11000) {
            res.json({success: false, message: 'already registered user credentials'})
        } else {
            res.json({success: false, message: 'something went wrong'})
        }
    }
}










