function rot13(str) {
  let cipher = str;
  let decipher = '';
  for(let i = 0; i < cipher.length; i++){
    let code = cipher.charCodeAt(i)
    if(code >= 65 && code <= 90){
      if(code > 77){
        let difference = 90 - code; 
        code = 77 - difference;
      }else{
        code += 13;
      }
      let text = String.fromCharCode(code);
      decipher += text;
    }else{
      decipher += cipher[i]
    }
  }
  return decipher;
}
rot13("SERR PBQR PNZC");
rot13("SERR CVMMN!");
rot13("SERR YBIR?")
