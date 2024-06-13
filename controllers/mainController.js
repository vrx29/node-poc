// controllers/todoController.js
const Todo = require('../models/mainModel');

const getTodos = async (req, res) => {
  try {
    const todos = await Todo.getAllTodos();
    res.status(200).json(todos);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getTodo = async (req, res) => {
  try {
    const todo = await Todo.getTodoById(req.params.id);
    if (todo) {
      res.status(200).json(todo);
    } else {
      res.status(404).json({ message: 'Todo not found' });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const createTodo = async (req, res) => {
  try {
    const { title } = req.body;
    const todo = await Todo.createTodo(title);
    res.status(201).json(todo);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const updateTodo = async (req, res) => {
  try {
    const todo = await Todo.updateTodo(req.params.id, req.body);
    if (todo) {
      res.status(200).json(todo);
    } else {
      res.status(404).json({ message: 'Todo not found' });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const deleteTodo = async (req, res) => {
  try {
    await Todo.deleteTodo(req.params.id);
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  getTodos,
  getTodo,
  createTodo,
  updateTodo,
  deleteTodo,
};
