class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}


class linkList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    add(value){
        let newNode = new Node(value);
        
        this.length++
        return this;
    }
}

const singleList = new linkList();
console.log(singleList.add(23))