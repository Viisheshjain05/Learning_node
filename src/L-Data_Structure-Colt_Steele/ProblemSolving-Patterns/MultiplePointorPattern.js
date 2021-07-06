// ? Starting from end points or multiple point to compare ex starting from both ends to compare

// * FileName           -   Multiple Pointer Pattern
// * Contain properties - [Space, Time, BigO - Comparision];
// * Contain Problems - [SumZero, Problem2];

const MutiplePointer = (props) => {
  //? ----------------------------- Problem1 START -----------------------------

  //! Problem1 With Multiple Pointer Pattern

  const Problem1 = () => {
    /**
     * !Example Problem 1
     *
     * @description Create Function MultipleNumber - compare two array where second array has all the values square of first array , order does not matter
     */

    /**
     * Multiple Number Naive
     * @param {Array} arr1 first array
     * @param {Array} arr2 Second array to compare with
     * @param {number} multiple Arr2 has el Multiple of Arr1
     */

    /**
     * ! Stats
     *  Time Complexity - O(n^2 + n^2) - O(n^2)
     *  Auxilary Space Complexity - O(2n + 1 ) - O(n)
     */

    const Problem1_naive = () => {};
    //! SOL -  console.log(Problem1_naive([1, 2, 4], [4, 2, 8], 2));

    //! REFACTORED Solution 1
    /**
     * Multiple Number Refactored
     * @param {Array} arr1 first array
     * @param {Array} arr2 Second array to compare with
     * @param {number} multiple Arr2 has el Multiple of Arr1
     */

    /**
     * ! Stats
     *  Time Complexity - O(3n) - O(n)
     *  Auxilary Space Complexity - O(2n) - O(n)
     * */

    const Problem1_refactor = () => {};
    //! SOL - console.log(Problem1_refactor([1, 2, 4], [4, 2, 8], 2));
  };

  //? Entry point For Problem1
  //! Problem1();

  //? ----------------------------- Problem2 START -----------------------------

  /**
   * ? Problem2 With Multiple Pointer Pattern
   * @description Create Function Problem2 - Create a working Problem2
   */

  const Problem2 = (props) => {
    /**
     * Problem2 Naive
     * @param {string} OrigWord Orignal Word to compare othe word as Problem2
     * @param {string} CompWord Word to get compared as a Problem2
     */

    //! Example Solution 2 Naive

    /**
     * ! Stats
     *  Time Complexity - O(n)
     *  Auxilary Space Complexity - O(2n) - O(n)
     * */

    const Problem2_naive = () => {};
    //! SOL - console.log(Problem2_naive("atm", "mat"));

    //! Example Solution 2 Refactor

    /**
     * ! Stats
     *  Time Complexity - O(n)
     *  Auxilary Space Complexity - O(n)
     * */
    const Problem2_refactor = () => {};
    //! console.log(Problem2_refactor("seaasc", "csaaes"));
  };

  //? Entry point For Problem2
  //! Problem2();
};

module.exports = MutiplePointer;
