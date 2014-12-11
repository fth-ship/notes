// file: middlewares/api-todo-list.js - created at 2014-12-10, 09:02
function apiTodoListHandler(req, res, next) {
  debug('api todo list handler');
  var Todo = models.Todo;

  res.locals.out = { err: null, result: [], status: false };

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

  function todoFindHandler(err, result) {
    debug('todo find handler');
    if (!err) {
      successHandler(result);
    } else {
      failHandler(err);
    }
  }
  Todo
    .find({})
    .lean(true)
    .exec(todoFindHandler);
}
module.exports = exports = apiTodoListHandler;
