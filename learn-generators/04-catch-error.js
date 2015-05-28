/* jshint esnext: true */

function *upper (items) {
  for (var i = 0; i < items.length; i++) {
    var result = null;
    try {
      result = items[i].toUpperCase();
    }
    catch (e) {
      //
    }
    yield result;
  }
}

var bad_items = ['a', 'B', 1, 'c'];

for (var item of upper(bad_items)) {
  console.log(item);
}
// want to log: A, B, null, C
