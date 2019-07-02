// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function firstLetterUpperCase(str){
	return str[0].toUpperCase() + str.slice(1, str.length);
}

function capitalize(str) {
	return str.split(" ").map(firstLetterUpperCase).join(" ");
}

module.exports = capitalize;
