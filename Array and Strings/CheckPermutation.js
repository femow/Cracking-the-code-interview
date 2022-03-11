// Check Permutation:
// Given two strings, write a method to decide if one is a permutation of the other.

const a = "abc";
const b = "cba";

// Solution 1
// The ordered strings is equal
// function checkPermutation(stringA, stringB) {
//     if(stringA.length !== stringB.length) {
//         return false;
//     }
//     const sortedStringA = stringA.split("").sort();
//     const sortedStringB = stringB.split("").sort();

//     if(JSON.stringify(sortedStringA) === JSON.stringify(sortedStringB)) {
//         return true;
//     }
//     return false;
// }

// Solution 2
// Check the counting characters
function checkPermutation(stringA, stringB) {
    const dictionaryA = {}; 
    stringA.split("").forEach(c => {
        if(dictionaryA[c] === undefined) {
            dictionaryA[c] = 1;
        } else {
            dictionaryA[c]++;
        }
    });
    for(let i = 0; i < stringB.length; i++) {
        const charB = stringB[i];
        if(dictionaryA[charB]) {
            dictionaryA[charB]--;
            if(dictionaryA[charB] < 0) {
                return false;
            }
        } else {
            return false;
        }
    }

    return true;
}



// This is a O(N²) solution...
console.log(checkPermutation(a, b));