import app from './app';
import { createConnection } from './db';
createConnection();
app.listen(app.get('port'));

console.log('Server listening on http://localhost:3000');
