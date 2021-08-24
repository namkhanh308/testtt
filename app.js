let n = parseInt(prompt("Nhập n"))
let count = 0;
for(let i = 0 ; i < 500;i++){
    if(i%2==0){
        console.log(i)
        count++;
    }
    if(count == n){
        break;
    }
}