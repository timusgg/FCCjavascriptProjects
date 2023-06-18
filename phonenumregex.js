function telephoneCheck(str) {
  let match2= str.match(/^(1\s?|1?)\d{3}(\s?|-?)\d{3}(-|\s)?\d{4}$/g)
  let match1 = str.match(/^(1\s?|1?)[(]\d{3}[)]\s?\d{3}-?\s?\d{4}$/g)
  let checkBraces = str.match(/[(]/g);
  if(checkBraces && match1){
    return true;
  }
  if(match2){
    return true;
  }
  return false;
}

telephoneCheck("15555555555");


