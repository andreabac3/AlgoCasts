// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

function fib(n) {
	if (0 >= n)
		return 0;
	else if (1 == n || 2 == n)
		return 1;
	let i = 0;
	let result = 1;
	let tmp = 0;
	while (n > 1){
		tmp = result;
		result = result + i;
		i = tmp;
		n--;
	}
	return result;
}

module.exports = fib;
