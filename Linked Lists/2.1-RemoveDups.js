class MyNode {
    constructor(data) {
        this.next = null;
        this.data = data;
    }

    appendToTail(data) {
        const newNode = new MyNode(data);
        let tailNode = this;
        while(tailNode.next !== null) {
            tailNode = tailNode.next;
        }
        tailNode.next = newNode;
    }
}


const head = new MyNode(1);

head.appendToTail(2);
head.appendToTail(3);
head.appendToTail(1);

let curNode = head;
console.log(curNode);

const dictionary = {};
dictionary[curNode.data] = true;
while(curNode && curNode.next) {
    if(dictionary[curNode.next.data] === undefined) {
        dictionary[curNode.next.data] = true;
    }
    else {
        curNode.next = curNode.next.next;
    }
    curNode = curNode.next;
}

curNode = head;
while(curNode) {
    console.log(curNode.data);
    curNode = curNode.next;
}
