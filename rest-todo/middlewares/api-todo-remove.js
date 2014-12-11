// file: middlewares/api-todo-remove.js - created at 2014-12-10, 09:22
function apiTodoRemoveHandler(req, res, next) {
  debug('api todo remove handler');
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

  function todoRemoveHandler(err, result) {
    debug('todo remove handler');
    if (!err) {
      successHandler(result);
    } else {
      failHandler(err);
    }
  }
  Todo
    .remove({ _id: req.params.id }, todoRemoveHandler);
}
module.exports = exports = apiTodoRemoveHandler;
