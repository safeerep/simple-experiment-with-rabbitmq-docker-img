import express, { Request, Response} from 'express'
import { login, signUp} from '../controllers/userController'
const router = express.Router()


router.get('/' , (req: Request, res: Response) => {
    res.send('auth service is simply working with ts')
})

router.post('/login', login)
router.post('/sign-up', signUp)


export default router;