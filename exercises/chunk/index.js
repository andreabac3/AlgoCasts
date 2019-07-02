// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]



// SOL without slice function
function chunk2(array, size) {
	let result = [[]];
	let n = 0;
	let iter = 0;
	while (n < array.length){
		for(let i = 0 ; i < size ; i++){
			if (n > array.length-1){
				return result;
			}
			result[iter].push(array[n]);
			n++;
		}
		iter++;
		result.push(new Array());
	}
	return result;
}


// sol with slice
function chunk(array, size) {
	let result = [];
	let n = 0;
	while (n < array.length){
		result.push(array.slice(n, n + size));
		n += size;
	}
	return result;
}

console.log(chunk([1, 2, 3, 4, 5, 6, 7, 8], 3));
module.exports = chunk;
