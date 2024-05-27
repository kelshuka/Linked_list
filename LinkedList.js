

class LinkedList {
    
    constructor(head = null){
        this.head = head;
    }
    append(value){
        let node = new Node(value);
        if (this.head === null) {
            this.head = node;
        } else {
            let current = this.head;
            while (current.nextNode != null) {
                current = current.nextNode;
            }
            current.nextNode = node;
        }
    }
    prepend(value) {
        let node = new Node(value, this.head);
        if (this.head === null ){
            this.head = node;
        } else {
            let current = this.head;
            this.head = node;
            this.head.nextNode = current;
        }
    }

}


class Node {
    constructor(value = null, nextNode = null) {
        this.value = value;
        this.nextNode = nextNode;
    }
}

const list = new LinkedList();
list.append(5); list.append('test'); list.prepend("checking");list.append("lastCh");
list.prepend(15);
console.log(list);