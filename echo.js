var spawn = require('child_process').spawn,
    echo = spawn('echo', ['Hello']);

echo
  .stdout
  .pipe(process.stdout);
