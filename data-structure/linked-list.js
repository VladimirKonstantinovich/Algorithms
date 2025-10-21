class Node{
    constructor(value){ 
        this.head = value;
        this.next = null;
    }
}

class LinkedList{
    constructor(value){
        this.head = new Node(value);
        this.tail = this.head;
        this.length = 1;
    }

    push(value){
        let newNode = new Node(value);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        }

        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
    }

    pop(){

        if(!this.head){
            return null;
        }

        if(this.length === 0){
            this.head = null;
            this.tail = null;
        }

        let temp = this.head;
        let prev = this.head;

        while(temp.next){
            prev = temp;
            temp = prev.next;
        }

        this.tail = prev;
        this.tail.next = null;
        this.length--;
    }

    unshift(value){
        const newNode = new Node(value);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        }
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this;
    }

    shift(){
         if(!this.head){
            return null;
         }
// Первый элемент в списке
         let temp = this.head;
         this.head = this.head.next;
         temp.next = null;
         this.length--;

         if(this.length === 0){
            this.tail = null;
         }

         return temp;
    }

    getFirst(){
        return this.head;
    }

    getLast(){
        if(!this.head){
            return null;
        }

        let temp = this.head;


        while(temp){
            if(!temp.next){
                return temp
            }
            temp = temp.next;
        }
    }

    getElement(index){
        if(!this.head){
            return null;
        }

        let element = this.head;

        for(let i=0; i<=index; i++){
            if(i === index){
                return element;
            }else{
                element = element.next;
            }
        }
    }

    // setElement(index, value){
    //     let temp = this.getIndex(index)
    //     console.log(temp);
    // }
}

const myLinkedList = new LinkedList(1);
myLinkedList.push(2);
myLinkedList.push(5);
myLinkedList.push(20);
myLinkedList.push(25);
myLinkedList.push(30);

console.log(myLinkedList);
console.log(myLinkedList.setElement(3, 23));
 
 