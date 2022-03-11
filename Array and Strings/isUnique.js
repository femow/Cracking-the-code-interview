// Is Unique: Implement an algorithm to determine if a string has all unique characters,
// What if you cannot use additional data structures?

const s = "abcdefghijklmp";

function checkStringIsUnique(s) {
    const dictionary = {};
    for(let i = 0; i < s.length; i++) {
        if(dictionary[s[i]]) {
            return false;
        } else {
            dictionary[s[i]] = true;
        }
    }
    return true;
}

console.log(checkStringIsUnique(s));