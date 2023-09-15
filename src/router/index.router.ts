import express from 'express';
import authRouter from './auth.router';
import testRouter from './test.router';

const router = express.Router();

export default (): express.Router => {
    testRouter(router)

    authRouter(router)

    return router
}
