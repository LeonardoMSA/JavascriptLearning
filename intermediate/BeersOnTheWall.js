function bottles() {

    var bottles = 99;
    var bottleWord = "bottles";

    while(bottles>-1){
        
        if(bottles == 1){
            bottleWord = "bottle";
        }
        
        if(bottles>=1){
            console.log(bottles+" "+bottleWord+" of beer on the wall, "+bottles+" "+bottleWord+" of beer.");
        }else{
            console.log("No more bottles of beer on the wall, no more bottles of beer");
            console.log("Go to the store and buy some more, 99 bottles of beer on the wall");
            break;
        }
        bottles--;

        if(bottles>=1){
            console.log("Take one down and pass it around, "+bottles+" "+bottleWord+" of beer on the wall.");
        }else{
            console.log("Take one down and pass it around, No more bottles of beer on the wall");
        }
        
    }
    
}