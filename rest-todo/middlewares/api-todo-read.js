// file: middlewares/api-todo-read.js - created at 2014-12-10, 09:11
function apiTodoReadHandler(req, res, next) {
  debug('api todo read handler');
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

  function todoFindOneHandler(err, result) {
    debug('todo find one handler');
    if (!err) {
      successHandler(result);
    } else {
      failHandler(err);
    }
  }
  Todo
    .findOne({ _id: req.params.id })
    .lean(true)
    .exec(todoFindOneHandler);
}
module.exports = exports = apiTodoReadHandler;
