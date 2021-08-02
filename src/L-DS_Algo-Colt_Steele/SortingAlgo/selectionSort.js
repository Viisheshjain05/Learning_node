// ? selection Sorting Algo

// Selection sort is check the minimum value and then swap the first value
// EX- selecting all the lowest value from array and shifting it to start

/**
 * ? Use Case
 *  Good place where you dont want to swap lots of el
 *  Easy to understand
 *  Performance Complexity- O(n^2)
 *  Space Complexity - O(1)
 */

// * FileName           -   selectionSort
// * Contain properties - [ Sorting ];
const init = () => {
  const selectionSort_naive = (arr) => {
    let iterations = 0;
    let LVInd = ""; // Lowest Value Index
    let SVInd = ""; // Starting Value Index
    for (let i = 0; i < arr.length; i++) {
      if (LVInd !== "" && SVInd !== "")
        [arr[SVInd], arr[LVInd]] = [arr[LVInd], arr[SVInd]];

      SVInd = i;
      LVInd = "";
      for (let j = i + 1; j < arr.length; j++) {
        iterations++;
        if (arr[j] < arr[i]) {
          LVInd = j;
        }
      }
    }
    console.log("Totals iterations :", iterations);
    return arr;
  };

  // ! SOL -  console.log(selectionSort_naive([3, 2, 1, 4, 5, 6, 7, 9, 8, 10]));
};

module.exports = init;
