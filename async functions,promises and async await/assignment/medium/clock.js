
function clock(){
    const d=new Date();    
    setTimeout(()=>{
        const ampm=d.getHours()>=12 ? "PM":"AM"
        const str= d.getHours()+":"+d.getMinutes()+":"+ d.getSeconds()+ampm 
        console.log(str);
        clock();   
    },1000)

}

clock()