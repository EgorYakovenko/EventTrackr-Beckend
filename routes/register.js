import express from 'express';
import validateBody from '../helpers/validateBody.js';
import { register } from '../controllers/registerController.js';
import { registerSchema } from '../schemas/user.js';

export const registerUserRouter = express.Router();

registerUserRouter.post('/register', validateBody(registerSchema), register);
