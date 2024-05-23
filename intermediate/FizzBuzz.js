var array = [];
var count = 1;

function FizzBuzz() {

    while(count <= 100){
        
        if(count % 3 == 0 && count % 5 == 0){
            array.push("FizzBuzz");
        }else if(count % 5 == 0){
            array.push("Buzz");
        }else if(count % 3 == 0){
            array.push("Fizz");
        }else{
            array.push(count);
        }

        count++;
        
    }
    console.log(array);
    
}