import express from 'express';
import { CheckToken  } from '../middlewares/index.middleware';

import { Test } from '../controllers/test.controller';

export default (router: express.Router) => {
    router.get('/test', CheckToken, Test)
}