import {Router} from "express";
import {signIn, signUp} from "../controllers/auth.controller.js";

const router = Router();


router.post("/users/signin", signIn);
router.post("/users/signup", signUp);

export default router;
