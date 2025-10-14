// Массив в структуре данных предстовляет собой это 
// упорядочная коллекция элементов, к которым можно обратиться
// с помощью индекса. (массив может хранить разные типы данных).

class myArray {
    constructor(){
        this.length = 0;
        this.data = {};
    }

    push(item) {
        this.data[this.length] = item;
        this.length +=1;
        return this.length;
    }

    get(index){
        return this.data[index];
    }
}

const newArray = new myArray();
newArray.push("apple");
newArray.push('orange');
newArray.push('bannanas');
console.log(newArray.get(2));
