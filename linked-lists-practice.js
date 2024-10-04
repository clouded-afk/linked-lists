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
            let previousNode = this.head
            while (previousNode.nextNode) {
                previousNode = previousNode.nextNode
            }
            previousNode.nextNode = node
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
        if (!this.head) {
            return 0
        } else {
            let count = 0
            let currentNode = this.head
            while (currentNode) {
                currentNode = currentNode.nextNode
                count++
            }
            return count
        }
    }

    // Returns the FIRST node in the list
    getHead() {
        if (!this.head) {
            return null
        } else {
            return this.head
        }
    }

    // Returns the LAST node in the list
    getTail() {
        if (!this.head) {
            return null
        }
        if (this.head.nextNode === null) {
            return this.head
        } else {
            let currentNode = this.head
            while (currentNode.nextNode !== null) {
                currentNode = currentNode.nextNode
            }
            return currentNode
        }
    }

    // Returns the node at the given index
    at(index) {
        let currentNode = this.head
        let count = 0

        while (currentNode) {
            if (count === index) {
                return currentNode
            }
            currentNode = currentNode.nextNode
            count++
        }
        return null
    }

    // Removes the last element from the list
    pop() {
        if (!this.head) {
            return null
        } 
        if (!this.head.nextNode) {
            return this.head = null
        }
        let currentNode = this.head 
        while (currentNode.nextNode.nextNode) {
            currentNode = currentNode.nextNode
        }
        currentNode.nextNode = null
        return this.head
    }

    // Returns TRUE of the passed in value is in the list, otherwise returns FALSE
    contains(value) {
        if (!this.head) {
            return false
        }

        let currentNode = this.head 

        while (currentNode) {
            if (currentNode.value === value) {
                return true
            }
            currentNode = currentNode.nextNode
        }
        return false
    }

    // Returns the index of the node containing the passed in value, or null if not found
    find(value) {

    }

    // Prints out the linked list in a readable format in the console
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


// N Elements List Testing
const list = new LinkedList()

console.log("----- N Elements List Testing -----")

list.append("dog")
list.append("cat")

list.prepend("panda")
list.append("squirrel")
list.prepend("bear")
list.prepend("elephant")

list.toString()
console.log(list.at(3))

console.log(list.getHead())
console.log(list.getTail())
console.log(list.getSize())

console.log(list.contains("panda"))
console.log(list.contains("bird"))

list.pop()
list.toString()

// Single Element List
const singleElementList = new LinkedList()

console.log("")
console.log("----- Single Element List Testing -----")

singleElementList.append("Bob Barker")

singleElementList.toString()
console.log(singleElementList.at(6))

console.log(singleElementList.getHead())
console.log(singleElementList.getTail())
console.log(singleElementList.getSize())

console.log(singleElementList.contains("Bob Barker"))
console.log(singleElementList.contains("Drew Carey"))

singleElementList.pop()
singleElementList.toString()


// Empty List Testing
const emptyList = new LinkedList()

console.log("")
console.log("----- Empty List Testing -----")

emptyList.toString()
console.log(emptyList.at(4))
console.log(emptyList.getHead())
console.log(emptyList.getTail())
console.log(emptyList.getSize())
console.log(emptyList.contains("Star Wars"))