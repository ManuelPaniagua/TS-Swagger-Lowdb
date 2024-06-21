import { Handler } from 'express';

//in TS we need to specify that this is handler with express
export const getTasks: Handler = (req, res) => res.send('Hello world!');
