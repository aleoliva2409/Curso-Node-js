import { Router } from 'express'
import { deleteUser, getUserById, getUsers, patchUser, postUser } from '../controllers/users.controllers';


const router = Router()

router.get('/', getUsers)
router.get('/:id', getUserById)
router.post('/', postUser)
router.patch('/:id', patchUser)
router.delete('/:id', deleteUser)

export default router;
