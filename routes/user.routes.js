import { Router } from 'express'
import authorize from '../middlewares/auth.middleware.js';
import { getUser, getUsers } from '../controllers/user.controller.js';

const userRouter = Router();
userRouter.get('/', getUsers)
userRouter.get('/:id', authorize, getUser)
userRouter.post('/', (req, res) => res.send('Create New User'))
userRouter.put('/:id', (req, res) => res.send('Update Specific User'))
userRouter.delete('/:id', (req, res) => res.send('Delete Specific User'))

export default userRouter;

