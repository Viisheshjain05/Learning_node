// ? better way to compare two or more variables with Frequency Counter pattern

// * FileName           -   FrequencyCounter
// * Contain properties - [Space, Time, BigO - Comparision];
// * Contain Problems - [MultipleNumber, Anagram];

const FrequencyCounter = (props) => {
  /**
   * @description  There Will be multiple problems Which Will be solved With Frequency Counter Pattern
   */

  //! Multiple Number With Frequency Counter Pattern

  const MultipleNumber = () => {
    /**
     * !Example Problem 1
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
     * */

    const MultipleNumber_naive = (arr1 = [], arr2 = [], multiple = 2) => {
      //? 1) Check if arr1.length === arr2.length
      if (arr1.length !== arr2.length) {
        return false;
      }

      //? 2) Loop Through El to Check Each value
      for (let i = 0; i < arr1.length; i++) {
        // IndexOf time Complexity = O(n)
        const indexVal = arr2.indexOf(arr1[i] * multiple);

        if (indexVal === -1) {
          return false;
        } else {
          // splice Time Complexity - O(n)
          arr2.splice(indexVal, 1);
        }
      }
      return true;
    };
    //! console.log(MultipleNumber_naive([1, 2, 4], [4, 2, 8], 2));

    //! REFACTORED Solution 1
    /**
     * @description The Reason to refactor As having nested loop gives bigO(n^2)  while having seprate loop gives bigO(n) which is major performance upgradation
     * @decription using `Frequency Counter` Mtd as a best way to seprate loop in objects and then compare them
     */

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

    const MultipleNumber_refactor = (arr1 = [], arr2 = [], multiple = 2) => {
      if (arr1.length !== arr2.length) {
        return false;
      }
      const frequencyCounter1 = {};
      const frequencyCounter2 = {};

      //? It Will take 0 in case of undefined else 1st value in ||
      for (let el of arr1) {
        frequencyCounter1[el] = (frequencyCounter1[el] || 0) + 1;
      }
      // console.log("FC1", frequencyCounter1);

      for (let el of arr2) {
        frequencyCounter2[el] = (frequencyCounter2[el] || 0) + 1;
      }
      // console.log("FC2", frequencyCounter2);

      for (const key in frequencyCounter1) {
        if (frequencyCounter1[key] !== frequencyCounter2[key * 2]) {
          return false;
        }

        //   console.log("1", frequencyCounter1[key], ":", key);
        //   console.log("2", frequencyCounter2[key * 2], ":", key * 2);
      }
      return true;
    };

    //! console.log(MultipleNumber_refactor([1, 2, 4], [4, 2, 8], 2));
  };

  //? Entry point For Multiple Number
  //! MultipleNumber();

  //? Anagram Problem With Frequency Counter Pattern

  /**
   * ?Example Problem 2
   * @description Create Function Anagram - Create a working anagram
   */

  const Anagram = (props) => {
    /**
     * Anagram Naive
     * @param {string} OrigWord Orignal Word to compare othe word as anagram
     * @param {string} CompWord Word to get compared as a anagram
     */

    //! Example Solution 2 Naive

    /**
     * ! Stats
     *  Time Complexity - O(n)
     *  Auxilary Space Complexity - O(2n) - O(n)
     * */

    const Anagram_naive = (ow, cw) => {
      if (ow.length !== cw.length) return false;

      const cwIterator = {};
      const owIterator = {};

      for (const O of ow) {
        //? It was checking if as 0 - false , undefined - false so it never make it way until value is a Number from  cwIterator[O]
        cwIterator[O] = (cwIterator[O] || 0) + 1;
      }

      for (const C of cw) {
        owIterator[C] = (owIterator[C] || 0) + 1;
      }

      const valueStatus = Object.entries(cwIterator).map((e) => {
        // console.log(`e[0] : ${e[0]} , e[1] : ${e[1]} `);
        // console.log(
        //   `ow[e[0]] : ${owIterator[e[0]]}, State : ${owIterator[e[0]] === e[1]}`
        // );
        if (owIterator[e[0]] !== e[1]) {
          return false;
        }
        return true;
      });
      return !valueStatus.includes(false);
    };
    //! console.log(Anagram_naive("atm", "mat"));

    // //! Example Solution 2 Refactor

    /**
     * ! Stats
     *  Time Complexity - O(n)
     *  Auxilary Space Complexity - O(n)
     * */

    //? Objective To create with 2 loops only
    const Anagram_refactor = (ow, cw) => {
      if (ow.length !== cw.length) return false;

      const lookup = {};
      for (const O of ow) lookup[O] ? lookup[O]++ : (lookup[O] = 1);

      for (const C of cw) {
        // ?  || lookup[C] === 0 - Not needed as 0 holds value of false - as converted to true and return false
        if (!lookup[C]) return false;
        lookup[C]--;
      }
      // console.log(lookup);

      return true;
    };

    //! console.log(Anagram_refactor("seaasc", "csaaes"));
  };
};

module.exports = FrequencyCounter;
