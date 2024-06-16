const pool = require('../config/db');

const createRoutine = async (routine) => {
  const {
    routineName,
    routineStatus,
    routineSelected,
    standByStartTime,
    standByEndTime,
    completeOffStartTime,
    completeOffEndTime,
    backlight,
    deviceTemp,
    deviceEnergy,
  } = routine;
  const result = await pool.query(
    'INSERT INTO routines (routineName, routineStatus, routineSelected, standByStartTime, standByEndTime, completeOffStartTime, completeOffEndTime, backlight, deviceTemp, deviceEnergy) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING *',
    [
      routineName,
      routineStatus,
      routineSelected,
      standByStartTime,
      standByEndTime,
      completeOffStartTime,
      completeOffEndTime,
      backlight,
      deviceTemp,
      deviceEnergy,
    ]
  );
  return result.rows[0];
};

const getRoutineById = async (id) => {
  const result = await pool.query(
    'SELECT * FROM routines WHERE routineId = $1',
    [id]
  );
  return result.rows[0];
};

const updateRoutine = async (id, routine) => {
  const {
    routineName,
    routineStatus,
    routineSelected,
    standByStartTime,
    standByEndTime,
    completeOffStartTime,
    completeOffEndTime,
    backlight,
    deviceTemp,
    deviceEnergy,
  } = routine;
  const result = await pool.query(
    'UPDATE routines SET routineName = $1, routineStatus = $2, routineSelected = $3, standByStartTime = $4, standByEndTime = $5, completeOffStartTime = $6, completeOffEndTime = $7, backlight = $8, deviceTemp = $9, deviceEnergy = $10 WHERE routineId = $11 RETURNING *',
    [
      routineName,
      routineStatus,
      routineSelected,
      standByStartTime,
      standByEndTime,
      completeOffStartTime,
      completeOffEndTime,
      backlight,
      deviceTemp,
      deviceEnergy,
      id,
    ]
  );
  return result.rows[0];
};

const deleteRoutine = async (id) => {
  const result = await pool.query(
    'DELETE FROM routines WHERE routineId = $1 RETURNING *',
    [id]
  );
  return result.rows[0];
};

module.exports = {
  createRoutine,
  getRoutineById,
  updateRoutine,
  deleteRoutine,
};
