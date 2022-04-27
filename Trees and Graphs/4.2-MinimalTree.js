// Minimal tree
// Given a sorted (increasing order) array with unique integer elements, write
// an algorithm to create a binary search tree with minimal height.


// Binary search tree 
//   |
// |   | Minimun to the left.
//| | | |

class Node {
    leftNode;
    rightNode;
    value;

    constructor(value) {
        this.value = value;
        this.leftNode = null;
        this.rightNode = null;
    }
}

function insertTree(sortedArray, start, end) {
    if(end < start) {
        return null;
    }
    const middle = Math.floor((start + end) / 2);
    const newNode = new Node(sortedArray[middle]);
    newNode.leftNode = insertTree(sortedArray, start, middle - 1);
    newNode.rightNode = insertTree(sortedArray, middle + 1, end);

    return newNode;
}

function main() {
    const sortedArray = [1, 2, 3];
    let rootNode = null;
    rootNode = insertTree(sortedArray, 0, sortedArray.length - 1);
    console.log(rootNode);
}

main();