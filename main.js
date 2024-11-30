let soz = prompt("Soz kiriting");
let letters="aeuoio'"

let count = 0;
for (let i = 0; i<=soz.length-1;i++){
    if (letters.includes(soz[i])){
        count++;
    }
}
console.log(count);
 