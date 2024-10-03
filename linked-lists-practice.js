class LinkedList {
    constructor() {
        this.head = null
    }

    // Adds a new node containing value to the END of the list
    append(value) {
        const node = new Node(value)

        if (this.head === null) {
            this.head = node
        } else {
            let previous = this.head
            while (previous.nextNode) {
                previous = previous.nextNode
            }
            previous.nextNode = node
        }
    }

    // Adds a new node containing value to the START of the list
    prepend(value) {
        const node = new Node(value)

        if (this.head === null) {
            this.head = node
        } else {
            node.nextNode = this.head
            this.head = node
        }
    }

    // Returns TOTAL number of nodes in the list
    getSize() {

    }

    // Returns the FIRST node in the list
    getHead() {
        return this.head
    }

    // Returns the LAST node in the list
    getTail() {
        if (this.head.nextNode === null) {
            return this.head
        } else {
            let previous = this.head
            while (previous.nextNode !== null) {
                previous = previous.nextNode
            }
            return previous
        }
    }

    // Returns the node at the given index
    at(index) {

    }

    // Removes the last element from the list
    pop() {

    }

    // Returns TRUE of the passed in value is in the list, otherwise returns FALSE
    contains(value) {

    }

    // Returns the index of the node containing the passed in value, or null if not found
    find(value) {

    }

    // Prints oyt the linked list in a readable format in the console
    toString() {
        if (this.head === null) {
            console.log("List is Empty")
        } else {
            let currentNode = this.head
            let listValues = ''
            while (currentNode) {
                listValues += `( ${currentNode.value} ) -> `
                currentNode = currentNode.nextNode
            }
            console.log(listValues)
        }
    }

    // Extra Credit

    // Inserts a new node withe the provided value at the given index
    insertAt(value, index) {

    }

    // Removes the node at the given index
    removeAt(index) {

    }
}

class Node {
    constructor(value = null, nextNode = null) {
        this.value = value
        this.nextNode = nextNode
    }
}

const list = new LinkedList()

list.append("dog")
list.append("cat")

list.prepend("panda")
list.append("squirrel")
list.prepend("bear")
list.prepend("elephant")

list.toString()
console.log(list.getTail())
console.log(list.getHead())