function convertToRoman(num) { 
  var matrix = [
    [1000, "M"],
    [900, "CM"],
    [500, "D"],
    [400, "CD"],
    [100, "C"],
    [90, "XC"],
    [50, "L"],
    [40, "XL"],
    [10, "X"],
    [9, "IX"],
    [5, "V"],
    [4, "IV"],
    [1, "I"],
  ]; 
  if (num === 0) {
    return "";
  } 
  for (var i = 0; i < matrix.length; i++) {
    if (num >= matrix[i][0]) {
      return matrix[i][1] + convertToRoman(num - matrix[i][0]);
    }
  }
} 

convertToRoman(36);
