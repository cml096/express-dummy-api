import express, { Express } from 'express';
import ErrorHandler from './middlewares/ErrorHandler';
import healthCheckRoute from './routes/HealthCheck.route';
import nasaRoute from './routes/Nasa.route';
import dotenv from 'dotenv';

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;
// Middleware
app.use(ErrorHandler);

// Routes
app.use('/v1/healthcheck', healthCheckRoute);
app.use('/v1/nasa', nasaRoute);

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});