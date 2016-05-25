var v = require('./index.js');

v(function (err, items) {
  console.log(JSON.stringify(items,null,2));
});
