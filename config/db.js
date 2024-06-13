// CREATE DATABASE todoapp;
// \c todoapp;

// CREATE TABLE todos (
//     id SERIAL PRIMARY KEY,
//     title VARCHAR(100) NOT NULL,
//     completed BOOLEAN DEFAULT FALSE
// );

// config/db.js
const { Pool } = require('pg');

const pool = new Pool({
  user: 'your_username',
  host: 'localhost',
  database: 'todoapp',
  password: 'your_password',
  port: 5432,
});

module.exports = pool;
