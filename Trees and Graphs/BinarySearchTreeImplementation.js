
class Node {
    value;
    left;
    right;

    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class Tree {
    root = null;

    constructor() {
    }

    addNodeHandler(node, value) {
        if(node.value > value) {
            if(node.left === null) {
                node.left = new Node(value);
                return;
            }
            this.addNodeHandler(node.left, value);
        } else if(node.value < value) {
            if(node.right === null) {
                node.right = new Node(value);
                return
            }
            this.addNodeHandler(node.right, value);
        }
    }
    
    addNode(value) {
        if(this.root === null) {
            this.root = new Node(value);
            return;
        }

        this.addNodeHandler(this.root, value);
    }

    getLeftestRightNode(node) {
        if(node.left === null) {
            return node;
        }
        return this.getLeftestRightNode(node.left);
    }

    removeNodeHandler(node, value) {
        if(node.value > value) {
            node.left = this.removeNodeHandler(node.left, value);
        } else if(node.value < value) {
            node.right = this.removeNodeHandler(node.right, value);
        } else {
            // First scenario is -> Found and has no left or right.
            // return null;
            if(node.left === null && node.right === null) {
                return null;
            }
            
            // Second scenario is -> Found and has no left
            // return right
            else if (node.right !== null && node.left === null) {
                return node.right;
            }

            // Third scenario is -> Found and has no right
            // return left
            else if(node.left !== null && node.right === null) {
                return node.left;
            }

            // Fourth scenario is -> Found and has left and right
            // Find the leftest of the right node
            // Assign node.value to lotrn.value
            // and node.right = this.removeNodeHandler(node.right, lotrn.value)
            else {
                const lrn = this.getLeftestRightNode(node.right);
                node.value = lrn.value;
                node.right = this.removeNodeHandler(node.right, lrn.value)
            }
        }

        return node;
    }

    removeNode(value) {
        this.removeNodeHandler(this.root, value);
    }

    bfs() {
        const queue  = [];

        queue.push(this.root);
        while(queue.length > 0) {
            const node = queue.shift();
            console.log(node.value);
            if(node.left !== null) {
                queue.push(node.left);
            }
            if(node.right !== null) {
                queue.push(node.right);
            }
        }
    }
}

function main() {
    tree = new Tree();
    tree.addNode(7);
    tree.addNode(5);
    tree.addNode(20);
    tree.addNode(25);
    tree.addNode(18);
    tree.addNode(4);
    tree.addNode(11);
    tree.addNode(19);
    tree.addNode(14);
    tree.addNode(12);
    tree.addNode(15);
    tree.addNode(33);
    tree.addNode(28);
    tree.bfs();
    console.log("Removing 28")
    tree.removeNode(28)
    tree.removeNode(15)
    tree.removeNode(12)
    tree.bfs();
}

main();