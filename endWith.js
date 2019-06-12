// function confirmEnding(str, target) {
//     var compareStr = str.slice(str.length - target.length); 
//     return (compareStr === target); 
//   }
  
function confirmEnding(str, target) {
    return (str.endsWith(target)); 
}
console.log(confirmEnding("Bastian", ""));