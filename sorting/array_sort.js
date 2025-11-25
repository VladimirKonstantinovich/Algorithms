//  ----------------------- Buble sort algorithm -----------------------
// function bubleSort(arr){
//     let length = arr.length;
//     for(let i = length-1; i>0; i--){
//         for(let j =0; j<length-1; j++){
//             if(arr[j] < arr[j+1]){
//                 let temp = arr[j+1]
//                 arr[j+1] = arr[j];
//                 arr[j] = temp;
//             }
//         }
//     }
//     return arr;
// }

// const myArray = [3, 5, 7, 9, 2, 4]
// console.log(bubleSort(myArray))


// ----------------------- Selection sort -----------------------

function selectionSort(arr){
 
    for(let i = 0; i<arr.length; i++){
        let minIndex = i;

        for (let j = i+1; j<arr.length; j++){
            if(arr[j] < arr[minIndex]){
                minIndex = j;
            }
        }
        if(i !== minIndex){
            let temp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = temp;
        }
    }
    return arr;
}

const myArray = [7, 4, 8, 9, 2, 3]
console.log(selectionSort(myArray));