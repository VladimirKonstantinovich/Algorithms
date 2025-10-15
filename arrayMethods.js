// Массив в структуре данных предстовляет собой это 
// упорядочная коллекция элементов, к которым можно обратиться
// с помощью индекса. (массив может хранить разные типы данных).

class myArray {
    constructor(){
        // Инициализация длины массива и объекта для хранения элементов
        this.length = 0;
        this.data = {};
    }

    // Добавляет элемент в конец массива
    push(item) {
        this.data[this.length] = item;
        this.length +=1;
        return this.length;
    }

    get(index){
        return this.data[index];
    }

    // Удаляет последний элемент массива
    pop(){
        const lastItem = this.data[this.length -1];
        delete this.data[this.length - 1];
        this.length--;
        return this.data;
    }

    // Удаляет первый элемент массива и перемещает индексы элементов массива
    shift(){
        const deletedItem = this.data[0];
        for (let i = 0; i < this.length-1; i++){
            this.data[i] = this.data[i+1];
        }
        delete this.data[this.length -1];
        this.length--;
        return deletedItem;
    }

    // Удаляет определённое значение из массива по индексу
        delete(index){
        const deletedItem = this.data[index];
        for (let i = index; i<this.length-1; i++){
            this.data[i] = this.data[i+1];
        }
        delete this.data[this.length -1];
        this.length--;
        return deletedItem;
    }
 
}

// const newArray = new myArray();
// newArray.push("apple");
// newArray.push('orange');
// newArray.push('bannanas');
// newArray.push('kiwi');
// newArray.push('mango');
// newArray.push('potatos');
// newArray.push('mandarins');
// console.log(newArray);
// newArray.delete(3);
// console.log(newArray);

let a = 'cddc';
function reverseString(string){
    const length = string.length -1;
    const newString = [];
    for (let i = length; i>= 0; i--){
        newString.push(string[i]);
    }
    return newString.join('');
}

function palindrome(word){
    let reversedWord = reverseString(word);
    if(reversedWord == word){
        return true;
    }else{
        return ("it's not a palindrome!");
    }
}

// console.log(palindrome(a));

function reverseNumber(number){
    let strNumber = number.toString();
    let reversed = reverseString(strNumber);
    let reversedNumber = Number(reversed);
    return reversedNumber;
}

// console.log(reverseNumber(12345));

function capitalize(word){
    let lowercase = word.toLowerCase().split(' ');
    let capitalizedWord = [];
    for(let i = 0; i<lowercase.length; i++){
        let word = `${lowercase[i][0].toUpperCase()}${lowercase[i].slice(1)}`;
        capitalizedWord.push(word);
    }
    let string = capitalizedWord.join(' ');
    return string;
}

// console.log(capitalize("good mOOrning"))

function fizzBuzz(n){
    if(n%3 === 0 && n%5 === 0){
        console.log("FizzBuzz");
    }
    else if (n%3 ===0){
        console.log("Fizz");
    } 
    else if (n%5 === 0){
        console.log("Buzz");
    }
    else{
        console.log(n);
    }
}

function iterrateNumer(n){
    for (let i = 0; i<=n; i++){
        fizzBuzz(i);
    }

    return "It's done"
}

// console.log(iterrateNumer(31));

function maxProfit(arr){
    let minNumber = arr[0];
    let maxNumber = arr[0];
    for (let i=0; i<arr.length; i++){
        if(minNumber > arr[i+1]){
            minNumber = arr[i+1];
        }
        else if(maxNumber < arr[i+1]){
            maxNumber = arr[i+1];
        }
    }

    let difference = maxNumber - minNumber;
    return difference; 

}

// console.log(maxProfit([7, 1, 5, 3, 4, 15, 25]))

function twoSum(list, target){
    for(let i = 0; i<list.length; i++){
        for(let e = i+1; e<list.length; e++){ //Чтобы не складывать одинковые элементы массива
            let sum = list[i] + list[e];
            if(sum === target){
                return [i, e]
            }
        }
    }
    return null; //Если нет суммы цыфр, которые дадут число
}

console.log(twoSum([3, 4, 9, 12], 7));

