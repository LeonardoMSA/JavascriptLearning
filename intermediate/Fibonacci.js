function fibonacciGenerator (n) {

        var array=[];
        
        for(var i=0; i<n; i++){
            
            if(i==0){
                array.push(0);
            }else if(i==1){
                array.push(1);
            }else{
                
                var newNum = array[i-1] + array[i-2];
                array.push(newNum);
                
            }
            
        }
        
        return array;
        
    }
    
    