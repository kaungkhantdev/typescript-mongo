import express from 'express';
import { AuthController } from "../controllers/index.controller";

const auth = new AuthController();

export default (router: express.Router) => {
    router.post('/login', auth.login )
}
