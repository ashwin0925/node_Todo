var express = require('express');
var router = express.Router();
var Todo = require('../models/todo')

// /* GET home page. */
// router.get('/', function (req, res, next) {
//   res.render('index', { title: 'Express' });
// });

// Render Page
// router.get('/create', (req, res) => {
//   res.render('index');
// })

// Create Todo

router.post('/', (req, res, next) => {
  var todoData = req.body;
  Todo.create(todoData, (err, createdTodo) => {
    if (err) return next(err)
    res.redirect('/')
  })
})

router.get('/', (req, res) => {
  Todo.find({}, (err, todos) => {
    if (err)
      return next(err);
    res.render('todos', { todos })
  })
})

//Delete
router.get('/:id/delete', (req, res, next) => {
  Todo.findByIdAndRemove(req.params.id, (err, data) => {
    if (err)
      return next(err)
    res.redirect('/')
  })
})

// Edit
router.get('/:id/edit', (req, res, next) => {
  Todo.findById(req.params.id, (err, todo) => {
    res.render('editForm', { todo })
  })
})

router.post('/:id/update', (req, res, next) => {
  req.body.isCompleted === 'on' ? req.body.isCompleted = true : req.body.isCompleted = false;
  Todo.findByIdAndUpdate(req.params.id, req.body, (err, data) => {
    if (err) return next(err);
    res.redirect('/');
  })
})


module.exports = router;
