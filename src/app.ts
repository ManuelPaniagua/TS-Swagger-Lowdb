import express from 'express';
import cors from 'cors';
import morgan from 'morgan';

const app = express();

app.use(cors()); // to connect with other servers
app.use(morgan('dev')); // to see the request
app.use(express.json());
app.set('port', process.env.PORT || 3000);

export default app;
