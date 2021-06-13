const expect = require("chai").expect;

/**
 * Check Mocha test library workings
 * 1. to start add your tests into test folder only
 * 2. start by $> mocha into terminal
 *
 * @description it will look into test folder and run all available tests
 * @description To Test Whether Mocha is working or not
 *
 * @returns Working test if mocha is working
 */

const mochaWorkingTest = () => true;

describe("first Mocha Run", () => {
  it("Mocha is working", () => {
    expect(mochaWorkingTest()).to.equal(true);
  });
});
