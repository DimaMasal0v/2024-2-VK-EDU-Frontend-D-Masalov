/*
You are given a non-empty list of integers (X).

For this task, you should return a list consisting of
only the non-unique elements in this list.

To do so you will need to remove all unique elements
(elements which are contained in a given list only once).

When solving this task, do not change the order of the list.

Example:

input (array of integers): [1, 2, 3, 1, 3]
output (iterable of integers): [1, 3, 1, 3]

1 and 3 are non-unique elements.

More examples:

nonUniqueElements([1, 2, 3, 1, 3]) == [1, 3, 1, 3]
nonUniqueElements([1, 2, 3, 4, 5]) == []
nonUniqueElements([5, 5, 5, 5, 5]) == [5, 5, 5, 5, 5]
nonUniqueElements([10, 9, 10, 10, 9, 8]) == [10, 9, 10, 10, 9]
 */

export default function nonUniqueElements(data) {
  // your solution goes here
    // Создаем объект для хранения количества вхождений каждого элемента
    const counts = {};

    // Проходим по массиву и считаем количество каждого элемента
    data.forEach(num => {
      // Если элемент есть, увеличиваем счетчик, если нет - устанавливаем в 1
      counts[num] = (counts[num] || 0) + 1; 
    });
  
    // Фильтруем элементы, оставляя только те, которые встречаются более одного раза
    // Возвращаем только элементы с количеством больше 1
    return data.filter(num => counts[num] > 1); 
}

console.log(nonUniqueElements([1, 2, 3, 1, 3])); // Вывод: [1, 3, 1, 3]
console.log(nonUniqueElements([1, 2, 3, 4, 5])); // Вывод: []
console.log(nonUniqueElements([5, 5, 5, 5, 5])); // Вывод: [5, 5, 5, 5, 5]
console.log(nonUniqueElements([10, 9, 10, 10, 9, 8])); // Вывод: [10, 9, 10, 10, 9]