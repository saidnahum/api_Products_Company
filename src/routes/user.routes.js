import { Router } from 'express';
import * as userController from '../controllers/user.controller';
import { authJwt, userValidate } from '../middlewares';

const router = Router();

router.post('/', [authJwt.verifyToken, authJwt.isAdmin, userValidate.checkRolesExisted], userController.createUser);


export default router;