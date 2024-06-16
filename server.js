const express = require('express');
const bodyParser = require('body-parser');
const routineRoutes = require('./routes/routineRoutes');
const pool = require('./config/db');

const app = express();

app.use(bodyParser.json());

app.use('/api', routineRoutes);

// pool
//   .query(
//     `
//     CREATE TABLE IF NOT EXISTS routines (
//         routineId SERIAL PRIMARY KEY,
//         routineName VARCHAR(255) NOT NULL,
//         routineStatus VARCHAR(255) NOT NULL,
//         routineSelected INTEGER NOT NULL,
//         standByStartTime TIME WITH TIME ZONE NOT NULL,
//         standByEndTime TIME WITH TIME ZONE NOT NULL,
//         completeOffStartTime TIME WITH TIME ZONE NOT NULL,
//         completeOffEndTime TIME WITH TIME ZONE NOT NULL,
//         backlight INTEGER NOT NULL,
//         deviceTemp FLOAT NOT NULL,
//         deviceEnergy FLOAT NOT NULL
//     )
// `
//   )
//   .then(() => {
//     console.log('Database & tables created!');
//   })
//   .catch((err) => console.log('Error: ' + err));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
