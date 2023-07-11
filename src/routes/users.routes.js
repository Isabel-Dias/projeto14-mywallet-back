import { Router } from "express";
import { signUp } from '../controllers/users.controller.js';
import { signIn } from '../controllers/auth.controller.js';

const router = Router();

router.post("/sign-up", signUp)
router.post("/sign-in", signIn)

export default router;