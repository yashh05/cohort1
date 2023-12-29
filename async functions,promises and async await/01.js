function  findsum(n){
    let ans=0;
    for(let i=0;i<n;i++){
        ans+=i;
    }
    return ans;
}

function findtillSum1100(){
   console.log(findsum(100));
}

function syncSleep(){
    let a=1;
    for(let i=0;i<100000000;i++){
        a++;
    }
    console.log(a);
}


// syncSleep();  //all performing synchronosly
// findtillSum1100();   


setTimeout(findtillSum1100,1000);    // this is where the js knows that okay this function will take time and it moves forward
console.log("hello world");

//some other async functions are- fs.readFile , Fetch 


//part 2


const fs= require('fs')

fs.readFile("a.txt","utf-8",(err,data)=>{
console.log(data);
})

let a=0;

for(let i=0;i<1000000000;i++){  // lets say this takes longer than the file read still "a" will be printed first as asynchoronous functions wait till all the synchorous function are done working or the thread is free.
    a++;
}
console.log(a);

