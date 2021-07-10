const recursionBasics = () => {
  /**
   * Same function
   * @description example Recursion func - print numbers less than param
   * @param {number} num Number to get less than values
   */

  const same = (num) => {
    /** Base Case - where functions ends itself from recursion */
    if (0 > num) return;

    console.log(num);
    /**
     * "--" operator updates the real value
     * */
    num--;
    same(num);
  };
  //! SOL - same(2);

  /**
   * sumRange function - find the range of function from adding below all numbers
   * @description Math Eq = (x + (x - 1)) where x = 2 - Sol = 2 + 1
   * @description Math Eq = (x + (x - 1) + (x - 2) ... + 1) where x = 3 - Sol = 3 + 2 + 1
   * @description Math Eq = (x + (x - 1) + (x - 2) + (x - 3) + ... + 1) where x = 4 - Sol = 4 + 3 + 2 + 1
   *
   * @param {number} num Number to get sum range
   */

  const sumRange = (num) => {
    /** Base Case - where functions ends itself from recursion */
    if (1 === num) return 1;
    return num * sumRange(num - 1);
  };
  //! SOL -  console.log(sumRange(3));

  /**
   * factorial function
   * @description Math Eq = (x + (x - 1) * (x - 2) * (x - 3) * ... * 1) = (x + (x - 1)!) where x = 4 - Sol = 4!
   * @param {number} num Number to get Factorial
   */

  const factorial = (num) => {
    /** Base Case - where functions ends itself from recursion */
    if (1 === num) return 1;
    return num * factorial(num - 1);
  };

  //! SOL -  console.log(factorial(5));
};

module.exports = recursionBasics;
