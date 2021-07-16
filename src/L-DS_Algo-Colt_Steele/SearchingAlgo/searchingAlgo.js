const searchingAlgo = (props) => {
  /**
   * linearSearch function
   * @description example Searching func - linearSearch Simplest way to find in array
   * @example linearSearch([10, 152, 151, 15], 15) => 3
   * @param {Array} arr array to find value from
   * @param {string} val Value to get index
   * @returns {number} index Value of number
   */

  const linearSearch = (arr, val) => {
    for (let i = 0; i < arr.length; i++) if (arr[i] === val) return i;
    return -1;
  };

  //! SOL -  console.log(linearSearch([10, 152, 151, 15], 15));

  /**
   * binarySearch function
   * @description example Searching func - binarySearch Simplest way to find in array
   * @example binarySearch([10, 152, 151, 15], 15) => 3
   * @param {Array} arr array to find value from
   * @param {string} val Value to get index
   */

  const binarySearch = (arr, val) => {
    // Base func
    return val;
  };
  //! SOL -
  console.log(binarySearch([3, 3, 4, 10], 10));

  /**
   * Prob function
   * @description example Searching func - Prob Simplest way to find in array
   * @example Prob([10, 152, 151, 15], 15) => 3
   * @param {Array} arr array to find value from
   * @param {string} val Value to get index
   */

  const Prob = (str) => {
    // Base func
  };
  //! SOL - console.log(Prob([3, 3, 4, 10], 10));
};

module.exports = searchingAlgo;
