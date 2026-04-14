class Node {
    constructor(value = null) {
        this.value = value;
        this.nextNode = null;
    }
}

class LinkedList {
    constructor() {
        this.headNode = null;
    }

    append(value) {
        const newNode = new Node(value);
        if (this.headNode === null) {
            this.headNode = newNode;
            return;
        }

        let currentNode = this.headNode;
        while (currentNode.nextNode !== null) {
            currentNode = currentNode.nextNode;
        }
        currentNode.nextNode = newNode;
    }

    prepend(value) {
        const newNode = new Node(value);
        newNode.nextNode = this.headNode;
        this.headNode = newNode;
    }

    size() {
        let count = 0;
        let currentNode = this.headNode;
        while (currentNode !== null) {
            count++;
            currentNode = currentNode.nextNode;
        }
        return count;
    }

    head() {
        return this.headNode.value;
    }

    tail() {
        let currentNode = this.headNode;
        while (currentNode.nextNode !== null) {
            currentNode = currentNode.nextNode;
        }
        return currentNode.value;
    }

    at(index) {
        let currentNode = this.headNode;
        let i = 0;
        while (currentNode !== null) {
            if (i === index) return currentNode.value;
            currentNode = currentNode.nextNode;
            i++;
        }
        return null;
    }

    pop() {
        if (this.headNode === null) return null;
        const value = this.headNode.value;
        this.headNode = this.headNode.nextNode;
        return value;
    }

    contains(value) {
        let currentNode = this.headNode;
        while (currentNode !== null) {
            if (currentNode.value === value) return true;
            currentNode = currentNode.nextNode;
        }
        return false;
    }

    findIndex(value) {
        let currentNode = this.headNode;
        let index = 0;
        while (currentNode !== null) {
            if (currentNode.value === value) return index;
            currentNode = currentNode.nextNode;
            index++;
        }
        return -1;
    }

    toString() {
        let currentNode = this.headNode;
        let nodeString = '';
        while (currentNode !== null) {
            nodeString += `[${currentNode.value}] => `;
            currentNode = currentNode.nextNode;
        }
        return nodeString + 'null';
    }
}

module.exports = { Node, LinkedList };