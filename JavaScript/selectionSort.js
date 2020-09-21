// SELECTION SORT METHOD
// import the swapping method and LA from UTILS.
import {longestArr, swap} from "utils.js"

// This method sorts the array by repeatedely finding the the minimum element 
// (Considering ascending order) From an unsorted array and putting it at the bgeinning.

const selectionSort = (items) => {
    let len = items.length,
        min;
    for (let i = 0; i < len; i++){
        min = i;
        for(let j = i+1; j < len; j++){
            if(items[j] < items[min]){
                min = j;
            }
        }
        
        // Uf minimum isnt in the position, SWAP
        if( i != min){
            swap(items, i, min);
        }
    }
    return items;
}

console.log(`This array is unsorted: ${longestArr}`)
console.log(`This is however sorted correctly:`)
selectionSort(longestArr);