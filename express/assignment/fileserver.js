const express=require("express")
const fs=require("fs")
const app= express();

app.get("/files",function(req,res){
    fs.readdir("./files",(err,files)=>{
        if(err) res.status(500).send("internal server error");
        else{
            res.json(files)
    }
})    
})


app.get("/files/:filename",function(req,res){
    const filename=req.params.filename;
    fs.readdir("./files",function(err,files){
        if(!files.includes(filename)){
            res.status(404).send("file not found")
        }
        fs.readFile("./files/"+filename,"utf8",function(err,data){
            if(err){
                res.status(500).send("internal server error");
            }
            else{
                res.status(200).send({
                    name:filename,
                    content:data
                })
            }
        })
    })
})

app.listen(3000,()=>console.log("server is listening"))