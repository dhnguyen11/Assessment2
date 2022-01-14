var express = require('express');
var router = express.Router();
var todos = require('../data/todos')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { todos: todos.todos });
});

router.post('/', function(req, res, next) {
  todos.todos.push({ todo: req.body.todo, done: false });
  res.render('index', { todos: todos.todos });
});

router.delete('/:id', function(req, res, next) {
  todos.todos.splice(req.params.id, 1);
  res.render('index', { todos: todos.todos });
})

module.exports = router;
