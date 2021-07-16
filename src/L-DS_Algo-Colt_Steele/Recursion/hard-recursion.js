const hardRecursion = (props) => {
  /**
   * Reverse function
   * @description example Recursion func - it Reverse the string
   * @example Reverse("Solution") => noitulos
   * @param {string} str String to Reverse
   */

  const reverseString = (word) => {
    // const arr = [];

    // const helper = (str) => {
    //   // Base func
    //   if (str.length <= 0 || str === "") return;
    //   arr.push(str[str.length - 1]);
    //   helper(str.slice(0, str.length - 1));
    // };
    // helper(word);

    // return arr.join("");

    if (word.length <= 1) return word;
    return reverseString(word.slice(1)) + word[0];
  };
  //! SOL -  console.log(reverseString("Solution"));

  /**
   * isPalindrome function
   * @description example Recursion func - if string.reverse === string
   * @example isPalindrome("NaN") => naN is same from opposite too Nan as - true
   * @example isPalindrome("Palindrome") => Palindrome isNOt Same as opposite too emordnilaP as - False
   * @param {string} str String to Check isPalindrome
   * @return {Boolean} isPalindrome
   */

  const isPalindrome = (word) => {
    //NAIVE SOL // return word === word.split("").reverse().join("");

    const reverseWords = [];

    const helper = (str) => {
      if (str.length <= 0 || str === "") return;
      reverseWords.push(str[str.length - 1]);
      helper(str.slice(0, str.length - 1));
    };
    helper(word);
    return word === reverseWords.join("");
  };
  //! SOL -  console.log(isPalindrome("wrongnorw"));
  /**
   * someRecursive function
   * @description pass array of data and callback which return true if anyvalue in arr return true on callback same as Arr.some(callback) instead it will be like some(arr, callback)
   * @example
   * isOdd = val => val % 2 !== 0;
   * someRecursive([2, 4, 5], isOdd) = true
   * @param {Array} valueToCheck Array of data to check in callback
   * @param {Function} callback to check the data
   * @returns {Boolean} true if any one value is true
   *
   */

  const someRecursive = (arr, callback) => {
    // NAIVE SOL //  return arr.map((el) => callback(el)).includes(true);
    // Base func

    const handler = (el) => {
      if (el.length === 0) return false;
      if (callback(el[0])) return true;
      return handler(el.slice(1));
    };

    return handler(arr);
  };

  //! SOL -  const isOdd = (val) => val % 2 !== 0;
  //! SOL -  console.log(someRecursive([2, 2, 3, 2, 20], isOdd));

  /**
   * flatten function
   * @description example Recursion func - it flatten the arrays inside array same as concat
   * @example flatten("Solution") => noitulos
   * @param {string} str String to flatten
   */

  const flatten = (arr) => {
    // Base func
    return arr.flat(50);
  };

  //! SOL -
  console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]));

  /**
   * Prob function
   * @description example Recursion func - it Prob the string
   * @example Prob("Solution") => noitulos
   * @param {string} str String to Prob
   */

  const Prob = (str) => {
    // Base func
  };
  //! SOL - console.log(Prob(3, 3));
};

module.exports = hardRecursion;
