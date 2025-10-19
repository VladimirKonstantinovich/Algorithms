// Алгоритмы и их сложность (O-нотация)

// O-большое — это способ сказать, насколько быстро
// растёт время работы или использование памяти 
// у программы при увеличении объёма данных.

// ------------------ 1 -------------------------------

// O(n) — Линейное время. Время растёт прямо пропорционально количеству данных.
// Пример: пройтись по всем элементам массива.

const studens = ["petya", "sergey", "sasha"];
const findStudens = (studens, searched) =>{
    for (let i = 0; i<studens.length; i++){
        if(studens[i] === searched){
            console.log(`Found ${searched}`);
        }
    }
}

// findStudens(studens,"sasha");


// ------------------------ 2 ----------------------
// O(1) — Постоянное время. Не зависит от размера данных.
// Пример: берём элемент массива.
const numbers = [0, 3, 5, 7, 8];
const getElement = (array, index) => array[index];

// Пример использования:
// console.log(getElement(numbers, 2));

// ------------------------ 3 -----------------------

// O(n^2) — Квадратичное время. 
// Время растёт пропорциональноквадрату количества данных.
// Пример: сортировка пузырьком.

function bubbleSort(arr) {
  let n = arr.length;
  // Внешний цикл – количество проходов
  for (let i = 0; i < n - 1; i++) {
    // Внутренний цикл – сравниваем соседние элементы
    for (let j = 0; j < n - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        // Меняем элементы местами, если они в неправильном порядке
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

// Пример использования:
const numbersArr = [8, 3, 5, 2, 1];
// console.log(bubbleSort(numbersArr)); // [2, 3, 4, 5, 8]

// -------------------------- 4 -----------------------------

// O(log n) — Логарифмическое время. Время растёт очень медленно, 
// даже при больших данных. Пример: бинарный поиск.

function binarySearch(arr, target) {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    // Находим средний индекс
    const mid = Math.floor((low + high) / 2);

    if (arr[mid] === target) {
      // Нашли элемент
      return mid; // возвращает индекс найденного элемента
    } else if (arr[mid] < target) {
      // Ищем справа
      low = mid + 1;
    } else {
      // Ищем слева
      high = mid - 1;
    }
  }
  
  // Если элемент не найден, возвращается -1
  return -1;
}

// Пример использования:
const sortedArr = [3, 4, 8, 12, 18, 25];
console.log(binarySearch(sortedArr, 8)); // 2 (индекс цифры 8)
console.log(binarySearch(sortedArr, 2)); // -1 (нет в массиве)