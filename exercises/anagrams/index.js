// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function charDictionary(string){
	let dict = {};
	for (let char of string){
		dict[char] = dict[char] + 1 || 1;
	}
	return dict;
}

function anagrams(stringA, stringB) {
	stringA = stringA.toLowerCase().replace(/[^\w\s]|_/g, "");
	stringB = stringB.toLowerCase().replace(/[^\w\s]|_/g, "");
	let setA = charDictionary(stringA);
	let setB = charDictionary(stringB);
	let charA = Object.keys(setA);
	let charB = Object.keys(setB);
	// check if the strings don't have the same char.
	if (charA.length !== charB.length){
		return false;
	}
	// the strings have the same char, count the char occurrences in each string.
	for(let char of charA){
		if (setA[char] !== setB[char]){
			return false;
		}
	}
	return true;
}
module.exports = anagrams;
