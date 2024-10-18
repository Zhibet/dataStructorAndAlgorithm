class Node{
    constructor(value){
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class DoubleLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    add(value){
        var newNode = new Node(value);
        if(!this.head){
        
        }else{

        }
        this.length++;
        return this;
    }
}


var DoubleList = new DoubleLinkedList;
console.log(DoubleList.add(23))