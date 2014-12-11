// file: middlewares/api-todo-create.js - created at 2014-12-10, 08:46
function apiTodoCreateHandler(req, res, next) {
  debug('api todo create handler');
  var Todo = models.Todo;

  res.locals.out = { err: null, result: {}, status: false };

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

  function todoCreateHandler(err, result) {
    debug('todo create handler');
    if (!err) {
      successHandler(result);
    } else {
      failHandler(err);
    }
  }
  Todo
    .create(req.body, todoCreateHandler);
}
module.exports = exports = apiTodoCreateHandler;
