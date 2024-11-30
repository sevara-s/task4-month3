let str = "Salom dunyo";
let index = str.indexOf(" ");  
let reverse = str.slice(index + 1) + " " + str.slice(0, index);
console.log(reverse); 

