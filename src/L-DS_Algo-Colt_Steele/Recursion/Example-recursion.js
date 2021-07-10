const recursionExamples = () => {
  /**
   * Power function
   * @description example Recursion func - It keeps multiplying num to num until power value is 1 - same as Math.pow()
   * @example Math Eq = x * (x * (y - 1)) where x = 3, y = 2 - Sol = 3 * 3 * 1
   * @example Math Eq = x * (x * ( x * (y - 1))) where x = 3, y = 3 - Sol = 3 * 3 * 3 * 1
   * @param {number} num Number to get less than values
   * @param {number} pow power value of the number
   * @returns {number} num^pow
   */

  const power = (num, pow) => {
    // Base func
    if (pow === 0) return 1;

    // Loop Func
    return num * power(num, pow - 1);
  };
  //! SOL - console.log(power(3, 3));

  /**
   * ProductOfArray function
   * @description example Recursion func - multiply all items inside array with each other
   * @example productOfArray([1,2,3,10]) =  60
   * @param {Array} arr Numbers to get multiplyied by each other
   * @returns {number} product of all el in arr
   */

  const productOfArray = (arr) => {
    /** Base Case - where functions ends itself from recursion */
    if (arr.length === 0) return 1;
    const firstEl = arr[0];
    // arr.shift();
    return firstEl * productOfArray(arr.slice(1));
  };
  //! SOL -  console.log(productOfArray([3, 2, 10, 10]));

  /**
   * factorial function
   * @description Math Eq = (x + (x - 1) * (x - 2) * (x - 3) * ... * 1) = (x + (x - 1)!) where x = 4 - Sol = 4!
   * @param {number} num Number to get Factorial
   */

  const factorial = (num) => {
    /** Base Case - where functions ends itself from recursion */
    if (num < 0) return 0;
    if (1 === num) return 1;
    return num * factorial(num - 1);
  };

  //! SOL -  console.log(factorial(-5));

  /**
   * fibonacci sequence function
   * @description example Recursion func - febonacci series where next num is sum of last 2 numbers
   * @example fib(4) = [0, 1, 2, 3, 5] =  3
   * @example fib(10) = [0, 1, 2, 3, 5, 8, 13, 21, 34, 55 ] =  55
   * @param {Number} num position of fibonacci number series
   * @returns {number} fibonacci number
   */

  const fib_n = (num) => {
    const baseArr = [0, 1];

    const helper = () => {
      /** Base Case - where functions ends itself from recursion */
      if (baseArr.length === num + 1) return baseArr[baseArr.length - 1];

      const num1 = baseArr[baseArr.length - 1];
      const num2 = baseArr[baseArr.length - 2];
      const total = num1 + num2;
      baseArr.push(total);
      return helper();
    };
    return helper();
  };
  //! SOL -  console.log(fib_n(6));

  //? where n = 3
  //  2, 1 = 1 + 1 = 2
  //? where n = 4
  //  3, 2  = 2 , +1 - +1 +1 +1

  const fib_r = (n) => {
    if (n <= 2) return 1;
    return fib_r(n - 1) + fib_r(n - 2);
  };

  //! SOL -  console.log(fib_r(6));
};

module.exports = recursionExamples;
