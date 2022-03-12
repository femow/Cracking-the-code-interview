// Palindrome Permutation
// Givin a string, write a function to check if it is a permutation of a palindrome.
// A palindrome is a word or phrase that is the same forwards and backwards. A permutation is
// a rearrangement of letters. The palindrome does not need to be limited to just dictionary words.

const palindromesOfTactCoa = [
    "taco cat", // TRUE
    "atco cta", // TRUE
    "ata", // TRUE
    "aa", // TRUE
    "ttac cat", // FALSE
]

function checkPalindrome(palindrome) {
    const noSpacesPalindrome = palindrome.replace(/\s/g, "")
    let left = 0;
    let right = noSpacesPalindrome.length - 1;
    while(left <= right) {
        if(noSpacesPalindrome.charAt(left) !== noSpacesPalindrome.charAt(right)) {
            return false
        }
        left++;
        right--;
    }
    return true;
}

for(let i = 0; i < palindromesOfTactCoa.length; i++) {
    console.log(checkPalindrome(palindromesOfTactCoa[i]));
}