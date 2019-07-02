// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n) {
  const width = n * 2 - 1;
  let result = new Array(width).fill(' ');
  const pos = width / 2 >> 0;
  result[pos] = '#';
  let next = pos + 1;
  let prev = pos - 1;
  let iter = 1;
  console.log(result.join(""));
  while (iter < n){
    result[next] = '#';
    result[prev] = '#';
    next ++;
    prev --;
    console.log(result.join(""));
    iter ++;
  }
}
module.exports = pyramid;
