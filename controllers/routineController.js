const Routine = require('../models/routineModel');

exports.createRoutine = async (req, res) => {
  try {
    const routine = await Routine.createRoutine(req.body);
    res.status(201).json(routine);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getRoutine = async (req, res) => {
  try {
    const routine = await Routine.getRoutineById(req.params.id);
    if (routine) {
      res.status(200).json(routine);
    } else {
      res.status(404).json({ message: 'Routine not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.updateRoutine = async (req, res) => {
  try {
    const routine = await Routine.updateRoutine(req.params.id, req.body);
    if (routine) {
      res.status(200).json(routine);
    } else {
      res.status(404).json({ message: 'Routine not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deleteRoutine = async (req, res) => {
  try {
    const routine = await Routine.deleteRoutine(req.params.id);
    if (routine) {
      res.status(204).json({ message: 'Routine deleted' });
    } else {
      res.status(404).json({ message: 'Routine not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
