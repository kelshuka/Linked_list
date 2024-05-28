

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
    size(){
        let count = 0;
        let node = this.head;
        while (node) {
            count++;
            node = node.nextNode;
        }
        return count;
    }

    gethead(){
        return this.head;
    }

    tail(){
        let node = this.head;
        if (node) { 
            while(node.nextNode){
                node = node.nextNode;
            }
        }
        return node;
    }
    at(index){
        let node = this.head;
        let current = null;
        let i=1;
        if (this.head === null){
            console.log("no item in the linked list.")
        } else {
            while (i<=index){
                current = node;
                node = node.nextNode;
                i++;
            }
        }   
        return current;
    }
    pop(){
        let node = this.head;
        while (node) { 
            if(node.nextNode.nextNode === null){
                node.next = null;
                return this.head;
                
            } else {
                node = node.nextNode;
            }
            
        }
        

    }
    contains(value){
        let node = this.head;
        while (node.nextNode !=null){
            if (node.value === value){
                return true;
            } 
            node = node.nextNode;
        }
        if (node.value !=value){
            return false;
        } else{
            return true;
        }
    }

    find(value){//returns the index if found.
        let node = this.head;
        let i = 1;
        while (node.nextNode !=null){
            if (node.value === value){
                return i;
            } 
            node = node.nextNode;
            i++;
        }
        if (node.value !=value){
            return null;
        } else{
            return i;
        }
    }

    toString(){
        if (this.head === null) {
            console.log("No linked list.");
        } else {
            let current = this.head;
            let str = "";
            while (current.nextNode != null) {
                str = str + ` (${current.value}) ->`
                current = current.nextNode;
            }
            str = str + ` (${current.value}) -> null`
            return str;
        }

    }

    insertAt(value, index){  
        
        let lengt = this.size();
        let current = this.head;
        let previous;
        
        if (index >= lengt || index <0){
            console.log("Invalid index value");
        } else if (index === 0){
            this.prepend(value);
            return;
        } else if (index === lengt-1){
            this.append(value);
        }
        while (index--){
            previous = current;
            current = current.nextNode;
        }
              
        let node = new Node(value, previous.nextNode);
        previous.nextNode = node;
        node.next = current;
    }

    removeAt(index) {
        let lengt = this.size();
        let current = this.head;
        let previous;

        if (index >= lengt || index <0){
            console.log("Invalid index value");
        } else if (index === 0){
            this.head = this.head.nextNode;
            return;
        } 
        while (index--){
            previous = current;
            current = current.nextNode;
        }
        if (index === this.tail){
            this.tail = previous;
        }
              
        previous.nextNode = current.nextNode;   
    }

    clear(){
        this.head = null;
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
console.log(list.size());
console.log(list.gethead()); console.log(list.tail());
console.log(list.at(3)); console.log(list.pop());
console.log(list.contains("test")); console.log(list.contains("tet"));
console.log(list.find("test")); console.log(list.find("checg"));

console.log(list.toString()); list.insertAt("des",2);
console.log(list); console.log(list.size());console.log(list.toString());
console.log(list);console.log(list.toString());console.log(list.size()); 
list.removeAt(3); 
console.log(list.size());console.log(list.toString());




console.log(list); console.log(list.size()); console.log(list.toString()); 
list.clear(); console.log(list); console.log(list.size()); console.log(list.toString());