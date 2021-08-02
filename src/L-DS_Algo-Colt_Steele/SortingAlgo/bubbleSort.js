// ? Bubble Sorting Algo

// bubble sort is to swap each next el if it is smaller than previous
// good for all type of array with Swap - best for nearly all sorted array

/**
 * ? Use Case
 *  best for small arrays of data
 *  Best For Nearly Sorted Arrays
 *  Performance Complexity- O(n^2)
 *  Space Complexity - O(1)
 */

// * FileName           -   bubbleSort
// * Contain properties - [ Sorting ];
const init = () => {
  const bubbleSort_naive = (arr) => {
    let arrLength = arr.length;
    let totalIteration = 0;
    for (let i = 0; i < arrLength; i++) {
      // console.log("bubbleSort ~ sortArr", sortArr, arr);
      // console.log("bubbleSort ~ arr[j]", arr[i]);
      for (let j = 0; j < arr.length; j++) {
        // console.log("bubbleSort ~ arr[j]", arr[j], arr[j + 1]);
        totalIteration++;
        if (arr[j] > arr[j + 1]) [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }

      arrLength = arrLength - 1;
    }
    console.log("bubbleSort ~ totalIteration", totalIteration);
    return arr;
  };

  //   ! SOL -
  console.log(bubbleSort_naive([3, 1, 9, 4, 5, 6, 7, 2, 8, 10]));

  const bubbleSort_naive_2 = (arr) => {
    let totalIteration = 0;
    for (let i = arr.length; i > 1; i--) {
      for (let j = 0; j < i; j++) {
        totalIteration++;
        // console.log("bubbleSort ~ arr[j]", arr[j], arr[j + 1]);
        if (arr[j] > arr[j + 1]) [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
    console.log("bubbleSort ~ totalIteration", totalIteration);
    return arr;
  };

  //   ! SOL -  console.log(bubbleSort_naive_2([3, 1, 9, 4, 5, 6, 7, 2, 8, 10]));

  const bubbleSort_refactor = (arr) => {
    let totalIteration = 0;
    // Stop if there is no change Remaining //? Best for nearly sorted array
    let noSwap = false;
    for (let i = arr.length; i > 1; i--) {
      noSwap = true;
      for (let j = 0; j < i; j++) {
        totalIteration++;
        // console.log("bubbleSort ~ arr[j]", arr[j], arr[j + 1]);
        if (arr[j] > arr[j + 1]) {
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
          noSwap = false;
        }
      }
      if (noSwap) break;
    }
    console.log("bubbleSort ~ totalIteration", totalIteration);
    return arr;
  };

  //   ! SOL -    console.log(bubbleSort_refactor([-2, 1, 2, 3, 4, 5, 6, 7, 8, 9]));
};

module.exports = init;
