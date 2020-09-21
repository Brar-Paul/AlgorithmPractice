/* --- Utilisable JS methods and functions that make using the code a bit more functional ----- */

// longestArr gives a randomly generated array from 0 > 120, with random values
const longestArr = Array.from({length: 120}, () => Math.floor(Math.random() * 120));

const swap = (items, firstIndex, secondIndex) => {
    var temp = items[firstIndex];
    items[firstIndex] = items[secondIndex];
    items[secondIndex] = temp;
};

export {longestArr as longestArr, swap as swap};