// by using a callback 

function fetchDataWithCallback(callback) {
    setTimeout(function() {
      const data = "Data from server";
      callback(null, data); // Simulating a successful data retrieval
    }, 1000);
  }
  
  // Example of using the callback
  fetchDataWithCallback(function(error, result) {
    if (error) {
      console.error("Error:", error);
    } else {
      console.log("Callback Result:", result);
    }
  });
  

  // by using promises

function fetchDataWithPromise(){
    return new Promise(function(resolve){
        setTimeout(()=>{
            const data="data from server";
            resolve(data);
        },5000);
    })
}

fetchDataWithPromise().then((data)=>console.log(data))