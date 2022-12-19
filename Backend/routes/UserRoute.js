import { Express } from "express"; //Sirve para hacer uso de Node de manera correcta, ejemplo: Laravel con php
import{
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
}from "../controllers/userContoller"

const router = express.Router(); //Router() es para las rutas

router.get('/user',getUsers);
router.get('users/:id',getUserById);
router.post('user',createUser);
router.patch('/users/:id',updateUser)// funciona para actualizar, elimina y escribe en el mismo campo
router.delete('/user/:id',deleteUser);

export default router;