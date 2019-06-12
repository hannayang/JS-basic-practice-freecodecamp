function bouncer(arr) {
    var cleanArr = []; 
    for (var i = 0; i < arr.length; i++) {
      var item = arr[i]; 
      console.log(item !== false, 
                  item !== null, 
                  item !== 0, 
                  item !== "", 
                  item !== undefined, 
                  isNaN(item) == false);
      if (item !== false && item !== null && item !== 0 && item !== "" && item !== undefined && isNaN(item) == false) {
        cleanArr.push(item);
      } 
    } 
    return cleanArr;
  }
  

console.log(bouncer([7, "ate", "", false, 9]));
console.log(bouncer([false, null, 0, NaN, undefined, ""]));
console.log(bouncer([1, null, NaN, 2, undefined])); 