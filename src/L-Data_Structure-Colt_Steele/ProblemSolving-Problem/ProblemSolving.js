// ? Problem Solving Patterns Frequency COunter

// * FileName           -   FrequencyCounter
// * Contain properties - [Space, Time, BigO - Comparision];

// INDEX
// 1) Failed Way OR bad way as BigO notation
// 2)
// 3)
// 4)
// 5)

const FrequencyCounter = (props) => {
  /**
   * @description  Frequency counter in useful in case when there are multiple piecies of data and inputs and we need to compare theme
   */

  /**
   * !Example Problem 1
   * @description Create Function frequencyCounter - compare two array where second array has all the values square of first array , order does not matter
   */

  //! Solution 1

  /**
   * Frequency Counter Naive
   * @param {Array} arr1 first array
   * @param {Array} arr2 Second array to compare with
   * @param {number} multiple Arr2 has el Multiple of Arr1
   */

  const FrequencyCounter_naive = (arr1 = [], arr2 = [], multiple = 2) => {
    //? 1) Check if arr1.length === arr2.length
    if (arr1.length !== arr2.length) {
      return false;
    }

    //? 2) Loop Through El to Check Each value
    for (let i = 0; i < arr1.length; i++) {
      const indexVal = arr2.indexOf(arr1[i] * multiple);

      if (indexVal === -1) {
        return false;
      } else {
        arr2.splice(indexVal, 1);
      }
    }
    return true;
  };
  console.log(FrequencyCounter_naive([1, 2, 4], [4, 2, 8], 2));

  //! REFACTORED Solution 1
  /**
   * @description The Reason to refactor As having nested loop gives bigO(n^2)  while having seprate loop gives bigO(n) which is major performance upgradation
   * @decription using `Frequency Counter` Mtd as a best way to seprate loop in objects and then compare them
   */

  /**
   * Frequency Counter Refactored
   * @param {Array} arr1 first array
   * @param {Array} arr2 Second array to compare with
   * @param {number} multiple Arr2 has el Multiple of Arr1
   */

  const FrequencyCounter_refactor = (arr1 = [], arr2 = [], multiple = 2) => {
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

  console.log(FrequencyCounter_refactor([1, 2, 4], [4, 2, 8], 2));
};
module.exports = FrequencyCounter;

/**
 * Anagram Naive
 * @param {string} OrigWord Orignal Word to compare othe word as anagram
 * @param {string} CompWord Word to get compared as a anagram
 */

const Anagram_naive = (props) => {
  console.log(props);
};

// console.log(Anagram_naive("aaz", "zaa"));
module.exports = Anagram_naive;
