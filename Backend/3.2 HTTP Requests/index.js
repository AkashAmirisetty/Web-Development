import express from "express";
const app = express();
const port=3000;

app.get("/", (req,res)=> {
    res.send("<h2>Hello, This is Akash!</h2>");
    // console.log(req.rawHeaders);
});
app.get("/about", (req,res)=>{
    res.send("<h2>About Me</h2><p>I am a B.tech final year student, learning full stack web development</p>")
});

app.get("/contact", (req,res)=>{
    res.send("<h2>Contact</h2><p>My contact number is : +91-7993736981</p>")
})
app.listen(port, ()=>{
    console.log(`Server started on port ${port}`)

})