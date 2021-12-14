// for each function examples
const nmbrs = [2, 3, 4, 5, 6]; //array of numbers
nmbrs.forEach((n, i, arr) => {
  // n=elements // i=index //
  arr[i] = n + 2;
});
nmbrs.forEach((n) => console.log(n));
