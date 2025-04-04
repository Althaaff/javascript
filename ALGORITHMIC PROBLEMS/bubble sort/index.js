// bubble sort using javascript :

function bubbleSort(arr) {
  const n = arr.length;

  let count = 0;

  for (let i = 0; i < n - 1; i++) {
    let swapped = false;

    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        count++;
        swapped = true;
      }
    }
    if (!swapped) {
      console.log("sorted!");
      break;
    }
  }
  return [arr, count];
}

// console.log(bubbleSort([1, 3, 4, 2, 6, 5, 8, 7, 9, 7]));
console.log(bubbleSort([1, 3, 4, 2, 6, 5, 8, 7, 9, 7]));
