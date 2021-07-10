// ? Starting from end points or multiple point to compare ex starting from both ends to compare

// * FileName           -   Multiple Pointer Pattern
// * Contain properties - [Space, Time, BigO - Comparision];
// * Contain Problems - [SumZero, Problem2];

const MutiplePointer = (props) => {
  //? ----------------------------- SumZero START -----------------------------

  //! SumZero With Multiple Pointer Pattern

  const SumZero = () => {
    /**
     * !Example SumZero
     * @description Create Function SumZero - RETURN array of binumber where sum of binumber is zero
     */

    /**
     * Multiple Number Naive
     * @param {Array} arr Sorted Array with numbers -ve to +ve
     * @param {number} MethodType Solution number as naive solution can also be done in multipe wayesF
     */

    /**
     * ! Stats
     *  Time Complexity - O(n^2 + n^2) - O(n^2)
     *  Auxilary Space Complexity - O(2n + 1 ) - O(n)
     */

    const SumZero_naive = (arr, MethodType = 1) => {
      if (MethodType === 1) {
        const sortedArr = [];
        for (el1 of arr) {
          for (el2 of arr) {
            if (el1 + el2 === 0) {
              sortedArr.push([el1, el2]);
            }
          }
        }
        return sortedArr.slice((sortedArr.length + 1) / 2);
      }

      if (MethodType === 2) {
        const sortedArr = [];
        for (let i = 0; i < arr.length; i++) {
          for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === 0) sortedArr.push([arr[i], arr[j]]);
          }
        }
        return sortedArr;
      }
    };

    //! SOL - console.log(SumZero_naive([-5, -4, -3, -1, 0, 2, 5, 4, 6, 7, 8], 2));

    //! REFACTORED Solution SumZero
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

    const SumZero_refactor = (arr = []) => {
      const left = 0;
      const right = arr.length - 1;

      while (left > right) {
        
      }

      // for (let i = 0; i < array.length; i++) {
      //   return (element = array[i]);
      // }

      return false;
    };
    //! SOL -
    console.log(SumZero_refactor([-4, -2, -1, 0, 1, 2, 4]));
  };

  //? Entry point For SumZero
  // !
  SumZero();

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
