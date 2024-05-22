var array = [];

function FizzBuzz() {

    if(array.length == 0){
        array.push(1);
    }else{
        var num = array[array.length - 1];
        array.push(num+1);
    }

    console.log(array);
    
}