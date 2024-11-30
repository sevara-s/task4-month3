let soz="hello";
let reverse = "";
for (let i=0; i<soz.length; i++){
    reverse=soz[i]+reverse;
}
if(reverse==soz){
    console.log(true);
}else{
    console.log(false);
}