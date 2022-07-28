let number=prompt("Eded daxil et")
var count=0;
if (number<50) {
    for (let i = 0; i < number; i++) {
       if (i%3==0) {
       count++;
       console.log(i)
       }
    }
 
    alert(count);
}
else if(number>50 && number<100){
    for (let i = 0; i < number; i++) {
        if (i%5==0) {
            count++;
            console.log(i)
        }
        
    }
    alert(count);
}
else if(number>100){
    for (let i = 0; i < number; i++) {
        if (i%8==0) {
            count++;
            console.log(i)
        }
        
    }
    alert(count);

}
