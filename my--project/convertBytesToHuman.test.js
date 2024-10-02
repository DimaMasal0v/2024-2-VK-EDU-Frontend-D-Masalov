/*
 * Необходимо покрыть все возможные
 * и невозможные кейсы. Например,
 * convertBytesToHuman(-1) === false,
 * convertBytesToHuman(-1) !== '1 B',
 * convertBytesToHuman('string') === false
 * convertBytesToHuman(5) === '5 B'
 */

import convertBytesToHuman from './convertBytesToHuman';

// Тестирование на неправильные типы данных
test('Возвращает false для неправильного типа данных', () => {
  expect(convertBytesToHuman(-1)).toBe(false);            // отрицательное число
  expect(convertBytesToHuman('string')).toBe(false);      // строка
  expect(convertBytesToHuman(null)).toBe(false);          // null
  expect(convertBytesToHuman(undefined)).toBe(false);     // undefined
  expect(convertBytesToHuman({})).toBe(false);            // объект
  expect(convertBytesToHuman([])).toBe(false);            // массив
});

// Тестирование на корректные значения
test('Возвращает корректное значение для чисел', () => {
  expect(convertBytesToHuman(5)).toBe('5 B');              // 5 байт
  expect(convertBytesToHuman(1024)).toBe('1 KB');          // 1 килобайт
  expect(convertBytesToHuman(123123123)).toBe('117.42 MB'); // 123123123 байт
  expect(convertBytesToHuman(1610612736)).toBe('1.5 GB');  // 1610612736 байт
  expect(convertBytesToHuman(0)).toBe('0 B');               // 0 байт
});

// Дополнительные тесты для больших значений
test('Возвращает корректные значения для больших размеров', () => {
  expect(convertBytesToHuman(1099511627776)).toBe('1 TB');  // 1 терабайт
  expect(convertBytesToHuman(1125899906842624)).toBe('1 PB'); // 1 петабайт
});

// Тестирование на крайние случаи
test('Обрабатывает большие значения корректно', () => {
  expect(convertBytesToHuman(1e15)).toBe('909.49 TB'); // 1 квадриллион байт
});

// Тест на нулевое значение
test('Возвращает "0 B" для нулевых байтов', () => {
  expect(convertBytesToHuman(0)).toBe('0 B'); // 0 байт
});
