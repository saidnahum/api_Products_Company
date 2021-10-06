import { Router } from 'express';
import { userValidate } from '../middlewares'
const router = Router();

import * as authController from '../controllers/auth.controller';

// RGISTER
router.post('/register', [userValidate.checkDuplicateUsernameOrEmail, userValidate.checkRolesExisted],  authController.register);
router.post('/login', authController.login);


// LOGIN


export default router;