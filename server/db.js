import mysql2 from "mysql2/promise";
import dotenv from "dotenv";
dotenv.config();

const createPool = () => {
  try {
    return mysql2.createPool({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      port: 3306,
    });
  } catch (err) {
    return console.log(`Could not connect - ${err}`);
  }
};

const pool = createPool();

export default pool;
