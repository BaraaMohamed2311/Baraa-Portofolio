const express =  require("express");
const app =  express();
const PORT = 8080;

app.use(express.json())
app.get("/",(req , res)=>{
    res("Baraa's Backend")
})
app.post("/",async (req , res)=>{
    
        const {email , text} =req.body;
        try{
            const isSent =await mailSupportHelpers(email , text);
            
            if(isSent){
                res.json({
                    success:true,
                    message:"Email Sent Successfully"
                });
            }
            else{
                res.json({
                    success:false,
                    message:"Email wasn't Sent"
                });
            }
            
        }
        catch(err){
            console.log("Error Sending Email Support" , err)
            res.json({
                success:false,
                message:"Error Sending Email"
            });
        }
    

})


app.listen(PORT,function(err){
    if (err) console.log("Error in server setup")
    console.log("Server listening on Port", PORT);
})