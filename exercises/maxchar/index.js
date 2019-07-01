// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
	let dict = {};
  for (let i = 0; i < str.length ; i++){
  	if (dict[str[i]] == undefined){
  		dict[str[i]] = 0;
  	}
  	dict[str[i]] += 1;
  }
  return Object.keys(dict).reduce((a, b) => dict[a] > dict[b] ? a : b);
}
console.log(maxChar("abcccccccd"));
module.exports = maxChar;
