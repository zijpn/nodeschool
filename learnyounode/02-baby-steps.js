var sum = 0;
var count = process.argv.length;
for (var i=2; i<count; i++) {
  sum += Number(process.argv[i]);
}
console.log(sum);
