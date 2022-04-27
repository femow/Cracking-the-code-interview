// Route between nodes
// Given a directed graph, design an algorithm to find
// out whether there is a route between two nodes.


class Node {
    children = [];
    name = "";
    isVisisted = false;

    constructor(name) {
        this.name = name;
    }
}

function createDirectedGraph (inputArr) {
    const allNodes = [];
    for(let i = 0; i < inputArr.length; i++) {
        allNodes.push(new Node(i));
    }

    for(let i = 0; i < inputArr.length; i++) {
        for(let j = 0; j < inputArr[0].length; j++) {
            allNodes[i].children.push(allNodes[inputArr[i][j]]);
        }
    }
    return allNodes;
}

function checkRouteBetweenTwoNodes(graph, startingNode, endingNode) {
    graph.forEach(g => g.isVisisted = false);
    queue = [];

    queue.push(startingNode);
    let currentNode;
    let hasRoute = false;
    while(queue.length !== 0 && !hasRoute) {
        currentNode = queue.shift();
        if(currentNode !== null) {
            currentNode.children.forEach(child => {
                if(!child.isVisisted) {
                    if(child.name === endingNode.name) {
                        hasRoute = true;
                    } else {
                        child.isVisisted = true;
                        queue.push(child);
                    }
                }
            })
            currentNode.isVisisted = true;
        }
    }

    return hasRoute;
}

function main() {
    const inputArr = [
        [1],
        [2],
        [0, 3],
        [2],
        [6],
        [4],
        [5]
    ]
    const graph = createDirectedGraph(inputArr);
    console.log(graph[0]);
    console.log("Answer: " + checkRouteBetweenTwoNodes(graph, graph[2], graph[0]));
}

main();