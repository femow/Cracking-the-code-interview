// Palindrome Permutation
// Givin a string, write a function to check if it is a permutation of a palindrome.
// A palindrome is a word or phrase that is the same forwards and backwards. A permutation is
// a rearrangement of letters. The palindrome does not need to be limited to just dictionary words.

const tactCoa = "tact coa";
const palindromesOfTactCoa = [
    "taco cat", // TRUE
    "atco cta", // TRUE
    "ttac cat", // FALSE
]

function checkPalindrome(word, palindrome) {
    if(word.length !== palindrome.length) {
        return false;
    }
    const dicLetters = {};
    const wordLen = word.length;
    for(let i = 0; i < wordLen; i++) {
        const c = word.charAt(i);
        if(dicLetters[c] === undefined) {
            dicLetters[c] = 1;
        }
        else {
            dicLetters[c]++;
        }
    }
    for(let i = 0; i < wordLen; i++) {
        const c = palindrome.charAt(i);
        if(dicLetters[c] === undefined) {
            return false;
        }
        
        dicLetters[c]--;
        if(dicLetters[c] < 0) {
            return false;
        }
    }

    return true;
}

console.log(checkPalindrome(tactCoa, palindromesOfTactCoa[0]));
console.log(checkPalindrome(tactCoa, palindromesOfTactCoa[1]));
console.log(checkPalindrome(tactCoa, palindromesOfTactCoa[2]));