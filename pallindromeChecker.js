function palindrome(str) {
  let lowStr = str.toLowerCase().match(/[a-z0-9A-Z]/g);
  let revStr =[];
  let count = 0;
  for(let i = lowStr.length - 1 ; i > -1; i--){
    revStr.push(lowStr[i]);
  }
  for(let i = 0; i < lowStr.length; i++){
    if(lowStr[i] == revStr[i]){
      count++;
    }
  }
  console.log(revStr)
  if(count == lowStr.length){
    return true;
  }
  return false;
}

