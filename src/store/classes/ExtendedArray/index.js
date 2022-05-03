import {
  compareSplitters,
  isNaturalNumber,
  includesToRange,
  makeSplitters,
} from './lib';

class ExtendedArray extends Array {
  constructor(...args) {
    super(...(args.length > 1 ? args : []));
    if (args.length === 1) this.push(args[0]);
  }

  // Проверка массива на пустоту
  get isEmpty() {
    return this.length < 1;
  }

  // Возвращает индекс последнего элемента
  get lastIndex() {
    return this.length - 1;
  }

  // Возвращает тип элементов массива (по первому элементу)
  get type() {
    if (this.isEmpty) return 'any';
    return typeof this[0];
  }

  /**
   * Вставляет новый элемент в определенную позицию (индекс)
   * @param pos {number}
   * @param item {any}
   */
  insert(pos, item) {
    // noinspection JSCheckFunctionSignatures
    this.splice(pos, 0, item);
  }

  /**
   * Перемещает элемент в определенную позицию (индекс)
   * @param from {number}
   * @param to {number}
   * @returns {boolean}
   */
  moveByIndex(from, to) {
    if (!isNaturalNumber(from) || !includesToRange(from, this.lastIndex)
      || !isNaturalNumber(to) || !includesToRange(to, this.lastIndex)
      || (from === to)) return false;

    const el = this.splice(from, 1);
    if (el.length > 0) {
      // noinspection JSCheckFunctionSignatures
      this.splice(to, 0, el[0]);
      return true;
    }
    return false;
  }

  /**
   * Сортирует элементы с учетом регистра и цифр
   * @param asc {boolean} сортировка по возрастанию
   * @param key {string}
   * @returns {ExtendedArray}
   */
  naturalSort(asc = true, key = 'id') {
    const tmp = makeSplitters(this, key);
    if (asc) tmp.sort(compareSplitters);
    else tmp.sort((a, b) => compareSplitters(b, a));
    for (let i = 0; i < this.length; i += 1) {
      if (this[i] !== tmp[i].value) this[i] = tmp[i].value;
    }
    return this;
  }

  /**
   * Удаляет элемент из определенной позиции
   * @param pos {number}
   * @returns {any|boolean} any - элемент массива
   */
  removeByIndex(pos) {
    if (!isNaturalNumber(pos) || !includesToRange(pos, this.lastIndex)) return false;

    const el = this.splice(pos, 1);
    return (el.length > 0) ? el[0] : false;
  }

  /**
   * Удаляет элемент по значению
   * @param value {any}
   * @param key {string}
   * @returns {any|boolean} any - элемент массива
   */
  remove(value, key = 'id') {
    const i = this.type === 'object'
      ? this.findIndex((el) => (el[key] === value))
      : this.findIndex((el) => (el === value));
    return this.removeByIndex(i);
  }
}

export default ExtendedArray;
