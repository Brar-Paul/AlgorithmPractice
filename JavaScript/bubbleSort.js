// BUBBLE SORT -- MOST INEFFICIENT WAY OF SORTING

import {longestArr} from "utils.js"

let bubbleSort = (inputArr) => {
    let len = inputArr.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len; j++) {
            if (inputArr[j] > inputArr[j + 1]) {
                let tmp = inputArr[j];
                console.log(inputArr[j] = inputArr[j+1]);
                inputArr[j] = inputArr[j + 1];
                inputArr[j + 1] = tmp;
                console.log(`temp is now ${tmp}`)
            }
        }
    }
    return inputArr;
};

// Here with longest array

bubbleSort(longestArr)


// Slightly more efficient way by utilising a swap bool

let bubbleSort2 = (inputArr) => {
    let len = inputArr.length;
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < len; i++) {
            if (inputArr[i] > inputArr[i + 1]) {
                let tmp = inputArr[i];
                inputArr[i] = inputArr[i + 1];
                inputArr[i + 1] = tmp;
                swapped = true;
            }
        }
    } while (swapped);
    return inputArr;
};