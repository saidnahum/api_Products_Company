import { Router } from 'express';
const router = Router();

import * as authController from '../controllers/auth.controller';

// RGISTER
router.post('/register', authController.register);
router.post('/login', authController.login);


// LOGIN


export default router;