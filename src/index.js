const units = {        
  1: "one",
  2: "two",
  3: "three",
  4: "four",
  5: "five",
  6: "six",
  7: "seven",
  8: "eight",
  9: "nine",
  10: "ten",
  11: "eleven",
  12: "twelve",
  13: "thirteen",
  14: "fourteen",
  15: "fifteen",
  16: "sixteen",
  17: "seventeen",
  18: "eighteen",
  19: "nineteen",
};

const dozens = {
  1: "ten",
  2: "twenty",
  3: "thirty",
  4: "forty",
  5: "fifty",
  6: "sixty",
  7: "seventy",
  8: "eighty",
  9: "ninety",
};

const hundreds = {        
  1: "one hundred",
  2: "two hundred",
  3: "three hundred",
  4: "four hundred",
  5: "five hundred",
  6: "six hundred",
  7: "seven hundred",
  8: "eight hundred",
  9: "nine hundred",
};


module.exports = function toReadable(num) {
    let arr = [];
    
    const endNum = num % 100;
    const copyNum = num.toString().split("");

    if(num === 0) {
      return "zero";
    } else if (num < 20) {
      arr.push(units[num]);
    } else if (num >= 20 && num < 100) {
      arr = arr.concat([dozens[copyNum[0]], units[copyNum[1]]]);
    } else if (num >= 100) {
      if (num % 10 === 0) {
        arr = arr.concat([hundreds[copyNum[0]]], [dozens[copyNum[1]]]);
      } else if (num % 100 < 20) {
        arr = arr.concat([hundreds[copyNum[0]]], [units[endNum]]);
      } else {
        arr = arr.concat([hundreds[copyNum[0]]], [dozens[copyNum[1]], units[copyNum[2]]]);
      }
    } return arr.toString().replace(/,/g, " ").trim();
};
