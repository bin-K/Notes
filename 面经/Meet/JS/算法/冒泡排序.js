for (let i = 0; i < arr1.length - 1; i++) {
  for (let j = 0; j < arr1.length - 1 - i; j++) {
    if (arr[j] > arr[j + 1]) {
      var temp = arr[j + 1];
      arr[j + 1] = arr[j];
      arr[j] = temp;
    }
  }
}