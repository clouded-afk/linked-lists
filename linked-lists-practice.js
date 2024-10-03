class LinkedList {
    constructor() {
        this.head = null
    }

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

    prepend(value) {
        const node = new Node(value)

        if (this.head === null) {
            this.head = node
        } else {
            node.nextNode = this.head
            this.head = node
        }
    }

    size() {

    }

    tail() {

    }

    at(index) {

    }

    pop() {

    }

    contains(value) {

    }

    find(value) {

    }

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

    insertAt(value, index) {

    }

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
list.prepend("bear")

list.toString()