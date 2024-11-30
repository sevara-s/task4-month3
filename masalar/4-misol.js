let letter = "abc";
let result = "";

for (let i = 0; i < letter.length; i++) {
  let res = String.fromCharCode(letter.charCodeAt(i) + 1);
  result += res;
}

console.log(result);  
