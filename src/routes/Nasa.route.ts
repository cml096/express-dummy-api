import express from 'express';
import * as NasaController from '../controllers/Nasa.controller';

const router = express.Router();

router.get('/', NasaController.get);

export default router;