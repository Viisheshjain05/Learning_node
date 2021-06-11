var expect = require("chai").expect;

/**
 * @description check tests util is working
 */
expect(true).to.be.true;

/**
 * @description  function check to return string in test
 * @param {a}  type it test the Title case as string or ...rest
 * @param {equal} operator it test the operator as StrictEqual as capitalized
 * @returns {false} it will fail as equal check for operator = strictEqual and a check for string
 */

const checkTitle = (title) => {
  return title;
};

expect(checkTitle("This is my string Title")).to.be.a("string");
expect(checkTitle("This is my string Title")).to.equal(
  "This Is My String Title"
);
