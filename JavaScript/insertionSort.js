// INSERTION SORT METHOD

import {longestArr} from "utils.js"

const insertionSort = (arr) => {
    // Initialise a loop to go through the array
    // its running whilst it "i" is less than the length of the array
    for(let i = 0; i < arr.length; i++){
        // J is always i-1, meaning it is the one to move backwards or to the top of the arr.
        let j = i-1;
        // this temporary storage is the current value of the arrays INDEX at I
        let temp = arr[i];
    // THis loop runs whilst j is less than or equal to 0, 
    // AND the value stored at array[j] index is LESS than temp
        while(j >= 0 && arr[j] > temp) {
            // This moves the item down towards the left of the array.
            arr[j+1] = arr[j]
            // This decrements J
            j--;
        }
        // This pushes the value into the temporary array for evaluation.
        arr[j+1] = temp;
    }
    return arr;
}

// We can see the results of this if we use the longestArr 

console.log(`This array is long and unorganised. ${longestArr}`);

// However when we use the insertionSort from above it will return the array from smallest to largest.

insertionSort(longestArr);