/*
 * В этом задании надо разработать функцию
 * `convertBytesToHuman`. Эта функция  должна принимать
 * аргумент `bytes` только числового типа.
 * На выходе функция должна отдать
 * человекопонятную строку, которая будет
 * отражать размер файла. Округление, максимум,
 * до 2 знаков после запятой, исключая нули.
 *  Примеры использования:
 * `convertBytesToHuman(1024) === '1 KB';`
 * `convertBytesToHuman(123123123) === '117.42 MB';`
 * `convertBytesToHuman(1610612736) === '1.5 GB';`
 * Необходимо предусмотреть защиту от
 * передачи аргументов неправильного типа
 * и класса (например, отрицательные числа).
 * В случае передачи неподходящего аргумента,
 * функция должна вернуть false.
 */

export default function convertBytesToHuman(bytes) {
  // your solution goes here
  // Проверяем, что переданное значение — это число и оно не отрицательное
  if(typeof bytes !== 'number' || bytes < 0 || !Number.isFinite(bytes)){
    return false;
  }

  // Если байтов 0, возвращаем строку "0 B"
  if(bytes === 0){
    return '0 B';
  }

  // Определяем суффиксы для размеров: B, KB, MB, GB, TB, PB
  const units = ['B', 'KB', 'MB', 'GB', 'TB', 'PB'];
  // Вычисляем степень
  const exponent = Math.floor(Math.log(bytes)/Math.log(1024));
  // Определяем значение в соответствующей единице измерения
  const value = bytes/Math.pow(1024,exponent);

  // Округляем результат до двух знаков после запятой и удаляем ненужные нули
  return `${parseFloat(value.toFixed(2))} ${units[exponent]}`
}


console.log(convertBytesToHuman(1024)); 
console.log(convertBytesToHuman(123123123));
console.log(convertBytesToHuman(1610612736)); 
console.log(convertBytesToHuman(-1024)); 
console.log(convertBytesToHuman("1024")); 
console.log(convertBytesToHuman(0)); 