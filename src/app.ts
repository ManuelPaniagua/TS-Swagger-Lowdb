import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
//Import Routes
import taskRoutes from './routes/tasks.routes';

const app = express();

app.use(cors()); // to connect with other servers
app.use(morgan('dev')); // to see the request
app.use(express.json());
app.set('port', process.env.PORT || 3000);

//Use imported route
app.use(taskRoutes);

export default app;
