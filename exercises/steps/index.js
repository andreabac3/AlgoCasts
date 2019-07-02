// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n) {
	let _ = 1;
	while (_ <= n){ // steps
		let string = new Array(n);
		let i = 0;

		while (i < _){
			string[i] = '#'
			i++;
		}
		while (i < n){
			string[i] = ' ';
			i++;
		}
		_++
		console.log(string.join(''));
	}
}

module.exports = steps;
