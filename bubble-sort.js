function swap(array, i, j) {
  let tmp = array[i];
  array[i] = array[j];
  array[j] = tmp;
}

function bubbleSort(array) {
  let isSorted;
  do {
    isSorted = false;
    for (let i = 0; i < array.length; i++) {
      if(array[i] && array[i+1] && array[i] > array[i+1]) {
        swap(array, i, i+1);
        isSorted = true;
      }
    }
  } while(isSorted);
  return(array);
}

module.exports = bubbleSort
