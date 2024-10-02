/*
For the input of your function, you will be given one sentence.
You have to return a corrected version,
that starts with a capital letter and ends with a period (dot).

Example:

input (string): "hey, friend"
output (string): "Hey, friend."

Updated first 'h' to 'H', added '.'.

More examples:

correctSentence("greetings, friends") == "Greetings, friends."
correctSentence("Greetings, friends") == "Greetings, friends."
correctSentence("Greetings, friends.") == "Greetings, friends."
 */

export default function correctSentence(text) {
  // your solution goes here
  // Проверяем, пустая ли строка
  if (text.trim() === "") {
    // Если строка пустая, возвращаем только точку
    return "."; 
  }
  
  // Приводим первую букву к заглавной
  const firstChar = text.charAt(0).toUpperCase();
  // Получаем остальную часть строки без первой буквы
  const restOfText = text.slice(1);
  
  // Проверяем, заканчивается ли строка на точку
  if (restOfText.trim().endsWith(".")) {
    // Если уже заканчивается на точку, возвращаем строку
    return firstChar + restOfText;
  } else {
    // В противном случае добавляем точку в конце
    return firstChar + restOfText + "."; 
  }
}

console.log(correctSentence("hey, friend"));         // "Hey, friend."
console.log(correctSentence("greetings, friends"));   // "Greetings, friends."
console.log(correctSentence("Greetings, friends"));    // "Greetings, friends."
console.log(correctSentence("Greetings, friends."));   // "Greetings, friends."
console.log(correctSentence(""));                      // "."