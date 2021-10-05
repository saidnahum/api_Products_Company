import app from './app';
import './database';

// Para escuchar server en la ip local 
// app.listen(3001, '192.168.100.8');

app.listen(3001);
console.log('Server on port:', 3001);