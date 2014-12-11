var fs = require('fs');
var out = '';

for (var i = 0, l = 1000000; i < l; i += 1) {
  out += 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum a nulla libero. Donec placerat pellentesque euismod. Vestibulum tempor ornare laoreet. Aenean vehicula neque quam. Proin vitae ante vel est congue tempor vitae vitae lorem. Ut id ultricies ante. Praesent non bibendum tellus. Pellentesque condimentum viverra maximus. Integer scelerisque ullamcorper rutrum. Cras placerat volutpat erat in sagittis. Nam in eros nec massa porttitor suscipit. Mauris et egestas ligula, sit amet tincidunt ex. Vivamus ac sodales quam.';
}

fs.writeFile('./output.txt', out, function (err) {
  console.log(err);
  console.log('Done!');
});

console.log('Processing...');
