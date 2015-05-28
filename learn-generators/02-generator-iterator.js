/* jshint esnext: true */

function *factorial(n){
  var f = 1;
  for (var i = 1; i <= n; i++) {
    f *= i;
    yield f;
  }
}

for (var n of factorial(5)) {
  console.log(n);
}
// 1, 2, 6, 24, 120
