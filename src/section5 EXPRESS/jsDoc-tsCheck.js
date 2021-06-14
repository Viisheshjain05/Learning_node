// @ts-check

/**
 *  petName ts-check Type checking
 * @type {string}
 */

const petName = "423";

/**
 * total member
 * @type {number}
 */

const member = 423;

/**
 * array of people defined in array we can also have advance type checking as describe in ts-check docs [TypeScript JsDoc]{@link https://www.typescriptlang.org/docs/handbook/jsdoc-supported-types.html}
 * @type {Array<number|string>}
 */

const people = [423, "String In Array"];

/**
 * Object of pets We can also have advance Object Checking as in ts  [TypeScript JsDoc]{@link https://www.typescriptlang.org/docs/handbook/jsdoc-supported-types.html} or also check [JsDoc Types]{@link https://jsdoc.app/tags-type.html}
 * @type {{id: ?number, petName: string, age: number}}
 */

const pet = {
  petName: "maverick",
  age: 23,
  id: null,
};

/**
 * @description We Can also create are own types as in ts
 */

/**
 *  custom definations for types
 * @typedef {Object} customDogType custom defination for dog type
 * @property {string} name name of dog
 * @property {number} age age of dog
 * @property {number|string} id unique identification
 * @property {boolean} isGirlFriend to know if have any gf
 * @property {boolean} [isAged]  {optional} we can define in Typedef but not in type only
 */

/**
 * now we can use our custom defined type in this object
 * @type {customDogType}
 */

const DogType = {
  name: "Maverick",
  age: 23,
  id: "ifssdg23",
  isGirlFriend: false,
};


