import jwt, { Secret } from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config()

export const generateToken = async (userId: string) => {
    try {
        if (!process.env.JWT_TOKEN_SECRET) throw new Error('secret key not found')
        const token = jwt.sign({userId: userId}, process.env.JWT_TOKEN_SECRET as Secret , {expiresIn: '30d'})
        return token;
    } catch (error) {
        console.log(error);
        return 'something went wrong'
    }
}


