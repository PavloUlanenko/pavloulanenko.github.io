//@ts-check

/**
 * Books
 * @type {string}
 */
const book = 'War and Peace';

/**
 * Array of average temperatures
 * @type {Array<number>} //array of numbers
 */
let temperatures = [-2, +5, +3.5, -1, 0];

/**
 * Object of certain types
 * @type {{id: number|string, toDo: string}} //| - number or string
 */
const toDos = {
  id: 1,
  toDo: 'Go shopping',
};

/**
 *
 * @param {number} amount - Total amount
 * @param {number} tax - Tax percentage
 * @returns {string} - Returns a string with $ sign // if returns nothing we can use {void} after returns
 */
const calculateTax = (amount, tax) => {
  return `${amount * tax}`;
};

/**
 * Person object
 * @typedef {Object} Person
 * @property {number} id - ID
 * @property {string} name - name
 * @property {number} [age] - age (optional)
 * @property {boolean} isRegistered - If is registered user
 */

/**
 * @type {Person}
 */
const johnDoe = {
  name: 'Pavel',
  age: 30,
  id: 234141,
  isRegistered: false,
};

/**
 * class Person
 */
class Human {
  /**
   * @param {string|number} [age]
   * @param {string} name
   */
  constructor(age, name) {
    /**
     * @property {string} name - Person name
     * @property {string|number} age - Person age
     */
    this.age = age;
    this.name = name;
  }

  /**
   * @property {Function} greet - Outputs person name and age
   * @returns {void}
   */
  greet() {
    console.log(`I'm ${this.name}, I'm ${this.age} years old`);
  }
}

/**
 * See {@link Human} class
 */
let john = new Human(30, 'John');

/**
 * Input module see {@tutorial input-tutorial}
 *
 * @module Input
 */
