const express = require("express");
const z =require("zod")

const app = express();
app.use(express.json())

const schema= z.object({
 kidneys:z.array(z.number()),
 name:z.string().min(2,{message:"name length should be more than 6"})
})


app.post("/kidneys",function(req,res){
  const body = req.body;
  const response= schema.safeParse(body)
 
  console.log(response);
  if(response.success) {
   res.send("done")
  }else{
    res.send(response)
  }
})


app.listen(3000,()=>{
    console.log("server is listening on port 3000");
});