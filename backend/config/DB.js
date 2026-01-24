import  dotenv  from 'dotenv';
import  { Pool } from 'pg';

dotenv.config();

const pool = new Pool({
  host: process.env.DB_HOST,
  port: process.env.PORT,
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD
});

pool.on('connect', () => {
  console.log('connected to dataBase');
});
pool.on('error', (err) => console.log('error connecting to DB', err))

export default  pool;

