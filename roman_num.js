function convertToRoman(num) {
  let romanList = {1: 'I', 2: 'II', 3: 'III', 4: 'IV', 5: 'V', 6: 'VI', 7: 'VII', 8: 'VIII', 9: 'IX', 10: 'X', 20: 'XX', 30: 'XXX', 40: 'XL', 50: 'L', 60: 'LX', 70: 'LXX', 80: 'LXXX', 90: 'XC', 100: 'C', 200:'CC', 300: 'CCC', 400: 'CD', 500: 'D', 600: 'DC', 700: 'DCC', 800: 'DCCC', 900: 'CM', 1000: 'M', 2000: 'MM', 3000: 'MMM' };
  if(num >= 4000){
    return "Too big number..";
  }
  if(num <= 0 || num == null){
    return "Enter number greater than zero..";
  }
  let numbersArr = breakNum(num);
  let romanNum = [];
  for(let i = 0; i < numbersArr.length; i++){
    romanNum.push(romanList[numbersArr[i]]) 
  }
 return romanNum.join('');
}
function breakNum(num){
  let rem, newNum;
  let numArr = [];
  while(rem !== 0){
    if(num < 10){
      rem = num % num;
      newNum = num;
    }
    if(num >= 10 && num < 100){
      rem = num % 10;
      newNum = num - rem;
    }
    if(num >= 100 && num < 1000){
      rem = num % 100;
      newNum = num - rem;
    }
    if(num >= 1000){
      rem = num % 1000;
      newNum = num - rem;
    }
   numArr.push(newNum);
   num = rem;
  }
 return numArr; 
}
convertToRoman(36);
console.log(convertToRoman(3999))
