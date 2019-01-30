import * as KoaRouter from 'koa-router'
import UserController from './../controller/UserController'

import auth from './../middleware/auth'

const router = new KoaRouter();
router.prefix('/api/');
router.use(auth);

export default router;
