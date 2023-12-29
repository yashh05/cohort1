const fs = require("fs");


function removespaces(str){
  const resultString=str.replace(/\s+/g," ").trim()
  return resultString;
}

function fileClean() {
  fs.readFile("a.txt", "utf8", function (error, data) {
    if (error) {
      console.log("6"+error);
      return;
    }
    const newData= removespaces(data) 
    console.log(newData);
    fs.writeFile("a.txt", newData,(err)=>{
      if(err) console.log(err);
    })
  })
}
fileClean();