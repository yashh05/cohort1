function counter(count,duration){
   if(count>0){
    setTimeout(function(){
        console.log("hello ji");
        counter(count-1,duration)
    },duration)
   }
    
}

counter(3,1000)
