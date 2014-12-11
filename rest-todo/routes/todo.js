var express = require('express');
var router = express.Router();
var middlewares = require('../middlewares');
var controllers = require('../controllers');

router.post('/', middlewares.apiTodoCreate, controllers.apiTodoCreate);
router.get('/', middlewares.apiTodoList, controllers.apiTodoList);
router.get('/:id', middlewares.apiTodoRead, controllers.apiTodoRead);
router.put('/:id', middlewares.apiTodoEdit, controllers.apiTodoEdit);
router.delete('/:id', middlewares.apiTodoRemove, controllers.apiTodoRemove);

module.exports = router;
