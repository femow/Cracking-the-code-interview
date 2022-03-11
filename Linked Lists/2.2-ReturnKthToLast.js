// 2.2 Returhn Kth to Last
// Implement an algorithm to find the kth to last element of a singly linked list.

class Node {
    constructor(data) {
        this.next = null;
        this.data = data;
    }

    appendToTail(data) {
        const tailNode = new Node(data);
        let n = this;
        while(n.next) {
            n = n.next;
        }
        n.next = tailNode;
    }
}

const linkedList = new Node(1);
linkedList.appendToTail(2);
linkedList.appendToTail(3);
linkedList.appendToTail(4);

function findKthToLast(node, kth) {
    if(!node) {
        return 0;
    }
    let index = findKthToLast(node.next, kth) + 1;
    if(index === kth) {
        console.log("The kth element is ", node.data);
    }
    return index;
}

const kToLast = findKthToLast(linkedList, 1);
console.log(kToLast);