function largestOfFour(arr) {
    // You can do this!
    var result = []; 
    for (var i = 0; i < arr.length; i++) {
      var subArr = arr[i]; 
      var maxNum = subArr[0]; 
      for (var j = 0; j < subArr.length; j++) { 
        if(subArr[j] > maxNum) {
          maxNum = subArr[j]; 
        } 
      } 
      result[i] = maxNum;
    }
    return result; 
  }

  console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));