// URLify
// Write a method to replace all spaces in a string with '%20'. You may assume that the string
// has sufficient space at the end to hold the additional characters, and that you are given the "true"
// length of the string. (Note: If implementing in Java, please use a character array so that you can
// perform this operation in place.)
// EXEMPLE
// input: "Mr John Smith     ", 13
// Output: "Mr%20John%20Smith"

const input = "Mr John Smith      ";
const trueLength = 13;

function urlifyJS(input, trueLength) {
    console.log("This is the answer with js string methods");
    return input.slice(0, trueLength).replaceAll(" ", "%20");
}

function urlifyNoJS(input, trueLength) {
    console.log("This is the answer without js string methods");
    let urlString = "";
    for(let i = 0; i < trueLength; i++) {
        const c = input.charAt(i)
        urlString += c === " " ? "%20" : c;
    }
    return urlString;
}

console.log(urlifyJS(input, trueLength));