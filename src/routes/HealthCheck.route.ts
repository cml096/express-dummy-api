import express from 'express';
import * as healthCheckController from '../controllers/HealthCheck.controller';

const router = express.Router();

/* GET health check. */
router.get('/', healthCheckController.get);

export default router;