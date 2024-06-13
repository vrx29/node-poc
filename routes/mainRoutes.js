// routes/todoRoutes.js
const express = require('express');
const router = express.Router();
const todoController = require('../controllers/mainController');

router.get('/todos', todoController.getTodos);
router.get('/todos/:id', todoController.getTodo);
router.post('/todos', todoController.createTodo);
router.put('/todos/:id', todoController.updateTodo);
router.delete('/todos/:id', todoController.deleteTodo);

module.exports = router;
