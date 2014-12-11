// file: middlewares/api-todo-edit.js - created at 2014-12-10, 09:17
function apiTodoEditHandler(req, res, next) {
  debug('api todo edit handler');
  var Todo = models.Todo;

  res.locals.out = { err: null, result: 0, status: false };

  function successHandler(result) {
    debug('success handler');
    res.locals.out.result = result;
    res.locals.out.status = true;
    next();
  }

  function failHandler(err) {
    debug('fail handler');
    res.locals.out.err = err;
    next(err);
  }

  function todoUpdateHandler(err, result) {
    debug('todo update handler');
    if (!err) {
      successHandler(result);
    } else {
      failHandler(err);
    }
  }
  Todo
    .update({ _id: req.params.id }, req.body, todoUpdateHandler);
}
module.exports = exports = apiTodoEditHandler;
