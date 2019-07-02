// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0


// NB many overheads, a solution to practice with the Reduce function

function countVolwels(cnt, char){
  const volwels = "aeiou";
    if (volwels.includes(char)){
      cnt+=1;
  }
  return cnt;
}

function vowels(str) {
	return str.toLowerCase().split("").reduce(countVolwels, 0);
}

module.exports = vowels;
