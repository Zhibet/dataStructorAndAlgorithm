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
        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
        }else{
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++
        return this;
    }

    unshift(value){
        let newNode = new Node(value);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        }else{
            newNode.next = this.head;
            this.head = newNode
        }

        this.length++;
        return this;
    }

    shift(){
        if(!this.head) return undefined;

        let oldHead = this.head.value;

        if(this.length === 1){
            this.head = null;
            this.tail = null
        }else{
           this.head = this.head.next;
        }

        this.length--;
        return oldHead;
    }

    pop(){
       if(!this.head) return undefined;
        let lastNode = this.tail;
        if(this.length === 1){
            this.head.next = null;
            this.tail = null;
        }else{
            let current = this.head;
            while(current !== lastNode){
                current = current.next
            }
            current.next = null;
            this.tail = current;
        }
        this.length--;
        console.log(`the last node have been deleted ${lastNode.value}`)
        return lastNode;
    }

    remove(value){
        if(!this.head) return null;
        
        return this;
    }

    get(value){
        
    }

    size(){
        let size = this.length;
        return size;
    }

    traverse(){
        
    }
}

const singleList = new linkList();

console.log(singleList.size())