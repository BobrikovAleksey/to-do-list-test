/**
 * Сравнивает элементы для сортировки
 * @param a {any}
 * @param b {any}
 */
const compare = (a, b) => {
  if (a > b) return 1;
  if (a < b) return -1;
  return 0;
};

/**
 * Проверяет число или строку на соответствие натуральному числу
 * @param source {string|number}
 * @returns {boolean}
 */
const isNaturalNumber = (source) => {
  const num = Number(source);
  return Number.isInteger(num) && (num >= 0);
};

/**
 * Проверяет строку на соответствие числу
 * @param str {string}
 * @returns {boolean}
 */
const isNumber = (str) => (!Number.isNaN(Number(str)));

/**
 * Проверяет число на вхождение в диапазон
 * @param num {number}
 * @param max {number}
 * @param min {number}
 * @returns {boolean}
 */
const includesToRange = (num, max, min = 0) => ((num >= min) && (num <= max));

/**
 * Реализация XOR - исключающего ИЛИ
 * @param a {boolean}
 * @param b {boolean}
 * @returns {boolean}
 */
const xor = (a, b) => Boolean(a ? !b : b);

/**
 * Функция сравнения для естественной сортировки
 * @param left {object}
 * @param right {object}
 */
const compareSplitters = ({ sortKey: left }, { sortKey: right }) => {
  const minLength = Math.min(left.length, right.length);
  for (let i = 0; i < minLength; i += 1) {
    const partLeft = left[i];
    const partRight = right[i];
    const isNumberA = isNumber(partLeft);
    if (xor(isNumberA, isNumber(partRight))) return isNumberA ? -1 : 1;
    if (isNumberA) return compare(Number(partLeft), Number(partRight));
    const lowerA = partLeft.toLowerCase();
    const lowerB = partRight.toLowerCase();
    let compareResult = compare(lowerA, lowerB);
    if (compareResult) return compareResult;
    compareResult = compare(partLeft, partRight);
    if (compareResult) return compareResult;
  }
  return compare(left.length, right.length);
};

/**
 * Создает временный массив для естественной сортировки
 * @param source
 * @param key
 * @returns {null|*}
 */
const makeSplitters = (source, key) => {
  const pattern = /(\d+)|(.?)/g;
  switch (source.type) {
    case 'string': return source.map((el) => ({
      sortKey: el.match(pattern),
      value: el,
    }));
    case 'object': return source.map((el) => ({
      sortKey: el[key].match(pattern),
      value: el,
    }));
    default: return null;
  }
};

export {
  compare,
  compareSplitters,
  includesToRange,
  isNaturalNumber,
  isNumber,
  makeSplitters,
};

export default {
  compare,
  compareSplitters,
  includesToRange,
  isNaturalNumber,
  isNumber,
  makeSplitters,
};
